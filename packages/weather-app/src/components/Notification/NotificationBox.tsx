import React from "react";
import "./NotificationBox.css";
import closeIcon from "../../assets/icons/close.png";

interface NotificationBoxProps {
    data: any;
    isOpen: boolean;
    onClose: () => void;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({ isOpen, onClose, data }) => {
    if (isOpen) {
        return (
            <div className="notificationbox-root">
                <div className="notificationbox-close">
                    <img onClick={onClose} src={closeIcon} alt="close" />
                </div>
                <div className="notificationbox-header">
                    <div className="notificationbox-header-contry">
                        <span>{data?.name}, {data?.sys.country}</span>
                        <h5>12:58, May 31</h5>
                    </div>

                    <div className="notificationbox-header-temp">
                        <span>12°C</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
export default NotificationBox;
