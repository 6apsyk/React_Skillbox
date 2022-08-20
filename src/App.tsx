import React from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { MyList } from "./shared/GenericList";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { merge } from "./utils/js/merge";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";

const LIST = [{ value: "someeeeee" }, { value: "othersome" }, { value: "somesome" }].map(generateId); // добавление уникальных ключей

const App = () => {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list => list.filter(el => el.id !== id));
    };

    const handleAddClick = () => {
        setList(list.concat(generateId({ value: generateRandomString() })));
    };

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                <button onClick={handleAddClick}>ADD</button>
                <MyList list={list.map(merge({ onClick: handleItemClick }))} />
            </Content>
        </Layout>
    );
};

export default hot(() => <App />);
