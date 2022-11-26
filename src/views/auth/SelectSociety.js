import React from "react";
import Select from 'react-select';
import { Link } from "react-router-dom";

const societyList = [
    { label: "Ashoka Enclave", value: 1 },
    { label: "Shalimar", value: 2 },
    { label: "Eden Garden", value: 3 },
    { label: "Surbhi Vihar", value: 4 },
];

export default function SelectSociety() {
return (
    <>
    <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                    <div className="btn-wrapper text-center">
                        <h3>hello (user name)</h3>
                        <Select options={ societyList }  placeholder="Select Society"/>
                        <Link to="/user/dashboard">
                            <div className="text-center mt-6">
                                <button
                                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </Link>
                    </div>
                    <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
);
}
