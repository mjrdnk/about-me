import React, { ReactElement } from "react";

type TileSectionProps = {
  title: string;
  children: ReactElement;
};

function TileSection({ title, children }: TileSectionProps) {
  return (
    <div className="my-12 max-w-2xl text-center">
      <h3 className="font-display text-3xl mb-4 font-mono text-gray-500 font-medium">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">{children}</div>
    </div>
  );
}

export default TileSection;
