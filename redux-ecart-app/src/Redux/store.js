import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartlistSlice from "./slices/cartlistSlice"

  const store = configureStore({
    reducer:{
            wishlistReducer:wishlistSlice,
            cartlistReducer:cartlistSlice
    }
  })

  export default store