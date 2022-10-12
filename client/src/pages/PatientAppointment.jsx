import React from "react";

const PatientAppointment = () => {
  return (
    <div className="d-flex fillingForm">
      <div className="d-flex patientForm">
        <img
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="A Doctor"
          style={{ width: "450px", borderRadius: "7px" }}
        />
        <form>
          <div className="row">
            <div className="form-group col-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group col-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group">
            <label>Occupation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Occupation"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientAppointment;