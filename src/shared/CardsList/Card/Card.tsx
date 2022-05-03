import React from "react";
import styles from "./card.css";

export function Card() {
    return (
        <li className={styles.card}>
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
                    <span className={styles.createdAt}>4 часа назад</span>
                </div>
                <h2 className={styles.title}>
                    <a className={styles.postLink} href="#post-url">
                        Следует отметить что никак не могу понять что происходит с этими компоненнтами Следует отметить что никак не могу
                        понять что происходит с этими компоненнтами
                    </a>
                </h2>
            </div>

            <div className={styles.preview}>
                <img
                    className={styles.previewImg}
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                    alt="image"
                />
            </div>
            <div className={styles.menu}>
                <button className={styles.menuButton}>
                    <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                        <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
                        <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
                    </svg>
                </button>
            </div>
            <div className={styles.controls}>
                <div className={styles.karmaCounter}>
                    <button className={styles.up}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
                        </svg>
                    </button>
                    <span className={styles.karmaValue}>123</span>
                    <button className={styles.down}>
                        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4" />
                        </svg>
                    </button>
                </div>
            </div>
        </li>
    );
}
