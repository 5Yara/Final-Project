import { createSlice } from "@reduxjs/toolkit";

let initialState = { count: 0, userName: '' }
let counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increase:(state)=>{
            state.count +=1
        },
        increaseByAmount:(state , action)=>{

            state.count +=action.payload
        },
        decrease:(state)=>{
            state.count -=1
        }
    }
})

export let counterReducer = counterSlice.reducer;
export let {increase , decrease , increaseByAmount} = counterSlice.actions;