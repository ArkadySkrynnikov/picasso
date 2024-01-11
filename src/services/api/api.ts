import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../types/postTypes.ts";

export const postApi = createApi({
    reducerPath: "post",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (build) => ({
        fetchLimitedPosts: build.query<
            IPost[],
            { limit: number; start: number }
        >({
            query: ({ limit = 7, start = 0 }) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                    _start: start,
                },
            }),
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
});

export const { useFetchLimitedPostsQuery, useFetchPostByIdQuery } = postApi;
