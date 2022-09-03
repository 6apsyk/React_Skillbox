import React from "react";
import IconAnon from "../../../../icon/IconAnon/IconAnon";
import Text, { EColor } from "../../../Text/Text";
import styles from "./userBlock.css";

interface IUserBlockProps {
    avatarSrc?: string;
    userName?: string;
}

export function UserBlock({ avatarSrc, userName }: IUserBlockProps) {
    return (
        <a
            href="https://www.reddit.com/api/v1/authorize?client_id=hERfDcmRu9HK0eAGM8FcLg&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
            className={styles.userBox}
        >
            <div className={styles.avatarBox}>
                {avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} /> : <IconAnon />}
            </div>
            <div className={styles.username}>
                <Text size={20} color={userName ? EColor.black : EColor.grey99}>
                    {userName || "Аноним"}
                </Text>
            </div>
        </a>
    );
}
