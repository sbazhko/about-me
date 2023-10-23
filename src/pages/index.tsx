import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <h1>Siarhei Bazhko</h1>
      <p>Software Engineer</p>
      <p >
        <span className="grey">Dresden, Germany</span>
      </p>
      <p>
        <span className="grey">
          Software engineer with 4+ years of experience in building distributed systems.
          I'm passionate about learning and in-depth understanding of new things around computer science.
        </span>
      </p>
      <div className="skills">
        <h2>Skills</h2>
        <div>
          <ul>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Golang</li>
            <li>AWS</li>
            <li>Terraform</li>
            <li>Kubernetes</li>
            <li>Algorithms</li>
            <li>System Design</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Work experience</h2>
        <div>
          <p>
            <span className="headline">Software Engineer</span>
          </p>
          <p>
            <span className="grey">
              GoTo GmbH (LogMeIn Inc.) | Feb 2022 – Current
            </span>
          </p>
          <ul>
            <li>Initiated and led migration of distributed test framework for GoToMeeting from AWS EC2 to K8s</li>
            <li>Led operation and deployment topics, setup CI/CD pipelines</li>
            <li>DevOps & Security Champion</li>
          </ul>
        </div>
        <div>
          <p>
            <span className="headline">Backend Engineer</span>
          </p>
          <p>
            <span className="grey">
              JustWatch GmbH | Dec. 2020 – Sep. 2021
            </span>
          </p>
          <ul>
            <li>Developed testing strategy for the invoicing system, integrated it into the CI, and achieved 80% coverage</li>
            <li>Developed various algorithms for the existing invoice accounting system that increased the performance of the invoicing system by more than 3 times</li>
          </ul>
        </div>
        <div>
          <p>
            <span className="headline">Software Engineer</span>
          </p>
          <p>
            <span className="grey">
              DigitalWing | Oct. 2018 – Sep. 2019
            </span>
          </p>
          <ul>
            <li>Developed and maintained microservices for payment and crypto operations on an exchange platform to support more than 10 different cryptocurrencies.</li>
          </ul>
        </div>
        <div>
          <p>
            <span className="headline">Frontend Engineer</span>
          </p>
          <p>
            <span className="grey">
              EPAM Systems | Feb. 2018 – Aug. 2019
            </span>
          </p>
          <ul>
            <li>Enhanced filtering capabilities of internal EPAM's management and accounting system.</li>
          </ul>
        </div>
      </div>
      <div className="section">
        <h2>Education</h2>
        <div>
          <p>
            <span className="headline">Technische Universität Dresden</span>
          </p>
          <p>
            <span className="grey">
              Master of Science, Distributed Systems Engineering | 2019 – 2022
            </span>
          </p>
        </div>
        <div>
          <p>
            <span className="headline">Saint Petersburg State Electrotechnical University​</span>
          </p>
          <p>
            <span className="grey">
              Bachelor of Science, Software Engineering
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Siarhei Bazhko</title>
