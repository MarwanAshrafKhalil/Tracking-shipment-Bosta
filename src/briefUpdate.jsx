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

  return (
    <div className="container ">
      <div className="grid-container ">
        <ShipmentInfo />

        <DetailsTable />

        <div className="grid-item-data ">
          <div className="grid-item-sup ">
            <h1>Hello</h1>

            {/* <div className="">Row 1, Column 1</div>
            <div className="">Row 1, Column 2</div> */}
          </div>
          <div className="grid-item-sup ">
            <h1>Hello</h1>
            {/* <div className="w-1/2">Row 2, Column 1</div>
            <div className="w-1/2">Row 2, Column 2</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BriefUpdate;
