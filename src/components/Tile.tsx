import React, { ReactElement } from "react";
import Badge from "./Badge";

type TileProps = {
  keywords: string[];
  organisationName: string;
  role: {
    name: string;
    description: string | ReactElement;
  };
  links: Array<{
    label: string;
    href: string;
  }>;
  logo?: ReactElement;
};

function Tile({ organisationName, keywords, role, links, logo }: TileProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:8 md:p-12 text-center flex flex-col">
      <div className="flex items-center justify-center h-12">
        {logo}
        <h4 className="ml-2 text-2xl font-mono text-gray-900 font-medium">
          {organisationName}
        </h4>
      </div>
      <div className="flex-grow justify-start">
        <div className="my-6">
          <div className="text-center">
            <p>{role.name}</p>
            <p className="text-gray-500">{role.description}</p>
          </div>
          <div className="flex flex-col">
            {links.map((link, index) => {
              return (
                <a
                  key={index}
                  target="_blank"
                  href={link.href}
                  rel="noreferrer"
                  className="underline text-gray-500"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        {keywords.map((keyword, index) => {
          // index is fine as key here because there is be no DOM modifications
          return <Badge key={index} text={keyword} />;
        })}
      </div>
    </div>
  );
}

export default Tile;
