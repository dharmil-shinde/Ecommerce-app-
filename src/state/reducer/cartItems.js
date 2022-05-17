const StateIn ={
    carts: []
}
const cartItems=(state=StateIn,action)=>{
    const product = action.payload;
    switch (action.type) {
        case "AddItem":
            
            return {
                ...state,
                carts:[...state.carts, product]
            }
            
            
            case "DeleteItem":
                const data =   state.carts.filter((e)=>
                    e.id!==product.id  )
                return{
                    ...state,
                    carts:  data
                }
               

        default:
            return state
         
    }
}
export default cartItems;