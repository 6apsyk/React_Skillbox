import React, { useEffect } from 'react';
import { tokenContext } from '../shared/context/tokenContext';
import axios from 'axios';


export function usePostData(){
    const [posts, setPosts] = React.useState([])
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
                        const dataPosts = response.data.children;
                        setPosts(dataPosts);
                    })
                    .catch(() => console.log("ошибка получения данных карточек"));
            }  
        }, [token])

    return posts
}