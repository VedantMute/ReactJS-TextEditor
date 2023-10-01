import React from "react";

const alertStyle = {
  position: "fixed",
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 999, 
};

export default function Alertmsg(props) {
  return (
    <>
      <div className="alert alert-success alert-dismissible fade show" style={alertStyle} role="alert">
        <strong>Alert!</strong> {props.alert}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}
