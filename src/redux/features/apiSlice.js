import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "https://pet-ecommerce-backend.vercel.app" }),
    endpoints: (builder) => ({
        getPets: builder.query({
            query: () => "/pets"
        }),
        getSingePet: builder.query({
            query:(id) => `/pets/${id}`
        })
    }), 
});


export  const  {useGetPetsQuery, useGetSingePetQuery} = api