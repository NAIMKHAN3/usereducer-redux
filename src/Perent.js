import React, { useContext, useState } from 'react';
import { UserContext } from './App';
import Child from './Child';

const Perent = () => {
    const { state, dispatch } = useContext(UserContext)

    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className=' w-[200px] border-indigo-300 border-2 p-2'>
                    <h1 className='text-2xl font-bold'>{state}</h1>
                    <div className='flex justify-between my-5'>
                        <button className='bg-purple-500 p-1 text-white rounded' onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                        <button className='bg-indigo-400 p-1 text-white rounded' onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
                    </div>
                </div>
            </div>
            <Child state={state}></Child>
        </div>
    );
};

export default Perent;