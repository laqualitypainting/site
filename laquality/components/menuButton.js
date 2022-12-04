import React from "react";
import { motion, SVGMotionProps } from "framer-motion";

const MenuButton = ({
  isOpen,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#FFFFFF",
  transition = { type: "spring", stiffness: 260, damping: 20 },
  lineProps = { strokeLinecap: "round" },
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: 45,
      translateY: 1,
      translateX: 0
    }
  };
  const center = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0
    },
    opened: {
      rotate: -45,
      translateY: 1,
      translateX:0 
    }
  };
  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps
  };
  const unitHeight = 4;
  const unitWidth = (unitHeight * (width)) / (height);

  return (
    <motion.svg
      viewBox={`2 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={bottom}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={center}
        {...lineProps}
      />

    </motion.svg>
  );
};

export { MenuButton };
