//one file per api
import {createApi ,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const itemApi =createApi({
    reducerPath: 'itemsApi', //the name
    baseQuery:fetchBaseQuery({baseUrl:'/api'}),
    endpoints:(builder)=>{
        return{
            getItems: builder.query<{items:Item[]},void>({
                query: ()=>'items'
            })
        }
    }
})

export const {useGetItemsQuery}=itemApi;