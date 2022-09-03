import axios from "axios";
import React from "react";
import styles from "./searchblock.css";
import { UserBlock } from "./UserBlock";

interface ISearchBlockProps {
    token: string;
}

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
    const [data, setData] = React.useState<IUserData>({});
    console.log("token", token);

    React.useEffect(() => {
        axios
            .get("https://oauth.reddit.com/api/v1/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(response => {
                console.log("response", response);
                const dataUser = response.data;
                setData({ name: dataUser.name, iconImg: dataUser.icon_img });
            })
            .catch(() => console.log("ошибка получения данных о пользователе"));
    }, [token]);

    return (
        <div className={styles.searchBlock}>
            <UserBlock avatarSrc={data.iconImg} userName={data.name} />
        </div>
    );
}
