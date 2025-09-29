import React from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

const speakers = [
  {
    name: "Jim Manico",
    time: "09:30 - 10:15",
    title: "Opening Keynote",
    streaming: true,
    images: ["/owasp-build-2025/jim-manico.jpg"],
    abstract: `AI for Secure Code Generation`,
    bio: `Jim Manico is the Founder of Manicode Security, a company dedicated to providing expert training in secure coding and security engineering to software developers. His work at Manicode Security reflects his deep commitment to elevating software security standards in the industry.

In addition to leading Manicode, Jim is actively involved in the tech startup ecosystem as an investor and advisor. His portfolio includes notable companies such as SemGrep, EdgeScan, Nucleus Security, Defect Dojo, KSOC, Akto, MergeBase, Inspectiv, Levo.ai and Pheonix. Furthermore, he is a fund-limited investor with Aviso Ventures, bringing his knowledge of software security to the venture capital domain.

Jim is a recognized figure in the software development community, particularly known for his contributions to secure software practices. He holds the title of a Java Champion, acknowledging his contributions to the Java community. He is also the author of "Iron-Clad Java: Building Secure Web Applications", published by Oracle Press.

Jim is committed to giving back to the community through his volunteer work with the OWASP foundation. He co-leads projects such as the OWASP Application Security Verification Standard and the OWASP Cheatsheet Series, contributing significantly to the field of web application security.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/jmanico",
      },
      {
        icon: <AiFillTwitterSquare />,
        link: "https://x.com/manicode",
      },
    ],
  },

  {
    name: "Irfaan Santoe and Robin van Loon",
    time: "10:15 - 11:00",
    title:
      "How to use OWASP Security Champions Guide for your Security Champions Program",
    streaming: true,
    images: ["/owasp-build-2025/irfaan_santoe.jpg", "/owasp-build-2025/robin_van_loon.jpg"],
    abstract: `As organizations scale their software development efforts, security often becomes a bottleneck in ensuring fast, reliable, and secure product releases. The OWASP Security Champions Guide provides a robust framework for embedding security expertise within development teams, fostering a proactive security culture.

This talk will guide you through the Security Champions Manifesto and its ten principles. You will be guided through each principle as we cover the what, why and how. We will also highlight recent additions to the project and the roadmap for the next steps.

By the end of this session, you will have actionable insights into building and maintaining your own security champions program and how the OWASP Security Champions Guide can help you accelerate the implementation.`,
    bio: `Irfaan Santoe is a seasoned Security Leader (ex-CISO of Aegon Netherlands) and highly experienced in scaling security in AppDev, DevOps, and Cloud environments. Over the course of his career, Irfaan had the privilege of fulfilling several Senior Security Leadership roles within global enterprises and listed multinationals, helping them solve complex information security challenges. Irfaan is the OWASP Chapter Leader of The Netherlands, Founder and Project Lead of the OWASP Security Champions Guide project, and a book author on the topic of DevSecOps.

With 25+ years of experience in the tech industry, Robin has a solid background in software development, application and information security. Being passionate about secure software development drives him to promote security initiatives in organizations and the AppSec community.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/irfaansantoe/",
      },
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/robin-van-loon-csslp-cissp-oswe/",
      },
    ],
  },

  {
    name: "Spandan Chandra",
    time: "11:30 - 12:15",
    title:
      "Shifting Further Left - A novel way to integrate security through AI in Software design",
    streaming: true,
    images: ["/owasp-build-2025/spandan_chandra.jpg"],
    abstract: `In recent years, DevSecOps has transformed how security integrates within the SDLC by embedding protective measures in the build and testing stages.
Yet, there remains a critical need to introduce security even earlier in the design phase, where strategic decisions set the foundation for an application security posture.

In this talk I would like to present an innovative approach for embedding security from the very beginning of the software development lifecycle leveraging AI-driven insights to identify potential risks during design and provides actionable recommendations. As a result, development teams can reduce vulnerabilities, minimize costly fixes down the line, and build applications with robust, secure and compliant architecture from day one.`,
    bio: `With over a decade of experience in cyber-security, risk management, and audits, I've had the opportunity to work with a range of organisations—from Fortune 500 companies to SMBs—helping them secure their information assets and maintain compliance in an ever-evolving threat landscape. Throughout my career, I've focused on enhancing business efficiency, particularly through the strategic use of technology.

Today, as the co-founder of Secinnova, my focus is on how artificial intelligence can transform risk management and auditing processes. We support organisations to design solutions for automating key tasks and optimise human capital, allowing organisations to not only streamline compliance but also manage risk more effectively.

As we gather here at the OWASP Annual Conference, a hub of innovation and thought leadership in security, I;m excited to discuss the transformative potential of Gen-AI in IT risk management and auditing. Together, we'll explore how AI can enhance decision-making, reduce manual errors, and provide organisation with the tools they need to stay ahead in today's digital environment.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/spandanchandra/",
      }
    ],
  },

  {
    name: "Olle E. Johansson",
    time: "12:15 - 13:00",
    title:
      "Are you ready to be regulated? How the EU Cyber Resilience Act will change the software industry forever",
    streaming: true,
    images: ["/owasp-build-2025/olle_e_johansson.jpg"],
    abstract: `The cost for the cybersecurity incidents all over the EU is too high. The EU believes that by regulating the cyber security of software, the total cost will go down as we get a more secure infrastructure in the home, in the office and everywhere we have networked systems. The regulation affects everything from embedded systems to servers, laptops and mobile apps. Development teams will have to focus on cybersecurity, companies will get responsibility for protecting their users and the software has to be secure by design from installation and during the lifetime of the product.

This will not only affect how we develop software, but also affects the business model for software.

Olle introduces the new regulation - how it affects both commercial vendors and Open Source projects.`,
    bio: `Olle E. Johansson is a consultant in the area of realtime communication and in embedded system security. He has been active in Open Source for many years as a developer, evangelist, trainer and speaker in many conferences worldwide. Olle is a member of the OWASP SBOM Forum and the OWASP CycloneDX industry working group. He is currently working on the CycloneDX Transparency Exchange API standard. Olle is currently a project leader for the Swedish DNS TAPIR project that is building Open Source software for analysing DNS resolver logs and finding bad actors.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/ollejohansson/",
      },
      {
        icon: <img src="/owasp-build-2025/infosec.png" />,
        link: "https://x.com/manicode",
      },
    ],
  },

  {
    name: "Philippe De Ryck",
    time: "14:00 - 14:45",
    title: "Supercharging OAuth 2.0 security",
    streaming: true,
    images: ["/owasp-build-2025/philippe_de_ryck.jpg"],
    abstract: `OAuth 2.0 is more than a decade old and has been adopted far beyond the initial expectations, including highly-sensitive eHealth and financial scenarios.

This session will guide you through using OAuth 2.0 in environments where security is paramount. We will dive into the latest specifications designed to enhance OAuth 2.0's security capabilities. Topics include advanced security features like JAR, PAR, and DPoP. By the end of this session, you will possess a comprehensive understanding of the security aspects of OAuth 2.0, equipped to implement it in high-stakes settings.`,
    bio: `Philippe De Ryck specializes in making web security accessible to developers and architects, leveraging his Ph.D. from KU Leuven to inform his comprehensive understanding of security challenges. As the founder of Pragmatic Web Security, he provides practical security training and consulting services to organizations worldwide. His online course platform offers a self-paced approach to learning about security. Philippe also actively helps shape OAuth 2.0 best practices as the co-author of the best practices for browser-based apps specification. Philippe is recognized as a Google Developer Expert, acknowledging his contributions to web application and API security. He also organizes SecAppDev, an annual week-long application security course in Belgium.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/PhilippeDeRyck/",
      }
    ],
  },

  {
    name: "Tiago Teles",
    time: "14:45 - 15:30",
    title: "The dawn of the emerging tech hero",
    streaming: true,
    images: ["/owasp-build-2025/tiago_teles.png"],
    abstract: `In a world where new emerging technologies revolutionise entire industries, one group holds to key to making emerging technologies go mainstream - security professionals. These are the unsung heroines of any technology revolution but it's key to understand why and how.

In this talk we will understand what that heroine looks like and what you must do to become that heroine. In your organisations and in the world. Excelling at discovering security vulnerabilities is not enough and won't get the needle moving. Together we will discover the holistic picture of our heroine - from hard skills to soft skills and everything in between.`,
    bio: `Tiago Teles has 20+ years of cybersecurity leadership experience. He is currently a manager at ABN AMRO bank and a cybersecurity lecturer at TIAS Business School. His passion lies in understanding cutting edge technologies and how best to secure them. He is the author of the book “Emerging Tech, Emerging Threats” (together with author Arnaud Wiehe). He holds an MBA and CISSP certification.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://nl.linkedin.com/in/tiagoteles",
      }
    ],
  },

  {
    name: "Mackenzie Jackson",
    time: "16:00 - 16:45",
    title: "From Code to Cloud - Securing the Stack with Open-Source Tools",
    streaming: true,
    images: ["/owasp-build-2025/mackenzie_jackson.jpg"],
    abstract: `Open-source tools offer a powerful, cost-effective solution for securing modern applications from development through deployment. This talk will walk through key tools that help protect your entire stack—from securing your codebase, to monitoring cloud environments, and automating vulnerability detection. We'll also discuss the strengths and limitations of open-source security tools, showing when they can be the perfect fit for your needs, and when proprietary or custom solutions may be more appropriate.

Attendees will see live demos of tools like OWASP ZAP, Trivy, Bandit, and Checkov to help them understand how to effectively incorporate these solutions. You'll leave with practical knowledge of the best tools for various security tasks and guidance on integrating them to protect your applications at every level.`,
    bio: `Mackenzie is a security researcher and advocate with a passion for application security. As the co-founder and former CTO of the health tech company Conpago, he learned first-hand how critical it is to build secure applications.

Today as an Advocate at Aikido Security, Mackenzie shares his passion for security with developers and works closely with research teams to reveal how malicious actors discover and exploit vulnerabilities in code. Mackenzie is also a seasoned speaker having spoken at conferences in 29 countries, he is the host of The Security Repo podcast and a frequent contributor to various technical publications like Dark Reading and Security Boulevard.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://linkedin.com/in/advocatemack",
      },
      {
        icon: <AiFillTwitterSquare />,
        link: "https://x.com/advocatemack",
      },
    ],
  },

  {
    name: "Rob van der Veer",
    time: "16:45 - 17:30",
    title:
      "Closing Keynote > AI - the new beginning? A lighthearted talk about our end of days.",
    streaming: true,
    images: ["/owasp-build-2025/rob.png"],
    abstract: `Will AI replace programmers? Will it fix security issues? Will it destroy us? Will we destroy each other with it? Or is it all just a hype? What does AI mean for our security profession? Where are we with standardizing AI security?`,
    bio: `Rob van der Veer is an AI pioneer with over 32 years of experience and Senior Principal Expert at the Software Improvement Group. He is the co-editor of the AI Act security standard and the main author of ISO/IEC 5338 on the AI lifecycle. Rob also founded the OWASP AI Exchange, opening up the global conversation on AI security through open-source collaboration, for which he set up a liaison partnership between OWASP and international standardization. He proudly contributes to SAMM and co-leads OpenCRE.org, which unifies security standards into one resource.

Rob advises National Cyber Security Centers, governments, enterprises, and institutions worldwide. He has delivered over 300 speaking engagements on AI, security, privacy, and software engineering. And he still hasn't figured everything out.`,
    followLink: [
      {
        icon: <AiFillLinkedin />,
        link: "https://www.linkedin.com/in/robvanderveer",
      },
      {
        icon: <AiFillTwitterSquare />,
        link: "https://twitter.com/robvanderveer?lang=en",
      },
    ],
  },
];

export default function ConfirmedSpeakers() {
  return (
    <section className="confirmed-speakers">
      <h2>Confirmed speakers for Thursday 28/11/2024:</h2>

      {speakers.map((sp, idx) => (
        <article key={idx} id={`spk_${idx}`} className="speaker">
          <div className="left">
            {
              sp.images.map((im, ind)=>{
                return <div className="image-spk" key={ind} style={{backgroundImage: `url(${im})`}}></div>
              })
            }
          </div>
          <div className="right">
            <h3>
              {sp.title} by {sp.name}
            </h3>
            <p>
              <strong>{sp.time}</strong> -{" "}
              {sp.streaming && <em>Check out the streaming feed!</em>}
            </p>

            <section className="abstract">
              <h4>Abstract:</h4>
              <p>{sp.abstract}</p>
            </section>

            <section className="bio">
              <h4>Bio:</h4>
              <p>{sp.bio}</p>
            </section>

            <footer className="follow-link">
              <b>Follow {sp.name}:</b>
              {sp.followLink.map((ln, i) => {
                return (
                  <span key={i} onClick={() => window.open(ln.link)}>
                    {ln.icon}
                  </span>
                );
              })}
            </footer>
          </div>
        </article>
      ))}
    </section>
  );
}
