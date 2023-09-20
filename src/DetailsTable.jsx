// import React from "react";

import Table from "./Components/Table";
import { useSelector } from "react-redux";

const Details = () => {
  //   const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users.TransitEvents);
  console.log("user-table: ", user);

  function createData(Location, Date, Time, Details) {
    return { Location, Date, Time, Details };
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

    return `${formattedHours}:${formattedMinutes} ${period}`;
  }

  let rows = [];
  if (user) {
    rows = user.map((transit) =>
      createData(
        transit.hub ? transit.hub : "",
        transit.timestamp.split("T")[0].split("-").join("/"),
        timeRefactor(transit.timestamp.split("T")[1]),
        transit.state.split("_").join(" ")
      )
    );
  }
  rows = rows.filter((row) => row.Location !== "");
  //   console.log(rows);

  return (
    <div>
      <Table rows={rows} />
    </div>
  );
};

export default Details;
