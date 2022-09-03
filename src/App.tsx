import React from "react";
import { hot } from "react-hot-loader/root";
import { useToken } from "./hooks/useToken";

import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";

const App = () => {
    const token = useToken();

    return (
        <Layout>
            <Header token={token} />
            <Content>
                <CardList />
            </Content>
        </Layout>
    );
};

export default hot(() => <App />);
