import React from "react";
import styles from "./text.css";
import cn from "classnames";

export enum EColor {
    black = "black",
    orange = "orange",
    green = "green",
    white = "white",
    greyF4 = "greyF4",
    greyF3 = "greyF3",
    greyD9 = "greyD9",
    greyD4 = "greyD4",
    grey66 = "grey66",
    grey99 = "grey99",
}

type TSize = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
    As?: "div" | "h1" | "h2" | "h3" | "h4" | "p" | "span";
    children?: React.ReactNode;
    size: TSize;
    mobileSize?: TSize;
    tabletSize?: TSize;
    dekstopSize?: TSize;
    color?: EColor;
    bold?: boolean;
}

function Text({ As = "span", color = EColor.black, bold = false, children, size, mobileSize, tabletSize, dekstopSize }: ITextProps) {
    const classes = cn(styles[`s${size}`], styles[color], {
        [styles.bold]: bold,
        [styles[`m${size}`]]: mobileSize,
        [styles[`t${size}`]]: tabletSize,
        [styles[`d${size}`]]: dekstopSize,
    });

    return <As className={classes}>{children}</As>;
}

export default Text;
