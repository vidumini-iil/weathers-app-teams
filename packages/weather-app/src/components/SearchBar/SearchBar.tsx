import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { getContryList } from "server-api";
import { IContry } from "../../interfaces/Icontry";
import { useSearch } from "./useSearch";

interface SearchBarProps {
    text?: string;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
    const { contryList, loadOptions, setSelectedContry } = useSearch();

    return (
        <div>
            <Select
                onChange={(option) => setSelectedContry(option?.countryCode)}
                options={contryList}
                getOptionLabel={(option) => option.name}
                getOptionValue={(option) => option.countryCode}
            />
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
            />
        </div>
    );
};

export default SearchBar;