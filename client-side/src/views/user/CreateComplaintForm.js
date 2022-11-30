import React from "react";
import PropTypes from "prop-types";
// import 'bootstrap/dist/css/bootstrap-grid.css';
import '../../assets/styles/styles.css';


export default function CreateComplaintForm({ color }) {
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
                    Create Complaint
                    </h3>
                    </div>
                </div>
            </div>
            {/* here */}
            <div className="container p-4">
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Title :</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" placeholder="Complaint"></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Description :</label>
                    </div>
                    <div className="col-10">
                        <textarea className="form-control" placeholder="Describe...."></textarea>
                    </div>
                </div>

                <div className="row py-4 px-2 text-center">
                    <div className="col-5"></div>
                    <button className="col-2 form-control" type="submit">Submit </button>
                    <div className="col-5"></div>

                </div>
                
            </div>
    </div>
        
    </>
    );
}

CreateComplaintForm.defaultProps = {
    color: "light",
};

CreateComplaintForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};