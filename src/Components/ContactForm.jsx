import { AiFillLinkedin, AiFillSlackSquare } from "react-icons/ai";
export default function ContactForm() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1 className="contact-title">Let's talk with us</h1>
        <p className="contact-subtitle">
          Questions, comments, or suggestions? Simply fill in the form and we’ll
          be in touch shortly.
        </p>
        <ul className="contact-details">
          <li>
            <b style={{fontFamily: "inter", fontStyle: "italic"}}>Our global address for general correspondence and faxes can be sent to our physical office address, at:</b>
          </li>
          <li>300 Delaware Ave, Ste 210 #384, Wilmington, DE 19801</li>
          <li>+1 951-692-7703 (phone)</li>
          <li>EIN #20-0963503</li>
          <br />
          <li>
            <b style={{fontFamily: "inter", fontStyle: "italic"}}>The European legal address and VAT number is:</b>
          </li>
          <li>OWASP Europe VZW</li>
          <li>c/o Sr Fiduciarire Cv, Steenvoordestraat 184, 9070 Destelbergen, Belgium</li>
          <li>VAT: BE 0836743279</li>
          <br />
          {/* <li>
            <a href="mailto:Contact@moralizer.com">Contact@moralizer.com</a>
          </li> */}
        </ul>
      </div>

      <div className="contact-right">
        {/* <form className="contact-form">
          <div className="form-row double">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Doe" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="+1 234 567 8910" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Your Message</label>
              <textarea rows="5" placeholder="Write your message here..."></textarea>
            </div>
          </div>

          <button type="submit" className="submit-btn btn bg-lg">SEND MESSAGE</button>
        </form> */}
        <div className="head">WE ARE ON LINKEDIN & SLACK</div>
        <div className="icons">
          <div className="icon" onClick={()=>window.open("https://www.linkedin.com/company/owasp-benelux-days/")}>
            <AiFillLinkedin className="linked-in-icon" />
            / BeNeLux Days
          </div>
          <div className="icon" onClick={()=>window.open("https://www.linkedin.com/company/owasp-netherlands/")}>
            <AiFillLinkedin className="linked-in-icon" />
            / Netherlands Chapter
          </div>
          <div className="icon" onClick={()=>window.open("https://www.linkedin.com/company/owasp-belgium/")}>
            <AiFillLinkedin className="linked-in-icon" />
            / Belgium Chapter
          </div>
          <div className="icon" onClick={()=>window.open("https://owasp.slack.com/")}>
            <AiFillSlackSquare className="slack-in-icon" />
            / OWASP SLACK.COM
          </div>
        </div>
        {/* <br />
        <br />
        <div className="head">CORPORATE SUPPORTERS</div>
        <div className="supports"></div> */}
      </div>
    </div>
  );
}
