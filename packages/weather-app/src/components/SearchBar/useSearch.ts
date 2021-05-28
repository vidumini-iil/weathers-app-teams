import { useState, useEffect } from "react";
import { OptionsType, OptionTypeBase } from "react-select";
import { getContryList, getCityList } from "server-api";
import { IContry } from "../../interfaces/Icontry";

export const useSearch = () => {
    const [contryList, setContryList] = useState<IContry[]>([]);
    const [selectedContry, setSelectedContry] = useState<string | null | undefined>(null);

    useEffect(() => {
        getContryList()
            .then((res) => setContryList(res))
            .catch(() => setContryList([]));
    }, []);

    const loadOptions = async (inputValue: string) => {
        const res = await getCityList(inputValue, selectedContry);
        const list = res.data?.features.map((value: any) => ({
            value: value.properties.city,
            label: value.properties.city,
        }));

        return list
    };

    return { contryList, loadOptions, setSelectedContry };
};
