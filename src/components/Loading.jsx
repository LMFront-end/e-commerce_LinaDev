import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
    return (
        <>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={350}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={350}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={350}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={350}/>
        </div>
        </>

    
    )
}

export {Loading}