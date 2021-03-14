import React from "react";
import personalPhoto from "./assets/images/personal-photo.jpg";
import Badge from "./components/Badge";
import Experience from "./components/Experience";
import Section from "./components/Section";

function App() {
  return (
    <div className="bg-brightGray flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center p-6">
        <img
          src={personalPhoto}
          alt="personalPhoto"
          className="w-52 rounded-lg shadow-md mb-6 mt-6"
        />
        <h1 className="font-display text-6xl tracking-tight font-extrabold text-gray-900 m-3">
          Maciej Jordanek
        </h1>
        <h2 className="font-display text-3xl mb-4 font-mono text-gray-500 font-medium">
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

        <Section title="Volounteering">
          <>
            <Experience
              organisationName="Private"
              keywords={["React", "Nodejs"]}
              roles={[
                {
                  timespan: "2019-present",
                  name: "Mentor",
                  description:
                    "Helping juniors and beginners in tech to develop their skills by teaching",
                },
              ]}
            />

            <Experience
              organisationName="Tindogs"
              keywords={["Nodejs", "Laravel"]}
              roles={[
                {
                  timespan: "2019",
                  name: "Software developer",
                  description:
                    "Together with friends developed a prototype app 'tinder for dogs' and took the podium on the hackathon",
                },
              ]}
            />

            <Experience
              organisationName="Game on"
              keywords={["React native", "Firebase"]}
              roles={[
                {
                  name: "Co-founder / software developer",
                  timespan: "2017-2018",
                  description:
                    "Together with friends worked on mobile app that searched for sport partners",
                },
              ]}
            />

            <Experience
              organisationName="yelster digital meetup"
              keywords={["Frontend", "Trends"]}
              roles={[
                {
                  name: "Organizer",
                  timespan: "2017-2019",
                  description:
                    "Gathered colleagues every month to share tech and general concepts",
                },
              ]}
            />
          </>
        </Section>

        <Section title="Education">
          <>
            <Experience
              organisationName="Wroclaw University of Science and Technology, Poland"
              keywords={[]}
              roles={[
                {
                  name: "No degree (parallel to master)",
                  timespan: "2015-2016",
                  description: "Computer Science",
                },
                {
                  name: "Master's degree",
                  timespan: "2014-2016",
                  description: "Entrepreneurship, Innovation & Projects",
                },
                {
                  name: "Bachelor's degree",
                  timespan: "2011-2014",
                  description: "Organisational Management",
                },
              ]}
            />

            <Experience
              organisationName="The University of Palermo, Italy"
              keywords={[]}
              roles={[
                {
                  name: "erasmus",
                  timespan: "2014-2015",
                  description: "Engineering Management",
                },
              ]}
            />
          </>
        </Section>
      </div>

      <div className="flex align-center flex-col text-center mb-12">
        <h2 className="font-display text-3xl mb-4 font-mono text-gray-500 font-medium">
          Get in touch
        </h2>
        <a
          className="text-3xl text-primary"
          href="mailto:maciej.jordanek@gmail.com"
        >
          maciej.jordanek@gmail.com
        </a>
      </div>
    </div>
  );
}

export default App;
