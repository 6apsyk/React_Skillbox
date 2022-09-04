import React from "react";
import axios from 'axios'
import { tokenContext } from "../shared/context/tokenContext";

interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData() {
   const [data, setData] = React.useState<IUserData>({});
   const token = React.useContext(tokenContext)

    React.useEffect(() => {
        if (token && token.length > 1) {
            axios
                .get("https://oauth.reddit.com/api/v1/me", {
                    headers: {
                        Authorization: `bearer ${token}`,
                    },
                })
                .then(response => {
                    const dataUser = response.data;
                    setData({ name: dataUser.name, iconImg: dataUser.icon_img });
                })
                .catch(() => console.log("ошибка получения данных о пользователе"));
        }
    }, [token]); 

    return [data]
}

