import React, { useState, useEffect } from "react";
import "./Notification.css";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import NotificationBox from "./NotificationBox";

interface NotificationProps {}

const Notification: React.FC<NotificationProps> = ({}) => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <NotificationBox isOpen={open} onClose={() => setOpen(false)} />
            <div onClick={() => setOpen(true)} className="notification-circle">
                <div className="notification-circle-content">
                    <h4>12C</h4>
                </div>
            </div>
        </div>
    );
};
export default Notification;
