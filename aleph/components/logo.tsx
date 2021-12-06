import React from "react";

export default function Logo({ size = 300 }: { size?: number }) {
  return <img src="/glitch.gif" height={size} title="glitch effect" />;
}
