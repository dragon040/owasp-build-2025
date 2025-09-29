import {
  AiFillLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineSlack,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

var footerLinks = [
  {
    title: "OWASP BENELUX",
    links: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "Programs",
        link: "/program",
      }
    ],
  },
  {
    title: "SPONSORS",
    links: [
      {
        name: "Our Sponsor",
        link: "/sponsors",
      }
    ],
  },
  {
    title: "CONNECT",
    links: [
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "Donation",
        link: "/donation",
      },
      {
        title: "Conference",
        url: "/conference",
      },
    ],
  },
];

var iconLink = {
  title: "FOLLOW US",
  links: [
    {
      name: <AiOutlineLinkedin />,
      link: "https://www.linkedin.com/company/owasp-benelux-days/",
    },
    {
      name: <AiOutlineSlack />,
      link: "https://owasp.slack.com/",
    },
  ],
};

export default function Footer() {
  return (
    <div className="footer">
      <div className="top-links">
        <div className="left-links">
          {footerLinks.map((e, i) => {
            return (
              <div className="links-ar" key={i}>
                <div className="title">{e.title}</div>
                <div className="links">
                  {e.links.map((j, ii) => {
                    return (
                      <Link key={ii} to={j.link}>
                        {j.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div className="links-ar">
            <div className="title">{iconLink.title}</div>
            <div className="links-icon">
              {iconLink.links.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="icon-link"
                    onClick={() => window.open(e.link)}
                  >
                    {e.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-text">© OWASP Foundation 2025</div>
    </div>
  );
}
