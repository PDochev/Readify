import React from "react";

import { ring } from "ldrs";

const Spinner = () => {
  ring.register();
  return (
    <div className="flex justify-center items-center mt-20">
      <l-ring
        size="40"
        stroke="5"
        bg-opacity="0"
        speed="2"
        color="black"
      ></l-ring>
    </div>
  );
};

export default Spinner;

// Default values shown
