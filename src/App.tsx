import React from "react";
import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";

function App() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    );
}

export default App;
