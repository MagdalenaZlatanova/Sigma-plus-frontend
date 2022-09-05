import React, {Fragment} from "react";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Practice from "../../Practice/Practice";
import {useUser} from "../../../store/user-context";

const Header = () => {

    const {username, clearData} = useUser();

    return (
        <Fragment>
            <div className="sticky-top bg-dark">
                <div className="container-fluid text-white p-3">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h2 className="mb-4 me-5">Sigma +</h2>
                            <Practice />
                        </div>
                        <div>
                            <span className="me-5 text-light">Logged in as: <b className="text-white">{username}</b></span>
                            <button onClick={() => clearData()} className="btn btn-light">Log out</button>
                        </div>
                    </div>
                    <BreadCrumbs />
                </div>
            </div>
        </Fragment>
    )
}

export default Header;