// components/BodySelector.tsx
import React from "react";

// the regions we can click on
const regions = [
  "head",
  "neck",
  "chest",
  "abdomen",
  "pelvis",
  "leftUpperArm",
  "rightUpperArm",
  "leftForearm",
  "rightForearm",
  "leftHand",
  "rightHand",
  "leftThigh",
  "rightThigh",
  "leftShin",
  "rightShin",
  "leftFoot",
  "rightFoot",
] as const;

type Region = (typeof regions)[number];

export interface BodySelectorProps {
  /** array of region ids (as strings) */
  selected: string[];
  /** callback when selection changes */
  onChange: (selected: string[]) => void;
  /** optional width in pixels (defaults to 192) */
  width?: number;
}

const BodySelector: React.FC<BodySelectorProps> = ({
  selected,
  onChange,
  width = 192,
}) => {
  // toggle a region in/out of the selected list
  const toggle = (id: Region) =>
    onChange(
      selected.includes(id)
        ? selected.filter((s) => s !== id)
        : [...selected, id]
    );

  // highlight if selected
  const fillFor = (id: Region) =>
    selected.includes(id) ? "rgba(0,180,216,0.5)" : "transparent";

  // keep the body in a 200×480 ratio
  const height = (480 * width) / 200;

  return (
    <svg
      viewBox="0 0 200 480"
      width={width}
      height={height}
      className="mx-auto"
      style={{ cursor: "pointer" }}
    >
      {/* Head */}
      <ellipse
        cx={100}
        cy={50}
        rx={28}
        ry={32}
        fill={fillFor("head")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("head")}
      />

      {/* Neck */}
      <rect
        x={90}
        y={80}
        width={20}
        height={18}
        rx={4}
        fill={fillFor("neck")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("neck")}
      />

      {/* Chest */}
      <rect
        x={70}
        y={98}
        width={60}
        height={75}
        rx={20}
        fill={fillFor("chest")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("chest")}
      />

      {/* Abdomen */}
      <rect
        x={75}
        y={175}
        width={50}
        height={60}
        rx={18}
        fill={fillFor("abdomen")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("abdomen")}
      />

      {/* Pelvis */}
      <ellipse
        cx={100}
        cy={250}
        rx={30}
        ry={20}
        fill={fillFor("pelvis")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("pelvis")}
      />

      {/* Left Upper Arm */}
      <ellipse
        cx={55}
        cy={130}
        rx={12}
        ry={35}
        fill={fillFor("leftUpperArm")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftUpperArm")}
      />

      {/* Right Upper Arm */}
      <ellipse
        cx={145}
        cy={130}
        rx={12}
        ry={35}
        fill={fillFor("rightUpperArm")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightUpperArm")}
      />

      {/* Left Forearm */}
      <ellipse
        cx={50}
        cy={200}
        rx={10}
        ry={30}
        fill={fillFor("leftForearm")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftForearm")}
      />

      {/* Right Forearm */}
      <ellipse
        cx={150}
        cy={200}
        rx={10}
        ry={30}
        fill={fillFor("rightForearm")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightForearm")}
      />

      {/* Left Hand */}
      <circle
        cx={50}
        cy={240}
        r={10}
        fill={fillFor("leftHand")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftHand")}
      />

      {/* Right Hand */}
      <circle
        cx={150}
        cy={240}
        r={10}
        fill={fillFor("rightHand")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightHand")}
      />

      {/* Left Thigh */}
      <ellipse
        cx={85}
        cy={300}
        rx={12}
        ry={40}
        fill={fillFor("leftThigh")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftThigh")}
      />

      {/* Right Thigh */}
      <ellipse
        cx={115}
        cy={300}
        rx={12}
        ry={40}
        fill={fillFor("rightThigh")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightThigh")}
      />

      {/* Left Shin */}
      <ellipse
        cx={85}
        cy={360}
        rx={10}
        ry={50}
        fill={fillFor("leftShin")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftShin")}
      />

      {/* Right Shin */}
      <ellipse
        cx={115}
        cy={360}
        rx={10}
        ry={50}
        fill={fillFor("rightShin")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightShin")}
      />

      {/* Left Foot */}
      <ellipse
        cx={85}
        cy={430}
        rx={15}
        ry={8}
        fill={fillFor("leftFoot")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("leftFoot")}
      />

      {/* Right Foot */}
      <ellipse
        cx={115}
        cy={430}
        rx={15}
        ry={8}
        fill={fillFor("rightFoot")}
        stroke="#00B4D8"
        strokeWidth={2}
        onClick={() => toggle("rightFoot")}
      />
    </svg>
  );
};

export default BodySelector;
