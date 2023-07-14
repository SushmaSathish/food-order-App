import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem';
import {useContext} from 'react';
import cartContext from '../../Store/Cart-context';
const Cart = (props)=>{
    const cartCntx= useContext(cartContext);
    /*let totalAmount=`$${cartCntx.totalAmount}`;
    if (typeof cartCntx.totalAmount==='number'){
     
        totalAmount=`$${cartCntx.totalAmount.toFixed(2)}`;
      }
    const hasItems= cartCntx.items.length>0;
    const cartItemRemoveHandler =id=>{
        cartCntx.removeItem(id);
    }
    const cartItemAddHandler = item=>
    {
        cartCntx.addItem({...item,amount:1})
    }
    const cartItems=(<ul className={classes['cart-items']}>{cartCntx.items.map((item)=><CartItem key ={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>)}</ul>)
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}
export default Cart;*/
let  totalAmount = `$${cartCntx.totalAmount}`;
if (typeof cartCntx.totalAmount==='number'){

   totalAmount=`$${cartCntx.totalAmount.toFixed(2)}`;
 }
const hasItems=cartCntx.items.length>0;
const cartItemRemoveHandler=id=>{
cartCntx.removeItem(id);
};
const cartItemAddHandeler=item=>{
cartCntx.addItem({...item,amount:1})
};
const CartItems=(<ul className={classes['cart-items']}>
{cartCntx.items.map((item)=><CartItem key={item.id} name={item.name} amount={item.amount}  price={item.price}  onRemove={cartItemRemoveHandler.bind(null,item.id)}
onAdd={cartItemAddHandeler.bind(null,item)}
 />)}
</ul>)
return(
<Modal onClose={props.onClose}>
{CartItems}
<div className={classes.total}>
  <span>Total Amount</span>
  <span>{totalAmount}</span>
</div>
<div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
  {hasItems && <button className={classes.button}>Oder</button>}
</div>
</Modal>
)
};
export default Cart;