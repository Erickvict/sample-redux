import React, { useReducer } from 'react'

function reducerFn(state,action)
//in reducer function we have 2 arg...(state,action)
    //what we passing into the dispatch we get in the action parameter
    //conditions can be managed by using SWITCH case
{
   switch(action.type)
   {
    case "increment":
        return {count:state.count+1};
    case "decrement":
      return {count:state.count-1};
      default:
        return state;
   }
 
}


const ReducerHook = () => {

    const [state,dispatch]=useReducer(reducerFn,{count:1})
    //here state is variable and set initial state count is 0
    //reducer is function to update the new state.
    //reducer we wont call directly so we have dispatch to trigger the reducer function
    //what the reducer function returns is the new STATE
    //in reducer function we have 2 arg...(state,action)
    //what we passing into the dispatch we get in the action parameter

  //increment function
    const increment=()=>
    {
      dispatch({type:"increment"})
    }

//decrement function
    const decrement=()=>
      {
        dispatch({type:"decrement"})
      }
  return (
    
    <>
    <button onClick={increment}>ADD</button>
    <h1>{state.count}</h1>
    <button onClick={decrement}>SUB</button>
    </>
  )
}

export default ReducerHook