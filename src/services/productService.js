import { createAsyncThunk } from "@reduxjs/toolkit"
import { apiHandle } from "../api/apiHandle"



export const getProductsAsync = createAsyncThunk('get-products', async () => {
    const res  = await apiHandle().get('products')
    const data = await res.data
    return data
})
