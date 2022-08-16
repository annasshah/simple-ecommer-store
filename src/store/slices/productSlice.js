import { createSlice } from "@reduxjs/toolkit";
import { getProductsAsync } from "../../services/productService";
import { asyncStatuses } from "../../utils/asyncStatuses";

const initialState = {
  data : [],
  status : asyncStatuses.IDLE
}

const ProductSlice = createSlice({
  name:'products',
  initialState,
  reducers:{

  },
  extraReducers: (builder) => {

    builder.addCase(getProductsAsync.pending,(state,action)=> {
      state.status = asyncStatuses.LOADING
    })


    builder.addCase(getProductsAsync.fulfilled,(state,action)=> {
      state.status = asyncStatuses.SUCCEEDED
      state.data = action.payload
    })


    builder.addCase(getProductsAsync.rejected,(state,action)=> {
      state.status = asyncStatuses.ERROR
    })

  }
})


export default ProductSlice.reducer