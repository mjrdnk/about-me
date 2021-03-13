import React from "react";
import logo from "./logo.svg";
import "./App.css";
import personalPhoto from "./assets/images/personal-photo.jpg";

function App() {
  return (
    <>
      <div className="header">
        <div className="about-me">
          <h1>Maciej Jordanek</h1>
          <h2>lean development of digital products</h2>
          <h3>
            core competencies:
            <ul>
              <li>front end development</li>
              <li>team work & communication</li>
            </ul>
          </h3>
        </div>

        <img src={personalPhoto} alt="personalPhoto" />
      </div>

      <div className="section">
        <p className="section-title">experience</p>

        <div className="group">
          <div className="title">
            <a
              className="organisation"
              href="https://ready2order.com/de"
              target="_blank"
            >
              ready2order GmbH
            </a>

            <div className="keywords">
              <span>react</span>
              <span>typescript</span>
              <span>nodejs</span>
              <span>laravel</span>
              <span>php</span>
              <span>mysql</span>
              <span>CI/CD</span>
              <span>gatsby</span>
              <span>headless CMS</span>
              <span>agile</span>
              <span>product development</span>
              <span>people</span>
            </div>
          </div>

          <p className="role">
            11.2020-present
            <span>
              senior software developer (team lead) & interim product owner
            </span>
          </p>
          <p className="description">
            taken lead role over the product backlog and priorities in the
            remote product team of 6
          </p>
          <p className="role">
            02.2020-11.2020{" "}
            <span>senior software developer & scrum master</span>
          </p>
          <p className="description">
            taken lead role over agile process in the remote product team of 5
          </p>

          <p className="role">
            03.2019-02.2020 <span>software developer</span>
          </p>
          <p className="description">
            maintained and developed new features in popular point-of-sale
            platform for DACH countries
          </p>
        </div>

        <div className="group">
          <div className="title">
            <a
              className="organisation"
              href="https://www.yelsterdigital.com/"
              target="_blank"
            >
              yelster digital GmbH
            </a>

            <div className="keywords">
              <span>angular</span>
              <span>typescript</span>
              <span>redux</span>
              <span>rxjs (ngrx)</span>
              <span>nodejs</span>
              <span>CI/CD</span>
              <span>unix</span>
            </div>
          </div>
          <p className="role">
            07.2016-03.2019 <span>web developer</span>
          </p>
          <p className="description">
            worked in a small distributed team and helped developed
            <a href="https://www.solocal.com/solocalmanager" target="_blank">
              digital "presence manager" platform
            </a>
            for the French market
          </p>
        </div>
      </div>

      <div className="section">
        <p className="section-title">volounteering</p>

        <div className="group">
          <div className="title">
            <span className="organisation">private</span>

            <div className="keywords">
              <span>react</span>
              <span>nodejs</span>
            </div>
          </div>
          <p className="role">
            2019-present <span>mentor</span>
          </p>
          <p className="description">
            helping juniors and beginners in tech to develop their skills by
            teaching
          </p>

          <div className="title">
            <span className="organisation">tindogs</span>

            <div className="keywords">
              <span>nodejs</span>
              <span>laravel</span>
            </div>
          </div>
          <p className="role">
            2019 <span>software developer</span>
          </p>
          <p className="description">
            together with friends developed a prototype app "tinder for dogs"
            and took the podium on the hackathon
          </p>

          <div className="title">
            <span className="organisation">game on</span>

            <div className="keywords">
              <span>react native</span>
              <span>firebase</span>
            </div>
          </div>

          <p className="role">
            2017-2018 <span>co-founder / software developer</span>
          </p>
          <p className="description">
            together with friends worked on mobile app that searched for sport
            partners
          </p>

          <a
            className="organisation"
            href="https://github.com/yelsterdigital/monthly-meetup"
            target="_blank"
          >
            yelster digital meetup
          </a>
          <p className="role">
            2017-2019 <span>organizer</span>
          </p>
          <p className="description">
            gathered colleagues every month to share tech and general concepts
          </p>
        </div>
      </div>

      <div className="section">
        <p className="section-title">education</p>

        <div className="group">
          <a
            className="organisation"
            href="http://pwr.edu.pl/en/"
            target="_blank"
          >
            Wroclaw University of Science and Technology, Poland
          </a>
          <p className="role">
            2015-2016 <span>no degree (parallel to master)</span>
          </p>
          <p className="description">Computer Science</p>

          <p className="role">
            2014-2016 <span>master degree</span>
          </p>
          <p className="description">Entrepreneurship, Innovation & Projects</p>

          <p className="role">
            2011-2014 <span>bachelor degree</span>
          </p>
          <p className="description">Organisational Management</p>

          <a
            className="organisation"
            href="https://www.unipa.it/"
            target="_blank"
          >
            The University of Palermo, Italy
          </a>
          <p className="role">
            2014-2015 <span>erasmus</span>
          </p>
          <p className="description">Engineering Management</p>
        </div>
      </div>

      <a className="footer" href="mailto:maciej.jordanek@gmail.com">
        maciej.jordanek@gmail.com
      </a>

      <a className="footer" href="https://twitter.com/mjrdnk" target="_blank">
        my twitter
      </a>
    </>
  );
}

export default App;
