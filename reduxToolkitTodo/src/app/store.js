// THis is Called Single Source of Truth


import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer:todoReducer
})