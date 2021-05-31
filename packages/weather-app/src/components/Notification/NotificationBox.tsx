import React from "react";
import "./NotificationBox.css";
import closeIcon from "../../assets/icons/close.png";

interface NotificationBoxProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ isOpen }) => {
    // if (isOpen) {
    return (
        <div className="notificationbox-root">
            <div notificationbox-close>
                <img src={closeIcon}/>
            </div>
            <div className="notificationbox-header">
                <div className="notificationbox-header-contry">
                    <span>New York, US</span>
                    <h5>12:58, May 31</h5>
                </div>

                <div className="notificationbox-header-temp">
                    <span>12°C</span>
                </div>
            </div>
        </div>
    );
    // } else {
    //     return null;
    // }
};
export default NotificationBox;
