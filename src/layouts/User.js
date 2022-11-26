import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//components
import HeaderStats from "components/Headers/HeaderStats.js";
import UserSidebar from "components/Sidebar/UserSidebar.js"
import FooterAdmin from "components/Footers/FooterAdmin.js"
import Navbar from "components/Navbars/AuthNavbar.js";

// views
import UserDashboard from "views/user/UserDashboard.js";
import Payment from "views/user/Payment.js";
import Complaint from "views/user/Complaint.js";
import Services from "views/user/Services.js";
import Event from "views/user/Event.js";
import CreateEvent from "views/user/CreateEvent";



export default function User() {
return (
    <>
        <UserSidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
            <Navbar transparent />
            {/* <AdminNavbar /> */}
            {/* Header */}
            <HeaderStats />
            <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
                <Route path="/user/dashboard" exact component={UserDashboard} />
                <Route path="/user/payment" exact component={Payment} />
                <Route path="/user/services" exact component={Services} />
                <Route path="/user/complaints" exact component={Complaint} />
                <Route path="/user/events" exact component={Event} />
                <Route path="/user/createEvent" exact component={CreateEvent} />s

                <Redirect from="/auth" to="/auth/login" />
            </Switch>
            <FooterAdmin />
            </div>
        </div>
    </>
);
}

