import React from "react";
import Badge from "./Badge";

type KeywordsProps = {
  keywords: string[];
};

function Keywords({ keywords }: KeywordsProps) {
  return (
    <div className="flex">
      {keywords.map((keyword, index) => {
        // index is fine as key here because there is be no DOM modifications
        return <Badge key={index} text={keyword} />;
      })}
    </div>
  );
}

export default Keywords;
