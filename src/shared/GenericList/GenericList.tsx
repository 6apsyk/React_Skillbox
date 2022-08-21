import React from "react";

interface IItem {
    id: string;
    text: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: "a" | "li" | "button" | "div";
    href?: string;
}
interface IGenerateList {
    list: IItem[];
}

const noop = () => {}; // что не делать проверку на onClick

export function GenerateList({ list }: IGenerateList) {
    return (
        <ul>
            {list.map(({ As = "div", className, onClick = noop, text, id, href }) => (
                <As className={className} onClick={() => onClick(id)} key={id} href={href}>
                    {text}
                </As>
            ))}
        </ul>
    );
}
