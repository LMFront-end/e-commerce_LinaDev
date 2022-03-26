import React from 'react'
import Skeleton from 'react-loading-skeleton'

const Loading = () => {
    return (
        <>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={400}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={50} width={350}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={75}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={25} width={150}/>
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={50} />
        </div>
        <div clasName="d-flex justify-content-center col-md-3">
            <Skeleton height={150}/>
        </div>
        </>

    
    )
}

export {Loading}