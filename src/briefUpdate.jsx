import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import DetailsTable from "./Components/DetailsTable";
import CustomizedSteppers from "./Components/Stepper";
import { fetchUsers } from "./Redux/features/users/userSlice";
import { useParams } from "react-router-dom";
import ShipmentInfo from "./Components/ShipmentInfo";

const BriefUpdate = () => {
  // console.log("user: ", user);
  const dispatch = useDispatch();
  const { trackID } = useParams();
  console.log(trackID);

  useEffect(() => {
    if (trackID) dispatch(fetchUsers(trackID));
  }, [trackID]);

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
  function dateRefactor(x) {
    const date = new Date(x);
    const day = date.toLocaleString("en-US", { weekday: "long" });

    return day;
  }

  function timeRefactor(time) {
    const [hours, minutes, seconds] = time.split(":");

    let formattedHours = parseInt(hours, 10) % 12;
    if (formattedHours === 0) {
      formattedHours = 12;
    }

    const formattedMinutes = minutes.padStart(2, "0");
    const formattedSeconds = seconds.split(".")[0].padStart(2, "0");

    const period = parseInt(hours, 10) < 12 ? "AM" : "PM";

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
  }

  function getMonthFromDate(dateString) {
    if (users && users.CurrentStatus && users.CurrentStatus.timestamp) {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "long", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }

    return "";
  }

  function lastUpdateRefactor(timex) {
    if (users && users.CurrentStatus && users.CurrentStatus.timestamp) {
      const rawDate = timex.split("T");

      const date = dateRefactor(rawDate[0]);
      const time = timeRefactor(rawDate[1]);
      console.log("date: ", date, " time: ", time);
      return date + " " + rawDate[0] + " at " + time;
    }
    return "";
  }

  return (
    <div className="container ">
      <div className="grid-container ">
        <ShipmentInfo />

        <DetailsTable />

        <div className="grid-item-data ">
          <div className="grid-item-sup ">
            {/* <div className="">Row 1, Column 1</div>
            <div className="">Row 1, Column 2</div> */}
          </div>
          <div className="grid-item-sup ">
            {/* <div className="w-1/2">Row 2, Column 1</div>
            <div className="w-1/2">Row 2, Column 2</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BriefUpdate;
