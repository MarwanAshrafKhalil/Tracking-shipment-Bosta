import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomizedSteppers from "./Stepper";
import moment from "moment";

const ShipmentInfo = () => {
  const {
    users,
    provider,
    CurrentStatus,
    PromisedDate,
    TrackingNumber,
    TransitEvents,
  } = useSelector((state) => state.user);

  const steps = [
    "Order Created",
    "Shipment received from vendor",
    "Out for delivery",
    "Order delivered",
  ];

  const phases = [
    {
      state: "TICKET_CREATED",
      id: "1",
    },
    {
      state: "PACKAGE_RECEIVED",
      id: "2",
    },

    {
      state: "OUT_FOR_DELIVERY",
      id: "3",
    },
    {
      state: "DELIVERED",
      id: "4",
    },
  ];

  return (
    <div className="grid-item-top flex-col ">
      <div className="flex justify-center justify-between mx-5 gap-10 mb-10">
        <div className=" flex flex-col">
          <span className=" span-title">
            Shipment ID - {TrackingNumber && TrackingNumber}
          </span>
          <span className=" span-data">
            {CurrentStatus?.state?.split("_")[0]}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title"> Last Update</span>
          <span className=" span-data">
            {CurrentStatus?.timestamp &&
              moment(CurrentStatus.timestamp).format("LLLL")}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">Vendor</span>
          <span className=" span-data">{provider}</span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">Delivery Date</span>
          <span className=" span-data">
            {PromisedDate && moment(PromisedDate).format("ll")}
          </span>
        </div>
      </div>
      <hr className="mb-10" />
      <div className="mb-0">
        <CustomizedSteppers
          currentStep={
            phases.find((x) => x.state === CurrentStatus?.state)?.id
              ? +phases.find((x) => x.state === CurrentStatus?.state)?.id
              : 0
          }
          steps={steps}
        />
      </div>
    </div>
  );
};

export default ShipmentInfo;
