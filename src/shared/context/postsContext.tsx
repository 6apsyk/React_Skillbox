import React from "react";
import { usePostData } from "../../hooks/usePostData";

// interface IUserContextData {
//     name?: string;
//     iconImg?: string;
// }

interface IPostsContextProvider {
    children?: React.ReactNode;
}

export const postsContext = React.createContext([]);

export function PostsContextProvider({ children }: IPostsContextProvider) {
    const [posts] = usePostData();

    return <postsContext.Provider value={posts}>{children}</postsContext.Provider>;
}
