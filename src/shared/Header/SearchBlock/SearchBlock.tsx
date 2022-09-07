import React, { useContext } from "react";
import { useUserData } from "../../../hooks/useUserData";
import { userContext } from "../../context/userContext";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

export function SearchBlock() {
    const { iconImg, name } = useContext(userContext);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={iconImg} userName={name} />
        </div>
    );
}
