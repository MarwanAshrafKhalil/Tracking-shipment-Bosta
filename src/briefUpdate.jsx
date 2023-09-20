// import React from "react";

import CustomizedSteppers from "./Components/Stepper";

const briefUpdate = () => {
  return (
    <div className="container ">
      <div className="grid-container ">
        <div className="grid-item-top flex-col ">
          <div className="flex justify-center justify-between mx-5 gap-10 mb-10">
            <div className=" flex flex-col">
              <span className=" span-title">Shipment ID - {"13737343"}</span>
              <span className=" span-data">{"status"}</span>
            </div>
            <div className=" flex flex-col">
              <span className="span-title"> Last Update</span>
              <span className=" span-data">5:30 pm 5 Jan 2020</span>
            </div>
            <div className=" flex flex-col">
              <span className="span-title">Vendor</span>
              <span className=" span-data">SOUQ.COM</span>
            </div>
            <div className=" flex flex-col">
              <span className="span-title">Delivery Date</span>
              <span className=" span-data">3 Jan 2020</span>
            </div>
          </div>
          <hr className="mb-10" />
          <div className="mb-0">
            <CustomizedSteppers />
          </div>
        </div>
        <div className="grid-item">Second Div</div>
        <div className="grid-item">Third Div</div>
      </div>
    </div>
  );
};
export default briefUpdate;
