import React from "react";
import { postsContext } from "../context/postsContext";
import { Card } from "./Card/Card";
import styles from "./cardslist.css";

export function CardList() {
    const posts = React.useContext(postsContext);
    console.log("posts", posts);

    return (
        <ul className={styles.cardslist}>
            {posts.map((post) => (
                <Card key={post.data.id} post={post} />
            ))}
        </ul>
    );
}
