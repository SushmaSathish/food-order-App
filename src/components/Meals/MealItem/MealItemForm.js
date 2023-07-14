import classes from'./MealItemForm.module.css';
import Input from '../../UI/Input';
import React,{  useState } from 'react';
import { useRef } from 'react';
const MealItemForm=(props)=>
{   const[amountIsValid, setAmountIsValid]=useState(true);
    const amountInputRef= useRef();
    const submitHandler= (event)=>{
        event.preventDefault();
        const enteredAmount= amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length===0 || enteredAmountNumber <1|| enteredAmountNumber>5){
    setAmountIsValid(false);return}
props.OnAddToCart(enteredAmountNumber)}
    return<form className={classes.form} onSubmit={submitHandler}>
      
        <Input ref={amountInputRef} label="Amount"
        input={{
            id:"amount"+props.id,
            type:'Number',
            defaultValue:'1',
            min :'1',
            max:'5',
            step:'1',
           
        }}/>
        <button className={classes.formbutton}>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount(1-5).</p>}
        </form>
    
}
export default MealItemForm;