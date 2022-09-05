import {useCallback, useState} from "react";

//const URL = "http://localhost:8080/api"
const URL = "https://sigma-plus-backend.herokuapp.com/api"

const useHttp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = async (urlPath, method = 'GET', body = undefined, userId = undefined) => {

        setError(null);
        setIsLoading(true);
        try {
            const headers = {'Content-Type': 'application/json',};
            if (userId)
                headers['user-id'] = userId;

            const request = await fetch(URL + urlPath, {
                method: method,
                headers: headers,
                body: body ? JSON.stringify(body) : undefined,
            })

            setIsLoading(false);

            if (request.ok)
                return await request.json();
            else {
                const data = await request.json()
                if (data && data.message) {
                    setError(data.message);
                } else {
                    setError("An error occurred")
                }

                return null;
            }
        } catch (e) {
            setError("Server didn't respond")
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (username, password) => {
        return  await sendRequest('/user/login', 'POST', {username, password});
    }

    const register = async (username, password) => {
        return  await sendRequest('/user/register', 'POST', {username, password});
    }

    const fetchAllTopics = useCallback(async () => {
        return await sendRequest('/topic');
    }, [])

    const fetchAllProgressForUser = useCallback(async (userId) => {
        return await sendRequest('/progress', 'GET', undefined, userId);
    }, [])

    const sendOpenProblem = useCallback(async (topicId, userId, problemIdx) => {
        return await sendRequest(`/progress/${topicId}/open/${problemIdx}`, 'POST', undefined, userId);
    }, [])

    const sendSolveProblem = useCallback(async (topicId, userId, problemIdx) => {
        return await sendRequest(`/progress/${topicId}/solve/${problemIdx}`, 'POST', undefined, userId);
    }, [])

    return {error, isLoading, login, register, fetchAllTopics, fetchAllProgressForUser, sendOpenProblem, sendSolveProblem};

}

export default useHttp;