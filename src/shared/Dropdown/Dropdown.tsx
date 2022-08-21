import React from "react";
import styles from "./dropdown.css";

interface IDropdownProps {
    children: React.ReactNode;
    button: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export function Dropdown({ children, button, isOpen, onClose, onOpen }: IDropdownProps) {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);

    const handleOpen = () => {
        if (isOpen === undefined) {
            setIsDropdownOpen(value => !value);
        }
    };

    return (
        <div className={styles.container}>
            <div onClick={handleOpen}>{button}</div>
            {isDropdownOpen && (
                <div className={styles.listContainer}>
                    <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
}
