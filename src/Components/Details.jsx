// import React from "react";

import { useEffect } from "react";
import { fetchUsers } from "../Redux/features/users/userSlice";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const trackidFetch = useSelector((state) => state.trackid);

  console.log("hi2: ", trackidFetch);
  // useEffect(() => {
  //   dispatch(fetchUsers("67151313"));
  // }, []);
  const user = useSelector((state) => state.user);
  console.log("hi3: ", user);

  return (
    <div>
      <Table />
    </div>
  );
};

export default Details;
