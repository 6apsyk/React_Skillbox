import React from "react";
import styles from "./textcontent.css";

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img
                        className={styles.avatar}
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="avatar"
                    />
                    <a className={styles.username} href="#user-url">
                        Дмитрий Гришин
                    </a>
                </div>
                <span className={styles.createdAt}>
                    <span className={styles.publishedLabel}>опубликовано </span>4 часа назад
                </span>
            </div>
            <h2 className={styles.title}>
                <a className={styles.postLink} href="#post-url">
                    Следует отметить что никак не могу понять что происходит с этими компоненнтами Следует отметить что никак не могу понять
                    что происходит с этими компоненнтами
                </a>
            </h2>
        </div>
    );
}
