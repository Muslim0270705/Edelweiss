import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const getComps = createAsyncThunk(
    "comps/getComps",
    async (title,{rejectWithValue}) => {
      try {
        const res = await axios(`http://localhost:4444/comp?${title ? `title_like=${title}` : ""}`)
        if(res.statusText !== 'OK'){
          throw new Error("Server error !")
        }
        return res.data
      }catch (err) {
        return rejectWithValue(err.message)
      }
    }
)




const compSlice = createSlice({
    name: "comp",
    initialState: {
        list: [],
        isLoading: false,
        title:"",
        cart:[]
    },
    reducers: {
        Search: (state,{payload}) => {
            state.title = payload
        },
        addCart:(state,{payload}) => {
            state.cart.find(item => item.id == payload.id) ? state.cart = [...state.cart] : state.cart = [...state.cart,payload]
        },
        deleteCart:(state,{payload}) => {
            state.cart = state.cart.filter(item => item.id !== payload.id)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getComps.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getComps.fulfilled, (state, { payload }) => {
            state.list = payload;
            state.isLoading = false;
        });
        builder.addCase(getComps.rejected, (state) => {
            state.isLoading = false;
        });
    },
});


export const {Search,addCart,deleteCart} = compSlice.actions
export default compSlice.reducer

