import React, { ReactElement } from "react";

type SectionProps = {
  title: string;
  children: ReactElement;
};

function Section({ title, children }: SectionProps) {
  return (
    <div className="p-4 sm:8 md:p-12 my-6 max-w-2xl bg-white rounded-lg shadow-sm">
      <h3 className="text-3xl mb-4 font-mono text-gray-500 font-medium">
        {title}
      </h3>

      {children}
    </div>
  );
}

export default Section;
