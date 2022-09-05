import React, {Fragment} from "react";
import {useBreadCrumbs} from "../../../store/bread-crumbs-context";
import {Link} from "react-router-dom";
import classes from './BreadCrumbs.module.css'

const BreadCrumbs = () => {

    const {crumbs} = useBreadCrumbs();

    let home;

    if (crumbs.length === 0)
        home = <span><h4>Home</h4></span>
    else
        home = <span><h4 style={{display: 'inline-block'}}><Link to={'/'}>Home</Link></h4> / </span>

    return (
        <div className={`text-light ${classes.crumbs}`}>
            {home}
            {crumbs.map((crumb, idx) =>
                    <Fragment key={idx}>
                        {idx < crumbs.length - 1 && <span><Link to={crumb.url}>{crumb.name}</Link> / </span>}
                        {idx === crumbs.length - 1 && <span className={'text-info'}>{crumb.name}</span>}
                    </Fragment>
            )}
        </div>
    );
}

export default BreadCrumbs;