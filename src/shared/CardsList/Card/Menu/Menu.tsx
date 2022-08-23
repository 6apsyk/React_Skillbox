import React from "react";
import { Dropdown } from "../../../Dropdown";
import { GenerateList } from "../../../GenericList";
import styles from "./menu.css";

export function Menu() {
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
                <GenerateList
                    list={[
                        { id: "1", text: "sdsada", As: "div" },
                        { id: "2", text: "qwerty", As: "div" },
                        { id: "3", text: "sdsada", As: "div" },
                        { id: "4", text: "qwerty", As: "div" },
                    ]}
                />
            </Dropdown>
        </div>
    );
}
