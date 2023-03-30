import React from "react";
import toast, { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <div>
      <Toaster
        toastOptions={{
          className: "toast",
          style: {
            border: "none",
            padding: "8px",
            color: "#713200",
            boxShadow: "none",
          },
        }}
      />
    </div>
  );
}

export default Toast;
