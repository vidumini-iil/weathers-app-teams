import React from "react";
import "./Notification.css";

import NotificationBox from "./NotificationBox";
import { useNotification } from "./useNotification";
import { tempConverter } from "./../../Utils/tempConverter";
import closeIcon from "../../assets/icons/close.png";

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
    const { open, data, notification, openNotificationBox, cloaseNotificationBox, closeNotification } =
        useNotification();

    if (notification) {
        return (
            <div>
                <NotificationBox data={data} isOpen={open} onClose={cloaseNotificationBox} />
                <div className="notification-circle-container">
                    <div onClick={closeNotification} className="notification-circle-close">
                        <img src={closeIcon} alt="close" />
                    </div>
                    <div onClick={openNotificationBox} className="notification-circle">
                        <div className="notification-circle-content">
                            <h4>{data ? data.main.temp + "°C" : "..."}</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
export default Notification;
