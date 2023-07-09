
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const resume = createApi({
    reducerPath: 'resume',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
    tagTypes: ['resume'],
    endpoints: (builder) => ({

    }),
});
