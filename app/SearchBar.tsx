"use client"
import React, { useState } from "react";

import { IoSearchCircle } from "react-icons/io5";

const SearchBar = () => {

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    }
    const loseFocus = () => setIsFocused(false);

    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="flex flex-col w-full justify-center items-center pb-8">
                    <div className="search-container text-4xl p-4 flex">
                        <input placeholder="Search..." className="search-input text-4xl" onFocus={handleFocus} onBlur={loseFocus} />
                        <IoSearchCircle className="text-sky-600" />
                    </div>
                    {isFocused &&
                        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" style={{width:'30vw'}}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </>
    );
}

export default SearchBar;