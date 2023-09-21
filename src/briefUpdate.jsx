import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import DetailsTable from "./DetailsTable";
import CustomizedSteppers from "./Components/Stepper";
import { fetchUsers } from "./Redux/features/users/userSlice";
import { useParams } from "react-router-dom";

const BriefUpdate = () => {
  // console.log("user: ", user);
  const dispatch = useDispatch();
  const { trackID } = useParams();
  console.log(trackID);

  useEffect(() => {
    if (trackID) dispatch(fetchUsers(trackID));
  }, [trackID]);

  const { users } = useSelector((state) => state.user);
  // console.log("opop: ", user);

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
        <div className="grid-item-table">
          <div className="h-full w-full ">
            <DetailsTable />
          </div>
        </div>
        <div className="grid-item-data">
          {/* <UserView trackID="13737343" /> */}
        </div>
      </div>
    </div>
  );
};
export default BriefUpdate;
