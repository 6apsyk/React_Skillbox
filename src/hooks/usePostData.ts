import React, { useEffect } from 'react';
import { tokenContext } from '../shared/context/tokenContext';
import axios from 'axios';

interface IData {
    id: string
}
interface IPostData {
    data: IData;
    kind: string;
}


export function usePostData(){
    const [posts, setPosts] = React.useState<IPostData[]>([])
    const token = React.useContext(tokenContext)
        
        React.useEffect(() => {
            if (token && token.length > 1) {
                axios
                    .get("https://oauth.reddit.com/best?sr_detail=true", {
                        headers: {
                            Authorization: `bearer ${token}`,
                        },
                    })
                    .then(response => {
                        const dataPosts = response.data.data.children;
                        setPosts(dataPosts);
                    })
                    .catch(() => console.log("ошибка получения данных карточек"));
            }  
        }, [token])

    return [posts]
}