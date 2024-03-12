'use client'
import { useEffect } from 'react'
import React from 'react'

export default function error({Error, reset}) {
    useEffect(() => {
        console.log(error);
    }, [error]);
    return (
        <div className='text-center mt-10'>
            <h1>Something went Wrong.Please Try again Later.</h1>
            <button className='hover:text-blue-600' onClick={() => reset()}>Try Again</button>
        </div>
    )

}
