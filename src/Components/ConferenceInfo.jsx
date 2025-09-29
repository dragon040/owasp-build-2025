export default function ConferenceInfo() {
  return (
    <div className="conference-info">
      <p>
        <strong>The conference day is completely free</strong>, but registration is required!
      </p>
      <p>
        For the quality training, we ask for a participation of <strong>50€ for one day</strong>!
      </p>
      <p>
        To support the OWASP organisation, consider becoming a member — it's only <strong>US$50</strong>!
      </p>
      <p>
        <a
          href="https://owasp.org/membership/"
          target="_blank"
          rel="noopener noreferrer"
          className="membership-link"
        >
          Check out the Membership page to find out more.
        </a>
      </p>
    </div>
  );
}