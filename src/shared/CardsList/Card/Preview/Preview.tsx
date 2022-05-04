import React from "react";
import styles from "./preview.css";

export function Preview() {
    return (
        <div className={styles.preview}>
            <img
                className={styles.previewImg}
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="image"
            />
        </div>
    );
}
