import CartContext from "./Cart-context";
const CartProvider = props=>{
    const addItemToCartHandler=(items)=>{};
    const removeItemToCartHandler=(id)=>{};
    const cartContext={
        items:[],
        amount:0,
        addItem: addItemToCartHandler,
        removeItem : removeItemToCartHandler,
    };
    return < CartContext.Provider value ={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;