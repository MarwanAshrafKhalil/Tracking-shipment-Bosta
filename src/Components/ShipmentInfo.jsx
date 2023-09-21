import React from "react";

const ShipmentInfo = () => {
  return (
    <div className="grid-item-top flex-col ">
      <div className="flex justify-center justify-between mx-5 gap-10 mb-10">
        <div className=" flex flex-col">
          <span className=" span-title">Shipment ID - {"13737343"}</span>
          <span className=" span-data">
            {users.CurrentStatus && users.CurrentStatus.state.split("_")[0]}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title"> Last Update</span>
          <span className=" span-data">
            {users &&
              users.CurrentStatus &&
              users.CurrentStatus.timestamp &&
              lastUpdateRefactor(users.CurrentStatus.timestamp)}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">Vendor</span>
          <span className=" span-data">{users && users.provider}</span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">Delivery Date</span>
          <span className=" span-data">
            {users &&
              users.PromisedDate &&
              getMonthFromDate(users.PromisedDate.split("T")[0])}
          </span>
        </div>
      </div>
      <hr className="mb-10" />
      <div className="mb-0">
        <CustomizedSteppers status={users?.CurrentStatus?.state} />
      </div>
    </div>
  );
};

export default ShipmentInfo;
