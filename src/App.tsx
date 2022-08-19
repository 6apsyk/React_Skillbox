import React from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { MyList } from "./shared/GenericList";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { merge } from "./utils/js/merge";
import { generateId } from "./utils/react/generateRandomIndex";

const LIST = [{ value: "some" }, { value: "othersome" }, { value: "somesome" }].map(generateId); // добавление уникальных ключей

function App() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        console.log(id);
    };

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                <MyList list={list.map(merge({ onClick: handleItemClick }))} />
            </Content>
        </Layout>
    );
}

export default hot(() => <App />);
