import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, IProd } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const ProdAPI = createApi({
    reducerPath: "ProdAPI",
    tagTypes: ["Products"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        prod: builder.query<IProd, void>({
            query: () => "/products?limit=100",
            providesTags: ["Products"]
        })
    }),
});


