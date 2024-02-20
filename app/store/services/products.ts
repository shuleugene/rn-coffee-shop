import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product, BinsResponse} from '../types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.jsonbin.io/v3',
    headers: {
      'X-Master-Key':
        '$2a$10$1rywZgjBGc8trIA8alRIyeP3pNRCcjkxnObEtMtnXyd9euiWeiK9C',
    },
  }),
  endpoints: builder => ({
    getProducts: builder.query<BinsResponse<Product>, void>({
      query: () => 'b/65d3a2d7266cfc3fde8c7379/latest',
    }),
  }),
});

export const {useGetProductsQuery} = productsApi;
