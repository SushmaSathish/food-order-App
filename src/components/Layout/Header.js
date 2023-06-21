import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsimage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header=(props)=>{
    return (<Fragment>
        <header className={classes.header}>
        <h1>Reactmeals</h1>
        <HeaderCartButton/>
        </header>
         <div className={classes["main-image"]}>
        <img src={mealsimage}alt="A table full of delicious meals!"/>
        </div>  
    </Fragment>);
};
export default Header;