import React, { ReactElement } from "react";
import Badge from "./Badge";

type ExperienceProps = {
  keywords: string[];
  organisationName: string;
  roles: Array<{
    timespan: string | null;
    name: string;
    description: string | ReactElement;
  }>;
  logo?: ReactElement;
};

function Experience({
  organisationName,
  keywords,
  roles,
  logo,
}: ExperienceProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center mb-4">
        <h4 className="text-2xl font-mono text-gray-900 font-medium mr-2">
          {organisationName}
        </h4>
        {logo}
      </div>
      <div className="flex">
        {keywords.map((keyword, index) => {
          // index is fine as key here because there is be no DOM modifications
          return <Badge key={index} text={keyword} />;
        })}
      </div>
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
