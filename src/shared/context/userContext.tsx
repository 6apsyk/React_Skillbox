import React from "react";
import { useUserData } from "../../hooks/useUserData";

interface IUserContextData {
    name?: string;
    iconImg?: string;
}

interface IUserContextProvider {
    children?: React.ReactNode;
}

export const userContext = React.createContext<IUserContextData>({});

export function UserContextProvider({ children }: IUserContextProvider) {
    const [data] = useUserData();

    return <userContext.Provider value={data}>{children}</userContext.Provider>;
}
