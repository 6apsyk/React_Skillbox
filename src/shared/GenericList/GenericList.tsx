import React from "react";
import Icon from "../../icon/Icon";
import styles from "./genericList.css";

interface IItem {
    id: string;
    text: string;
    img?: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: "a" | "li" | "button" | "div";
    href?: string;
}
interface IGenerateList {
    list: IItem[];
}

const noop = () => {}; // что не делать проверку на onClick

export function GenerateList({ list }: IGenerateList) {
    const color = "#cc6633";

    return (
        <ul className={styles.mainBox}>
            {list.map(({ As = "div", className, onClick = noop, text, id, href, img = "" }) => (
                <As className={styles[`${className}`]} onClick={() => onClick(id)} key={id} href={href}>
                    <Icon type={img} />
                    {text}
                </As>
            ))}
        </ul>
    );
}
