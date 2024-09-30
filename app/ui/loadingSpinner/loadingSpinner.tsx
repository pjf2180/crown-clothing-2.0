import React from "react";

interface SpinnerProps {
  diameter: number;
}

export function Spinner({ diameter }: SpinnerProps) {
  const radius = diameter / 2;
  const strokeWidth = 5; // You can adjust this if needed
  const normalizedRadius = radius - strokeWidth / 2; // Adjust for stroke width
  const circumference = 2 * Math.PI * normalizedRadius;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
    >
      <circle
        cx="12.5"
        cy="12.5"
        r="10"
        stroke="#000000"
        stroke-width="3"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray="31.415, 31.415"
        transform="rotate(-90 25 25)"
        stroke-dashoffset="0"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12.5 12.5"
          to="360 12.5 12.5"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Spinner;
