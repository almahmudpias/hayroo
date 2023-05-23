import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Devolped By <i className="team">Team 404</i>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
