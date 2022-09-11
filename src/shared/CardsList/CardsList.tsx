import React from "react";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";

export function CardList() {
    const [posts] = React.useContext();

    return (
        <ul className={styles.cardslist}>
            <Card />
            <Card />
            <Card />
            <Card />
        </ul>
    );
}
