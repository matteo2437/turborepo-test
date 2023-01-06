"use client"

import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        console.log(count)
        setCount(count => count + 1)
      }}
    >
      {count}
    </button>
  );
};
