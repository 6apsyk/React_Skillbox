import React from "react";
import styles from "./card.css";
import { Controls } from "./Controls";
import { Menu } from "./Menu";
import { Preview } from "./Preview";
import { TextContent } from "./TextContent";

interface IData {
    id: string;
}
interface IPost {
    data: IData;
    kind: string;
}
interface IPropsCard {
    post: IPost;
}

export function Card({ post }: IPropsCard) {
    return (
        <li className={styles.card}>
            <TextContent />
            <Preview />
            <Menu />
            <Controls />
        </li>
    );
}
