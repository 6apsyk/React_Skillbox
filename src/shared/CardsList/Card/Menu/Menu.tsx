import React from "react";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Dropdown } from "../../../Dropdown";
import { GenerateList } from "../../../GenericList";
import styles from "./menu.css";

const LIST = [
    { text: "Комментарии", As: "div" as const },
    { text: "Поделиться", As: "div" as const },
    { text: "Скрыть", As: "div" as const },
    { text: "Сохранить", As: "div" as const },
    { text: "Пожаловаться", As: "div" as const },
    { text: "Закрыть", As: "div" as const },
].map(generateId);

export function Menu() {
    const [list, setList] = React.useState(LIST);

    const getButton = () => {
        return (
            <button className={styles.menuButton}>
                <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                    <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
                    <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
                </svg>
            </button>
        );
    };

    return (
        <div className={styles.menu}>
            <Dropdown button={getButton()}>
                <GenerateList list={list} />
            </Dropdown>
        </div>
    );
}
