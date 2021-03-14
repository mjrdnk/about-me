import React from "react";
import personalPhoto from "./assets/images/personal-photo.jpg";
import tindogsLogo from "./assets/images/tindogs.png";
import yelsterLogo from "./assets/images/yelster.svg";
import ready2orderLogo from "./assets/images/ready2order.png";
import gameonLogo from "./assets/images/gameon.jpeg";
import Badge from "./components/Badge";
import Experience from "./components/Experience";
import Section from "./components/Section";
import Tile from "./components/Tile";

function App() {
  return (
    <div className="bg-brightGray flex justify-center flex-col items-center font-display">
      <div className="flex justify-center flex-col items-center p-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mt-6">
          <img
            src={personalPhoto}
            alt="personalPhoto"
            className="w-52 h-auto rounded-lg shadow-md"
          />
          <div className="h-52 text-gray-500 p-6 rounded-lg flex flex-col justify-center shadow-md bg-white">
            <a href="mailto:maciej.jordanek@gmail.com" className="underline">
              <p>maciej.jordanek</p>
              <p>@gmail.com</p>
            </a>
            <a href="tel:+436804007708" className="underline">
              (+43) 680 400 77 08
            </a>
            <p>Vogtgasse 309/16</p>
            <p>1140, Wien Austria</p>
          </div>
        </div>
        <h1 className="text-6xl tracking-tight font-extrabold text-gray-900 m-3">
          Maciej Jordanek
        </h1>
        <h2 className="text-3xl mb-4 font-mono text-gray-500 font-medium">
          Lean development of digital products
        </h2>

        <div className="flex">
          <Badge primary text="Front-end" />
          <Badge primary text="SaaS" />
          <Badge primary text="Agile" />
        </div>
      </div>

      <div className="py-4">
        <Section title="Experience">
          <>
            <Experience
              organisationName="ready2order GmbH"
              logo={
                <img
                  src={ready2orderLogo}
                  alt="ready2order logo"
                  className="h-6 w-auto"
                />
              }
              keywords={["React", "Typescript", "Nodejs", "Laravel"]}
              roles={[
                {
                  timespan: "11.2020-present",
                  name:
                    "Senior software developer (team lead) & interim product owner",
                  description:
                    "Taken lead role over the product backlog and priorities in the remote product team of 6",
                },
                {
                  timespan: "02.2020-11.2020",
                  name: "Senior software developer & scrum master",
                  description:
                    "Taken lead role over agile process in the remote product team of 5",
                },
                {
                  timespan: "03.2019-02.2020",
                  name: "Software developer",
                  description:
                    "Maintained and developed new features in popular point-of-sale platform for DACH countries",
                },
              ]}
            />
            <Experience
              organisationName="yelster digital GmbH"
              logo={
                <img
                  src={yelsterLogo}
                  alt="yelster digital logo"
                  className="h-12 w-auto"
                />
              }
              keywords={["Angular", "Typescript", "Redux", "Rxjs (ngrx)"]}
              roles={[
                {
                  timespan: "07.2016-03.2019",
                  name: "Web developer",
                  description: (
                    <>
                      Worked in a small distributed team and helped developed{" "}
                      <a
                        className="underline"
                        href="https://www.solocal.com/solocalmanager"
                        target="_blank"
                        rel="noreferrer"
                      >
                        digital "presence manager" platform
                      </a>{" "}
                      for the French market
                    </>
                  ),
                },
              ]}
            />
          </>
        </Section>

        <div className="my-12 max-w-2xl text-center">
          <h3 className="font-display text-3xl mb-4 font-mono text-gray-500 font-medium">
            Side projects
          </h3>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            <Tile
              organisationName="Mentoring"
              keywords={["React", "Nodejs"]}
              role={{
                name: "Supporting junior devs",
                description:
                  "Helping beginners in tech to develop their skills by teaching coding and giving workshops",
              }}
              links={[]}
              logo={<span className="text-3xl">🤓</span>}
            />

            <Tile
              organisationName="Tindogs"
              keywords={["Nodejs", "Laravel"]}
              role={{
                name: "Software developer",
                description:
                  "Together with friends developed a prototype app for dog shelters and took podium in",
              }}
              links={[
                {
                  label: "build your MVP hackathon",
                  href:
                    "https://twitter.com/mjrdnk/status/1181096519799365632?s=20",
                },
              ]}
              logo={
                <img
                  src={tindogsLogo}
                  alt="Tindogs logo"
                  className="h-12 w-auto"
                />
              }
            />

            <Tile
              organisationName="Game on"
              keywords={["React native", "Firebase"]}
              role={{
                name: "Co-founder / software developer",
                description:
                  "Together with friends worked on mobile app that helped users search for sport partners",
              }}
              links={[]}
              logo={
                <img
                  src={gameonLogo}
                  alt="gameon logo"
                  className="h-12 w-auto"
                />
              }
            />

            <Tile
              organisationName="yelster digital meetup"
              keywords={["Frontend", "Trends"]}
              role={{
                name: "Organizer / speaker",
                description:
                  "Gathered colleagues every month to share tech and general concepts",
              }}
              links={[
                {
                  label: "meetup docs",
                  href: "https://yelsterdigital.github.io/monthly-meetup/",
                },
              ]}
              logo={
                <img
                  src={yelsterLogo}
                  alt="yelster digital logo"
                  className="h-12 w-auto"
                />
              }
            />
          </div>
        </div>

        <Section title="Education">
          <>
            <Experience
              organisationName="Wroclaw University of Science and Technology, Poland"
              keywords={[]}
              roles={[
                {
                  name: "- (parallel to master)",
                  timespan: "2015-2016",
                  description: "Computer Science",
                },
                {
                  name: "Master's degree",
                  timespan: "2014-2016",
                  description: "Entrepreneurship, Innovation & Projects",
                },
                {
                  name: "Erasmus",
                  timespan: "2014-2015",
                  description:
                    "Engineering Management, The University of Palermo, Italy",
                },
                {
                  name: "Bachelor's degree",
                  timespan: "2011-2014",
                  description: "Organisational Management",
                },
              ]}
            />
          </>
        </Section>
      </div>

      <div className="flex align-center flex-col text-center mb-12">
        <h2 className="text-xl tiny:text-3xl mb-4 font-mono text-gray-500 font-medium">
          Get in touch
        </h2>
        <a
          className="text-xl tiny:text-3xl text-primary underline"
          href="mailto:maciej.jordanek@gmail.com"
        >
          maciej.jordanek@gmail.com
        </a>
      </div>

      <p className="text-sm tiny:text-md mb-3 text-gray-500">
        Crafted with 💚 with{" "}
        <a
          href="https://github.com/mjrdnk/about-me"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          react + tailwind
        </a>
      </p>
    </div>
  );
}

export default App;
