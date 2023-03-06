import React from 'react';

const Child = ({ count }) => {
    return (
        <div className='flex justify-center items-center my-3'>
            <div className=' w-[200px] border-indigo-300 border-2 p-2'>
                <h1 className='text-2xl font-bold'>{count}</h1>
                <div className='flex justify-between my-5'>

                </div>
            </div>
        </div>
    );
};

export default Child;