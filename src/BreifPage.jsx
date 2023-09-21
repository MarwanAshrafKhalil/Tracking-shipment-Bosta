import { useEffect } from "react";

import { useDispatch } from "react-redux";
import DetailsTable from "./Components/DetailsTable";

import { fetchUsers } from "./Redux/features/users/userSlice";
import { useParams } from "react-router-dom";
import ShipmentInfo from "./Components/ShipmentInfo";
// import { useTranslation } from "react-i18next";

const BriefPage = () => {
  // const [t, i18n] = useTranslation();

  const dispatch = useDispatch();
  const { trackID } = useParams();

  useEffect(() => {
    if (trackID) dispatch(fetchUsers(trackID));
  }, [trackID]);

  return (
    <div className="container ">
      <div className="grid-container ">
        <ShipmentInfo />

        <DetailsTable />

        <div className="grid-item-data items-center  ">
          <div className="bg-gray-100 grid-item-sup mb-2 py-5 pe-5  text-right   h-auto ">
            <h1>
              كلية البنات – 198 ش النزهة – أبراج المروة - بالقرب من جوميا .
            </h1>

            {/* <div className="">Row 1, Column 1</div>
            <div className="">Row 1, Column 2</div> */}
          </div>
          <div className="grid-item-sup  flex flex-col justify-center ">
            <img
              className="object-cover h-auto"
              src="https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899174.jpg?w=2000"
              alt="customer service"
            />
            <button className=" h-[10%] w-[30%] items-center text-center p-0 btn-signup">
              {" "}
              Call Us
            </button>
            {/* <div className="w-1/2">Row 2, Column 1</div>
            <div className="w-1/2">Row 2, Column 2</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BriefPage;
