import React from "react";
import { IIcon } from "../../../../icon/interfaceIcon";
import MenuIcon from "../../../../icon/MenuIcon/MenuIcon";
import { merge } from "../../../../utils/js/merge";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { Dropdown } from "../../../Dropdown";
import { GenerateList } from "../../../GenericList";
import styles from "./menu.css";

const bigList = [
    { text: "Комментарии", As: "div" as const, img: "comments" as IIcon, className: "title" },
    { text: "Поделиться", As: "div" as const, img: "share" as IIcon, className: "title" },
    { text: "Скрыть", As: "div" as const, img: "hide" as IIcon, className: "title" },
    { text: "Сохранить", As: "div" as const, img: "save" as IIcon, className: "title" },
    { text: "Пожаловаться", As: "div" as const, img: "complain" as IIcon, className: "title" },
    { text: "Закрыть", As: "div" as const, img: "" as IIcon, className: "close" },
].map(generateId);

const smallList = [
    { text: "Скрыть", As: "div" as const, img: "hide", className: "title" },
    { text: "Пожаловаться", As: "div" as const, img: "complain", className: "title" },
    { text: "Закрыть", As: "div" as const, className: "close" },
].map(generateId);

export function Menu() {
    const [list, setList] = React.useState(bigList);

    const getButton = () => {
        return (
            <button className={styles.menuButton}>
                <MenuIcon />
            </button>
        );
    };

    const handleClickMenu = (id: string) => {
        console.log(id);
    };

    return (
        <div className={styles.menu}>
            <Dropdown button={getButton()}>
                <GenerateList list={list.map(merge({ onClick: handleClickMenu }))} />
            </Dropdown>
        </div>
    );
}
