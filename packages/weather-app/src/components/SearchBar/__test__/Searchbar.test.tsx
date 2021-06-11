import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../SearchBar";

test("redner", () => {
    const root = document.createElement("div");
    ReactDOM.render(<SearchBar/>, root)
});
