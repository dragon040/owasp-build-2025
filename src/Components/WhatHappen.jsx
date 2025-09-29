const points = [
  "Browse hundreds of open-source security projects on the official OWASP GitHub",
  "Dive into flagship tools like ZAP, Dependency-Check, and CycloneDX",
  "Contribute to community-driven initiatives tackling the top 10 vulnerabilities",
  "Learn how to integrate OWASP tools into CI/CD pipelines for real-world security",
  "Join working groups and project meetings through OWASP.org for hands-on collaboration"
];

export default function WhatHappen() {
  return (
    <div className="about-owasp">
      <div className="right"></div>
      <div className="left">
        <div className="head">Explore OWASP Projects & Tools</div>
        <div className="sub-heading">
          Curious where OWASP's impact begins?
          <br />
          It's all in the projects — powerful, free, and built by the global security community.
          <br />
          <br />
          {
            points.map((point, index) => <li key={index}>{point}</li>)
          }
        </div>
        <button className="btn bg-lg" onClick={() => window.open("https://owasp.org/projects/", "_blank")}>
          Browse Projects
        </button>
      </div>
    </div>
  );
}
