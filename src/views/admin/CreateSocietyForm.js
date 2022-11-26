import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";

export default function CreateSocietyForm({ color }) {
    return (
    <>
    <div
            className={
            "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
            (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
            }
        >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                    <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3
                        className={
                        "font-semibold text-lg " +
                        (color === "light" ? "text-blueGray-700" : "text-white")
                        }
                    >
                    Create Society
                    </h3>
                    </div>
                </div>
            </div>
            <Container className="p-5 bg-lightBlue-900 text-white">
            <div className="block w-full overflow-x-auto">
            {/* Projects table */}
            <Row className="p-2">
            <div>
                <label>Society Name : </label>
                <input type="text" placeholder="Society Name" />
            </div>
            </Row>
            <Row className="p-2">
            <div>
                <label>Society Address : </label>
                <input type="text" placeholder="Society address" />
            </div>
            </Row>
            <Row className="p-2">
            <div>
                <label>Name : </label>
                <input type="text" placeholder="Admin Name" />
            </div>
            </Row>
            <Row className="p-2">
            <div>
                <label>Phone Number : </label>
                <input type="text" placeholder="Admin Contact Number" />
            </div>
            </Row>
            <Row className="p-2">
            <div> 
                <button  className="bg-lightBlue-600 text-white p-2 rounded">Create Society</button>
            </div>
            </Row>
                
            </div>
            </Container>
    </div>
        
    </>
    );
}

CreateSocietyForm.defaultProps = {
    color: "light",
};

CreateSocietyForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};