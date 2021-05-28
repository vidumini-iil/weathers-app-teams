import { useState, useEffect } from "react";
import { OptionsType, OptionTypeBase } from "react-select";
import { getContryList, getCityList } from "server-api";
import { IContry } from "../../interfaces/Icontry";

export const useSearch = () => {
    const [contryList, setContryList] = useState<IContry[]>([]);
    const [selectedContry, setSelectedContry] = useState<string | null | undefined>(null);
    const [loading, setLoading] = useState(false);
    const [citiList, setCitiList] = useState<OptionTypeBase[]>([]);

    useEffect(() => {
        getContryList()
            .then((res) => setContryList(res))
            .catch(() => setContryList([]));
    }, []);

    const onType = (searchText: string) => {
        setLoading(true);
        getCityList(searchText, selectedContry)
            .then((res) => {
                console.log(res);
                setCitiList(res);
            })
            .catch(() => setCitiList([]))
            .finally(() => setLoading(false));
    };

    return { contryList, citiList, loading, setSelectedContry, onType };
};
