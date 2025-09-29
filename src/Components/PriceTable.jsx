const data = [
  {
    feature: 'Regular Price',
    platinum: '€ 4,000',
    gold: '€ 3,000',
    silver: '€ 2,000',
  },
  {
    feature: 'Early Bird Offer (by 1st July)',
    platinum: '€ 3,600',
    gold: '€ 2,700',
    silver: '€ 1,800',
  },
  {
    feature: 'Company Logo on OWASP Chapter Homepages',
    platinum: '✔ (Belgium & Netherlands, 2025)',
    gold: '✔ (Belgium & Netherlands, 2025)',
    silver: '✔ (Belgium / Netherlands, 2025)',
  },
  {
    feature: 'Logo on Conference Promotional Materials',
    platinum: '✔ (Messages, Talks, Schedule)',
    gold: '✔ (Messages, Talks, Schedule)',
    silver: '✔ (Messages, Talks, Schedule)',
  },
  {
    feature: 'Company Banner Near Track Entrance',
    platinum: '✔ (1m x 2m)',
    gold: '✔ (1m x 2m)',
    silver: '—',
  },
  {
    feature: 'Name on Chapter Invitations (Meetup and emails)',
    platinum: '✔ (2025 Invitations)',
    gold: '—',
    silver: '—',
  },
  {
    feature: 'Name on Posters & Announcements',
    platinum: '✔',
    gold: '✔',
    silver: '—',
  },
  {
    feature: 'Speaking Slot (*)',
    platinum: '✔ (10 minutes)',
    gold: '—',
    silver: '—',
  },
  {
    feature: 'Name in Post-Event Newsletter',
    platinum: '✔',
    gold: '✔',
    silver: '✔',
  },
  {
    feature: 'Exclusive Add-On Opportunities',
    platinum:
      'Social Event (€2,000) - mentioned in the agenda, and rollup during the social event**',
    gold:
      'Coffee Break (€1,000) mentioned in the agenda, and rollup during break',
    silver: '—',
  },
  {
    feature: '3-Year Commitment Discount (10%) (***)',
    platinum: '✔',
    gold: '✔',
    silver: '—',
  },
  {
    feature: 'First-Pick Booth Placement (****)',
    platinum: '✔',
    gold: '✔',
    silver: '—',
  },
];

const PriceTable = () => {
  return (
    <div className="price-table-container">
      <table className="price-table">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Platinum</th>
            <th>Gold</th>
            <th>Silver</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.feature}</td>
              <td>{row.platinum}</td>
              <td>{row.gold}</td>
              <td>{row.silver}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="notes">
        <p>
          (*) The speaking slot will be clearly marked as a sponsor speaking
          slot at the start/end of normal talks.
        </p>
        <p>
          (**) Social sponsorship at the OWASP Benelux conference entails
          hosting the evening event near or in the conference venue, providing
          attendees with dinner and drinks. As a social sponsor, you’ll have the
          opportunity to engage with conference participants in a relaxed
          setting, fostering networking and camaraderie among industry
          professionals.
        </p>
        <p>
          (***) With an opt-out after the first year (without losing the 10%
          discount).
        </p>
        <p>
          (****) Order of choice is based on order of commitment and paid
          sponsorships.
        </p>
      </div>
    </div>
  );
};

export default PriceTable;