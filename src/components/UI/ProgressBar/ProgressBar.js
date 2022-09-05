import React from "react";

const ProgressBar = ({percent}) => {
    return (
        <div className='my-4 w-100' style={{backgroundColor: 'rgba(228,230,233,0.59)', borderRadius: '30px'}}>
            <div className='text-center' style={{width: `${percent}%`, backgroundColor:'rgba(13,110,253,0.59)', borderRadius: '30px'}}>
                {percent}%
            </div>
        </div>
    )
}

export default ProgressBar;