import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Select, { GroupTypeBase, OptionsType, OptionTypeBase } from "react-select";
import AsyncSelect from "react-select/async";
import { getContryList } from "server-api";
import { IContry } from "../../interfaces/Icontry";
import { useSearch } from "./useSearch";
import { useHistory } from "react-router-dom";
interface SearchBarProps {
    text?: string;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
    const history = useHistory();

    const { contryList, loadOptions, setSelectedContry } = useSearch();
    const [city, setCity] = useState<string | null>(null);

    const handleSearch = () => {
        if (city) {
            history.push(`/city?name=${city}`);
        } else {
            history.push(`/city?name=New York`);
        }
    };

    return (
        <div className="search-root">
            <div className="search-select-container">
                <Select
                    className="react-select-container-contry"
                    onChange={(option) => setSelectedContry(option?.countryCode)}
                    options={contryList}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.countryCode}
                    placeholder="Select contry..."
                />
                <AsyncSelect
                    className="react-select-container-city"
                    cacheOptions
                    loadOptions={loadOptions}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                    onChange={(option: any) => setCity(option.value)}
                    placeholder="Select city..."
                />
                <button onClick={handleSearch} className="search-button">
                    SEARCH
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
