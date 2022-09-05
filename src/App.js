import './App.css';
import Header from "./components/UI/Header/Header";
import Home from "./pages/Home";
import {Navigate, Route, Routes} from "react-router-dom";
import Course from "./pages/Course";
import Lecture from "./pages/Lecture";
import TestsYourSkills from "./pages/TestsYourSkills";
import SolveProblem from "./pages/SolveProblem";
import Practice from "./pages/Practice";
import ProblemSolution from "./pages/ProblemSolution";
import {useUser} from "./store/user-context";
import Auth from "./pages/Auth";
import {useEffect} from "react";
import useHttp from "./hooks/http-hook";
import useTopics from "./hooks/topics-hook";
import useProgress from "./hooks/progress-hook";

function App() {

    const {userId} = useUser();
    const {setTopics} = useTopics();
    const {setProgress} = useProgress();
    const {fetchAllTopics, fetchAllProgressForUser} = useHttp();

    useEffect(() => {
        if (userId === -1)
            return;

        const fillTopics = async () => {
            const data = await fetchAllTopics()
            setTopics(data);
        }
        const fillProgress = async () => {
            const data = await fetchAllProgressForUser(userId);
            setProgress(data);
        }

        fillTopics();
        fillProgress();

    }, [userId, setTopics, fetchAllTopics, setProgress, fetchAllProgressForUser])

    if (userId === -1) {
        return (
            <Auth />
        )
    }
    else {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/course/:topicId" element={<Course/>}/>
                    <Route path="/course/:topicId/lectures" element={<Lecture/>}/>
                    <Route path="/course/:topicId/test-skills" element={<TestsYourSkills/>}/>
                    <Route path="/course/:topicId/test-skills/:problemIdx" element={<SolveProblem/>}/>
                    <Route path="/practice/:type" element={<Practice/>}/>
                    <Route path="/practice/:type/solution/:problemIdx" element={<ProblemSolution/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
