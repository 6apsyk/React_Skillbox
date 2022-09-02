import React from "react";
import Comments from "./Comments/Comments";
import Complain from "./Complain/Complain";
import Hide from "./Hide/Hide";
import { IIcon, IIconSize } from "./interfaceIcon";
import Save from "./Save/Save";
import Share from "./Share/Share";

interface IPropsIcon {
    name: IIcon;
    size: IIconSize;
}

function Icon({ name, size }: IPropsIcon) {
    switch (name) {
        case "comments":
            return <Comments size={size} />;
        case "share":
            return <Share size={size} />;
        case "hide":
            return <Hide size={size} />;
        case "save":
            return <Save size={size} />;
        case "complain":
            return <Complain size={size} />;

        default:
            return <></>;
    }
}

export default Icon;
