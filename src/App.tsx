import React from "react";
import { hot } from "react-hot-loader/root";
import "./main.global.css";
import { CardList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Dropdown } from "./shared/Dropdown";
import { GenerateList } from "./shared/GenericList";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { merge } from "./utils/js/merge";
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";

const LIST = [
    { text: "somee", As: "li" as const },
    { text: "othersome", As: "li" as const },
    { text: "somesome", As: "li" as const },
].map(generateId); // добавление уникальных ключей

const App = () => {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList((list) => list.filter((el) => el.id !== id));
    };

    const handleAddClick = () => {
        setList(list.concat(generateId({ text: generateRandomString(), As: "li" as const })));
    };

    return (
        <Layout>
            <Header />
            <Content>
                <CardList />
                {/* <button onClick={handleAddClick}>ADD</button> */}
                {/* <ul>
                    <GenerateList list={list.map(merge({ onClick: handleItemClick }))} />
                </ul> */}
            </Content>
            {/* <div>
                <Dropdown isOpen={false} button={<button>TEST</button>}>
                    <CardList />
                </Dropdown>
            </div> */}
        </Layout>
    );
};

export default hot(() => <App />);
