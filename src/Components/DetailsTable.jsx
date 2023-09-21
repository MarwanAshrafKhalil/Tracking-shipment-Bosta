import moment from "moment";
import Table from "./Table";
import { useSelector } from "react-redux";

const Details = () => {
  const user = useSelector((state) => state.user.users.TransitEvents);
  console.log("user-table: ", user);

  function createData(Location, Date, Time, Details) {
    return { Location, Date, Time, Details };
  }

  let rows = [];
  if (user) {
    rows = user.map((transit) =>
      createData(
        transit.hub ? transit.hub : "",
        moment(transit.timestamp).format("l"),
        moment(transit.timestamp).format("LT"),
        transit.state.split("_").join(" ")
      )
    );
  }
  //   rows = rows.filter((row) => row.Location !== "");

  return (
    <div className="grid-item-table">
      <div className="h-full w-full ">
        <Table rows={rows} />
      </div>
    </div>
  );
};

export default Details;
