import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import NoCrashIcon from "@mui/icons-material/NoCrash";
import CheckIcon from "@mui/icons-material/Check";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useEffect, useState } from "react";
import i18next from "i18next";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "none",
      backgroundColor: "#e30613",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: "none",
      backgroundColor: "#e30613",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5, //connector width
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
    width: "120%",
    marginLeft: i18next.language === "en" ? "-10%" : "-130%",
    marginRight: i18next.language === "en" ? "-10%" : "-130%",
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => {
  const size = ownerState.completed ? 30 : 50;
  return {
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#ffffff",
    width: size,
    height: size,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: ownerState.completed ? "50%" : 0,
    transform: ownerState.completed ? "translateY(25%)" : "none",
    ...(ownerState.active && {
      backgroundImage: "none",
      backgroundColor: " #e30613", //icons color
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundImagebackgroundImage: "none",
      backgroundColor: " #e30613",
    }),
  };
});

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <InventoryIcon />,
    2: <AddBusinessIcon />,
    3: <LocalShippingIcon />,
    4: <NoCrashIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? <CheckIcon /> : icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function CustomizedSteppers({ currentStep, steps, ...props }) {
  // maximum 3
  // todo:

  // const color = "#84cc16";

  // const steps = [
  //   "Order Created",
  //   "Shipment received from vendor",
  //   "Out for delivery",
  //   "Order delivered",
  // ];

  // const phases = [
  //   {
  //     state: "TICKET_CREATED",
  //     id: "0",
  //   },
  //   {
  //     state: "PACKAGE_RECEIVED",
  //     id: "1",
  //   },

  //   {
  //     state: "OUT_FOR_DELIVERY",
  //     id: "2",
  //   },
  //   {
  //     state: "DELIVERED",
  //     id: "3",
  //   },
  // ];

  return (
    <Stepper
      alternativeLabel
      activeStep={currentStep}
      connector={<ColorlibConnector />}
    >
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel StepIconComponent={ColorlibStepIcon}>
            <div className=" mt-8 font-bold text-grayish">{label}</div>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
