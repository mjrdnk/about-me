import React from "react";

type BadgeProps = {
  text: string;
  primary?: boolean;
};

function Badge({ text, primary }: BadgeProps) {
  return (
    <div
      className={`cursor-default rounded-full ${
        primary ? "bg-primary text-white" : "text-primary border border-primary"
      } py-1 px-4 font-medium text-base m-0.5`}
    >
      {text}
    </div>
  );
}

export default Badge;
