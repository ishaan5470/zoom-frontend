import React from 'react';
import { useDispatch } from 'react-redux';
import {actionCreators} from "./State/index";
const Shop = () => {
    const dispatch=useDispatch();
  return (
    <div>
        <button className='btn1' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>
            +
        </button>
    Add this item to cart 
    <button className='btn2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>
        -
    </button>




    </div>
  )
}

export default Shop; 