import { AiOutlineDownload } from "react-icons/ai";

const ContactUsSmall = () => {
  return (
    <div className="contact-us-small">
      <h3>Contact us:</h3>
      <ul>
        <li>
          <strong>Priyam Awasthy</strong> –{' '}
          <a href="mailto:priyam.awasthy@owasp.org">priyam.awasthy@owasp.org</a>
        </li>
        <li>
          <strong>Amit Sharma</strong> –{' '}
          <a href="mailto:amit.sharma@owasp.org">amit.sharma@owasp.org</a>
        </li>
        <li>
          <strong>Stella Dineva</strong> –{' '}
          <a href="mailto:stella.dineva@owasp.org">stella.dineva@owasp.org</a>
        </li>
      </ul>

      <a
        href="https://2025.owaspbenelux.eu/assets/files/OWASP_Sponsorship_Brochure_Benelux_2025.pdf"
        className="btn db"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download our sponsor brochure <AiOutlineDownload />
      </a>
    </div>
  );
};

export default ContactUsSmall;