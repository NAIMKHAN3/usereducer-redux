import React, { useContext } from 'react';
import { UserContext } from './App';


const Home = () => {
    const { state } = useContext(UserContext)
    return (
        <div className='text-4xl font-bold text-indigo-600 m-5'>
            <h1>This component is useReducer</h1>
            <div className='flex justify-center items-center my-3'>
                <div className=' w-[200px] border-indigo-300 border-2 p-2'>
                    <h1 className='text-2xl font-bold'>{state}</h1>
                    <div className='flex justify-between my-5'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;