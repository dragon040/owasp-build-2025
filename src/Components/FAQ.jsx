import { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";

const faqs = [
  {
    q: "What is OWASP?",
    a: "OWASP (Open Worldwide Application Security Project) is a non-profit organization focused on improving the security of software through community-led open-source projects, tools, and education.",
  },
  {
    q: "What is the OWASP Top 10?",
    a: "The OWASP Top 10 is a regularly updated list of the ten most critical web application security risks, serving as a guide for developers and organizations to build secure applications.",
  },
  {
    q: "How can developers use OWASP resources?",
    a: "Developers can use OWASP tools like ZAP, checklists, the Top 10 guide, and secure coding practices provided in OWASP documentation to write more secure code.",
  },
  {
    q: "Is OWASP only for developers?",
    a: "No, OWASP provides resources for developers, testers, security professionals, and business leaders to improve application security across all levels of an organization.",
  },
  {
    q: "Where can I access OWASP projects?",
    a: "OWASP projects can be accessed for free on their official website at https://owasp.org, where users can find tools, documentation, and community initiatives.",
  },
];

export default function FAQ({ qa, ao }) {
  const [openQ, setOpenQ] = useState(0);
  if (qa) {
    return (
      <div className="faq">
        <div className="head">FREQUENTLY ASKED QUESTIONS</div>
        <div className="section">
          <div className="left">
            {qa.map((item, index) => (
              <div className="faq-section">
                <div className="faq-single" key={index}>
                  <div className="l-icon">+</div>
                  {item.question}
                  <div
                    className={openQ === index + 1 ? "r-icon open" : "r-icon"}
                    onClick={() =>
                      openQ === index + 1 ? setOpenQ(0) : setOpenQ(index + 1)
                    }
                  >
                    +
                  </div>
                </div>
                {openQ === index + 1 && (
                  <div className="faq-ans">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
          {/* <div className="right">
            <div className="icon">?</div>
            <div className="r-head">ANY QUESTION?</div>
            <div className="r-sub">
              You can ask anything you want to know. Feedback welcome!
            </div>
            <div className="input-ar">
              <div className="ia-title">Let me know</div>
              <input type="text" maxLength={200} />
            </div>
          </div> */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="faq">
        <div className="head">FREQUENTLY ASKED QUESTIONS</div>
        <div className="section">
          <div className="left" style={{ gridTemplateColumns: "auto" }}>
            {faqs.map((item, index) => (
              <div className="faq-section">
                <div className="faq-single" key={index}>
                  <div className="l-icon">+</div>
                  {item.q}
                  <div
                    className={openQ === index + 1 ? "r-icon open" : "r-icon"}
                    onClick={() =>
                      openQ === index + 1 ? setOpenQ(0) : setOpenQ(index + 1)
                    }
                  >
                    +
                  </div>
                </div>
                {openQ === index + 1 && <div className="faq-ans">{item.a}</div>}
              </div>
            ))}
          </div>
          {ao && (
            <div className="right">
              <div className="r-section">
                <div className="r-head">Connect With Us on LinkedIn</div>
                <div className="r-sub">
                  Want to share a thought or ask something? Connect with us on LinkedIn!
                </div>
                <div className="input-ar">
                  <span style={{fontSize: 20, color: "rgb(58, 130, 255)", display: "flex", alignItems: "center", gap: 10}} onClick={()=>window.open("https://www.linkedin.com/company/owasp-benelux-days")}><AiFillLinkedin />Visit Our LinkedIn</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
