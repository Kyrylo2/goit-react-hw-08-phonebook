import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const axiosBaseQuery =
  () =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: axiosBaseQuery(),

  tagTypes: ['Contacts'],
  endpoints(build) {
    return {
      getContacts: build.query({
        query: () => ({ url: '/contacts', method: 'get' }),
        providesTags: ['Contacts'],
      }),

      addContact: build.mutation({
        query: body => {
          return { url: '/contacts', method: 'post', data: body };
        },
        invalidatesTags: ['Contacts'],
        async onQueryStarted(requestId, { dispatch, queryFulfilled }) {
          const promise = queryFulfilled;
          toast.promise(promise, {
            pending: 'Adding contact...',
            success: 'Contact added!',
            error: 'Failed to add contact',
          });
        },
      }),

      updateContact: build.mutation({
        query: ({ id, ...fields }) => {
          return { url: `/contacts/${id}`, method: 'patch', data: fields };
        },
        invalidatesTags: ['Contacts'],
        async onQueryStarted(requestId, { dispatch, queryFulfilled }) {
          const promise = queryFulfilled;
          toast.promise(promise, {
            pending: 'Updating contact...',
            success: 'Contact updated!',
            error: 'Failed to update contact',
          });
        },
      }),

      deleteContact: build.mutation({
        query: id => {
          return { url: `/contacts/${id}`, method: 'delete' };
        },
        invalidatesTags: ['Contacts'],
        async onQueryStarted(requestId, { dispatch, queryFulfilled }) {
          const promise = queryFulfilled;
          toast.promise(promise, {
            pending: 'Deleting contact...',
            success: 'Contact deleted!',
            error: 'Failed to delete contact',
          });
        },
      }),
    };
  },
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactsApi;
