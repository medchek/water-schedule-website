import * as React from "react";

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    viewBox="0 0 1920 554"
  >
    {/* <defs>
      <clipPath id="a">
        <path
          transform="translate(0 526)"
          fill="#fff"
          opacity={0.77}
          d="M0 0h1920v554H0z"
        />
      </clipPath>
    </defs> */}
    <g transform="translate(0 -526)" clipPath="url(#a)">
      <path
        d="M141.513 665.765c335.443 243.26 610.629 47.631 990.113 124.749s826.455 303.558 826.455 303.558S2082.912 283.5 1935.889-44.384 101.111-283.718-69.768-119.5s-124.166 542.005 211.281 785.265Z"
        className="fill-appBlue dark:fill-darkAppHero"
      />
    </g>
  </svg>
);

export default SvgComponent;
