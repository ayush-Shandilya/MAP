import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { costomReducer } from './Reducers'
const store = configureStore({middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    immutableCheck:false,
    serializableCheck:false,
}),
    reducer: {
        custom: costomReducer
    }
})
export default store