import { useEffect, useState } from "react";
import { getCity } from "server-api";
import { setNotification } from "../../redux/slices/notificationSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const useNotification = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);

    const distpatch = useAppDispatch();

    const activeCity = useAppSelector((state) => state.notification.activeCity);
    const notification = useAppSelector((state) => state.notification.notification);

    const openNotificationBox = () => {
        setOpen(true);
        getCity(activeCity).then((res) => setData(res));
    };

    const closeNotificationBox = () => {
        setOpen(false);
    };

    const closeNotification = () => {
        distpatch(setNotification({ notification: false, activeCity: "" }));
    };

    useEffect(() => {
        getCity(activeCity).then((res) => setData(res));
    }, [activeCity]);

    useEffect(() => {
        const interval = setInterval(() => {
            getCity(activeCity).then((res) => {
                setData(res);
            });
        }, 100000);

        return () => clearInterval(interval);
    }, []);

    return {
        open,
        data,
        activeCity,
        notification,
        openNotificationBox,
        closeNotificationBox,
        closeNotification,
    };
};
