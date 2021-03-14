import React, { ReactElement } from "react";
import githubLogo from "../assets/images/github.png";
import linkedinLogo from "../assets/images/linkedin.png";

type SectionProps = {
  title: string;
  children: ReactElement;
};

function SocialIcons() {
  return (
    <div className="flex justify-center space-x-2 ml-2">
      <a href="https://github.com/mjrdnk" target="_blank">
        <img src={githubLogo} alt="github logo" className="w-8 h-auto" />
      </a>
      <a href="https://www.linkedin.com/in/maciej-jordanek/" target="_blank">
        <img src={linkedinLogo} alt="linkedin logo" className="w-8 h-auto" />
      </a>
    </div>
  );
}

export default SocialIcons;
