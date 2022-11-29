import React from "react";
import PropTypes from "prop-types";
// import 'bootstrap/dist/css/bootstrap-grid.css';
import '../../assets/styles/styles.css';


export default function CreateEventForm({ color }) {
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
                    Create Event
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
                        <input className="form-control" placeholder="Event title..."></input>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Description :</label>
                    </div>
                    <div className="col-10">
                        <textarea className="form-control" placeholder="Describe here"></textarea>
                    </div>
                </div>
                <div className="row py-4 px-2">
                    <div className="col-2">
                        <label>Date :</label>
                    </div>
                    <div className="col-4">
                        <input type="date" className="form-control" ></input>
                    </div>
                    <div className="col-2">
                        <label>Time : </label>
                    </div>
                    <div className="col-4">
                        <input className="form-control" placeholder="Approx. start time"></input>
                    </div>
                </div>
                <div className="row py-4 px-2 --bs-dark">
                    <div className="col-2">
                        <label>Venue :</label>
                    </div>
                    <div className="col-10">
                        <input className="form-control" placeholder="Event venue"></input>
                    </div>
                </div>
            </div>
    </div>
        
    </>
    );
}

CreateEventForm.defaultProps = {
    color: "light",
};

CreateEventForm.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
};