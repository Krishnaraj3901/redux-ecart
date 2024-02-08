import { createSlice } from "@reduxjs/toolkit";


const cartlistSlice = createSlice({
  name:"cartlist",
  initialState:[],
  reducers:{
    addToCart:((state,action)=>{
      state.push(action.payload)
    }),
    deleteFromCart:((state,action)=>{
      return state.filter(item=>item.id!=action.payload)
    }),
    emptyCart:((state)=>{
      return state=[]
    })
    
  }
})

export const {addToCart,deleteFromCart,emptyCart}=cartlistSlice.actions;
export default cartlistSlice.reducer