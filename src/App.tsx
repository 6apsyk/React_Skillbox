import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";

import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { tokenContext } from "./shared/context/tokenContext";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";

const App = () => {
    const [token] = useToken();

    const { Provider } = tokenContext;

    return (
        <Provider value={token}>
            <UserContextProvider>
                <PostsContextProvider>
                    <Layout>
                        <Header />
                        <Content>
                            <CardList />
                        </Content>
                    </Layout>
                </PostsContextProvider>
            </UserContextProvider>
        </Provider>
    );
};

export default hot(() => <App />);
