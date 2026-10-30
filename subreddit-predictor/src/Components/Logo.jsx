import React from "react";

// Simplified alien mark, drawn in SVG so it can use the app's orange.
const Logo = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" aria-hidden="true">
    <circle cx="256" cy="256" r="250" fill="#ff4500" />
    <g fill="#fff">
      <ellipse cx="256" cy="298" rx="135" ry="92" />
      <circle cx="140" cy="248" r="36" />
      <circle cx="372" cy="248" r="36" />
      <circle cx="362" cy="130" r="28" />
    </g>
    <path
      d="M262 205 L276 122 L345 130"
      fill="none"
      stroke="#fff"
      strokeWidth="14"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g fill="#ff4500">
      <circle cx="205" cy="280" r="23" />
      <circle cx="312" cy="280" r="23" />
    </g>
    <path
      d="M205 325 Q256 355 307 325"
      fill="none"
      stroke="#ff4500"
      strokeWidth="13"
      strokeLinecap="round"
    />
  </svg>
);

export default Logo;
