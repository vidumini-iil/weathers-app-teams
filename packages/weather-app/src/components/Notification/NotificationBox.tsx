import React from "react";
import "./NotificationBox.css";
import closeIcon from "../../assets/icons/close.png";
import { timeConverter } from "../../Utils/timeConverter";

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
                        <span>
                            {data?.name}, {data?.sys?.country}
                        </span>
                        <h5>{timeConverter(data?.dt)}</h5>
                    </div>
                    <div className="notificationbox-header-temp">
                        <span>{data?.main?.temp}°C</span>
                    </div>
                    <div className="">
                        <span>{data?.weather[0]?.description}</span>
                    </div>
                    <div className="notificationbox-city-status">
                        <span>Pressure: {data?.main?.pressure} Pa</span>
                        <span>Humaidity: {data?.main?.humidity} %</span>
                        <span>Visibility: {data?.visibility / 1000} km</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};
export default NotificationBox;
