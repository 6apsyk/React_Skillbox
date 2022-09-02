import React from "react";
import { hot } from "react-hot-loader/root";
import useWindowDimensions from "./hooks/useWindowDimensions";
import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Dropdown } from "./shared/Dropdown";
import { GenerateList } from "./shared/GenericList";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import Text from "./shared/Text/Text";
import { merge } from "./utils/js/merge";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";

const LIST = [
    { text: "somee", As: "li" as const },
    { text: "othersome", As: "li" as const },
    { text: "somesome", As: "li" as const },
].map(generateId); // добавление уникальных ключей

const App = () => {
    const [list, setList] = React.useState(LIST);
    // const { width, height } = useWindowDimensions();
    // console.log(width, height);

    const handleItemClick = (id: string) => {
        setList(list => list.filter(el => el.id !== id));
    };

    const handleAddClick = () => {
        setList(list.concat(generateId({ text: generateRandomString(), As: "li" as const })));
    };

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
            </Content>
        </Layout>
    );
};

export default hot(() => <App />);
