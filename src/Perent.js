import React, { useState } from 'react';
import Child from './Child';

const Perent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className=' w-[200px] border-indigo-300 border-2 p-2'>
                    <h1 className='text-2xl font-bold'>{count}</h1>
                    <div className='flex justify-between my-5'>
                        <button className='bg-purple-500 p-1 text-white rounded' onClick={() => setCount(count - 1)}>Decrement</button>
                        <button className='bg-indigo-400 p-1 text-white rounded' onClick={() => setCount(pre => pre + 1)}>increment</button>
                    </div>
                </div>
            </div>
            <Child count={count}></Child>
        </div>
    );
};

export default Perent;