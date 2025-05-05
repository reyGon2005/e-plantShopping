// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {addItem} from './CartSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
