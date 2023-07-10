import {configureStore} from '@reduxjs/toolkit'
import { itemApi } from './services/api-service'

export const store = configureStore({
    reducer:{
        [itemApi.reducerPath]:itemApi.reducer 
    },
    middleware:(getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(itemApi.middleware);
    },
})
//syntax of es2015 : tells the compiler that is not a string . it a variable that references a astring
// The square brackets around [itemApi.reducerPath] indicate that the value inside the brackets is a
//  dynamic property key. The expression itemApi.reducerPath is evaluated, and the resulting value 
//  is used as the property key for the reducer object.