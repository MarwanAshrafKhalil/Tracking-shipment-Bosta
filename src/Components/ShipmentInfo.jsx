import { useSelector } from "react-redux";
import CustomizedSteppers from "./Stepper";
import moment from "moment";
import { useTranslation } from "react-i18next";

const ShipmentInfo = () => {
  const [t, i18n] = useTranslation();
  const {
    users,
    provider,
    CurrentStatus,
    PromisedDate,
    TrackingNumber,
    TransitEvents,
  } = useSelector((state) => state.user);

  const steps = [
    t("Order Created"),
    t("Shipment Rec"),
    t("Out Delivery"),
    t("Order Del"),
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
            {t("Shipment ID")} - {TrackingNumber && TrackingNumber}
          </span>
          <span className=" span-data">
            {CurrentStatus?.state?.split("_")[0]}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title"> {t("Last Update")}</span>
          <span className=" span-data">
            {CurrentStatus?.timestamp &&
              moment(CurrentStatus.timestamp).format("LLLL")}
          </span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">{t("Vendor")}</span>
          <span className=" span-data">{provider}</span>
        </div>
        <div className=" flex flex-col">
          <span className="span-title">{t("Delivery Date")}</span>
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
