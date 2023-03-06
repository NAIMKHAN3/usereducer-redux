import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Perent from './Perent';
import { createContext, useReducer } from 'react';
import Form from './Form';


export const UserContext = createContext();
function App() {

  const initialState = 0;
  const reducer = (state, action) => {
    console.log(action)
    if (action.type === "DECREMENT") {
      return state - 5
    }
    if (action.type === "INCREMENT") {
      return state + 5
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState)


  return (

    <UserContext.Provider value={{ state, dispatch }}>
      <div className="">
        <Home></Home>
        <Perent></Perent>
        <Form></Form>
      </div>
    </UserContext.Provider>

  );
}

export default App;
