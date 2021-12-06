import React from "react";

export default function Logo({ size = 300 }: { size?: number }) {
  return <img src="/glitch.jpg" height={size} title="glitch effect" />;
}
