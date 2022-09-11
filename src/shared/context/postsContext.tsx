import React from "react";
import { usePostData } from "../../hooks/usePostData";

interface IData {
    id: string;
}

interface IPostContextData {
    data: IData;
    kind: string;
}

interface IPostsContextProvider {
    children?: React.ReactNode;
}

export const postsContext = React.createContext<IPostContextData[]>([]);

export function PostsContextProvider({ children }: IPostsContextProvider) {
    const [posts] = usePostData();

    return <postsContext.Provider value={posts}>{children}</postsContext.Provider>;
}
