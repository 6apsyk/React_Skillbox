import React from "react";
import Comments from "./Comments/Comments";
import Complain from "./Complain/Complain";
import Hide from "./Hide/Hide";
import Save from "./Save/Save";
import Share from "./Share/Share";

interface IPropsIcon {
    type: string;
}

function Icon({ type }: IPropsIcon) {
    switch (type) {
        case "comments":
            return <Comments />;
        case "share":
            return <Share />;
        case "hide":
            return <Hide />;
        case "save":
            return <Save />;
        case "complain":
            return <Complain />;

        default:
            return <></>;
    }
}

export default Icon;
