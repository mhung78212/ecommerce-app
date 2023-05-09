const initialState = {
    cart: [],
};

const CartSlide = createSlice({
    name: "cart",
    initialState,
    reducer: {
        addCartItem: (state,action)=>{
            
        }
    }
});

export const { addCartItem } = CartSlide.actions;
const CartReducer = CartSlide.reducer;
export default CartReducer;
