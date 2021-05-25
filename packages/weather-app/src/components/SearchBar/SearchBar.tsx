import React, { useState } from "react";

import "./SearchBar.css";
import Select from "react-select";
import { IContry } from "../../interfaces/Icontry";

interface SearchBarProps {
    text?: string;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
    const [contries, setContries] = useState<IContry[]>([{ name: "fdfdsf", countryCode: "serewrew" }]);

    return (
        <div>
            <Select options={contries} getOptionLabel={(option) => option.name} getOptionValue={(option) => option.countryCode} />
        </div>
    );
};

export default SearchBar;
