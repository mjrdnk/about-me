import React, { ReactElement } from "react";
import Keywords from "./Keywords";

type ExperienceProps = {
  keywords: string[];
  organisationName: string;
  roles: Array<{
    timespan: string;
    name: string;
    description: string | ReactElement;
  }>;
};

function Experience({ organisationName, keywords, roles }: ExperienceProps) {
  return (
    <div className="mb-12">
      <h4 className="font-display text-2xl mb-4 font-mono text-gray-900 font-medium">
        {organisationName}
      </h4>
      <Keywords keywords={keywords} />
      {roles.map((role, index) => {
        return (
          <div key={index} className="my-6">
            <div className="grid grid-cols-3">
              <span>{role.timespan}</span>
              <span className="col-span-2">
                <p>{role.name}</p>
                <p className="text-gray-500">{role.description}</p>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Experience;
