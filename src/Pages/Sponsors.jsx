import BGText from "../Components/BGText";
import FAQ from "../Components/FAQ";
import HeroMini from "../Components/HeroMini";
import IconTitleContent from "../Components/IconTitleContent";
import Sponsors from "../Components/Sponsors";
import ContactUsSmall from "../Components/ContactUsSmall";
import PriceTable from "../Components/PriceTable";

var faqList = [
  {
    question: 'What will be the dimensions of the booth?',
    answer:
      'Depending on your Sponsorship package you will be provided with tables of approximate dimensions of either 1mx1m or 2mx2m with two chairs and a power outlet in the area designated to you.',
  },
  {
    question: 'What will be the dimensions of the Banner roll up?',
    answer:
      'The sponsor has to provide their own banner where a Gold Sponsor can place regular 1x2 banners and platinum sponsors can place larger banners.',
  },
  {
    question: 'Will there be electricity provided or do we have to pay for it?',
    answer: 'Electricity will be provided.',
  },
  {
    question: 'Do we have Wifi available at the event and do we have to pay for it?',
    answer: 'Wifi will be provided for free at the venue.',
  },
  {
    question: 'Do we get screens and equipment?',
    answer:
      'OWASP doesn’t provide any screens or equipment. It is the sole responsibility of the sponsor to arrange and vacate it at the end of the event. Please reach out to one of the volunteers in time to see if we can help you.',
  },
  {
    question: 'Do we get to choose the location of the booth?',
    answer:
      'No, this is done by the organizers team depending on parameters like space and first come first serve.',
  },
  {
    question: 'Do you provide any kind of lead collection mechanism?',
    answer:
      'We do not provide any kind of lead collection mechanism. You are free to collect information from the people you talk to or the ones who come to your booth with their consent.',
  },
  {
    question:
      'Do you provide any kind of information with respect to the attendees post conference?',
    answer:
      'We do not share any kind of information on the attendees post event. You are free to collect information from the people you talk to or the ones who come to your booth with their consent.',
  },
  {
    question: 'Do you have the floor plan for the venue?',
    answer:
      'Please ask the OWASP member you are in touch with for more details on this.',
  },
  {
    question: 'How many people will be attending?',
    answer:
      'We are expecting from 200 to 300 people attending this event.',
  },
  {
    question: 'Can I send my equipment beforehand?',
    answer:
      'If necessary, material can be sent beforehand, specifically marked as “OWASP, BeNeLux 2025”. Please ask the OWASP member you are in touch with for more details on this.',
  },
  {
    question:
      'Are you interested in sponsoring/contributing towards the OWASP BeNeLux social event?',
    answer:
      'Please ask more details from the OWASP member you are in touch with.',
  },
];

export default function SponsorPage() {
    return <div className="sponsors-page">
        <HeroMini title={"SPONSORS"} bg_img="/owasp-build-2025/img7.jpg" />
        <IconTitleContent icon={false} title={"Sponsorship packages"} content={"The local Chapters of OWASP in The Netherlands and Belgium come together every year to host a physical event called “OWASP BeNeLux Days” which this year is happening in the heart of the City of Mechlen in Begium. It brings together a wide range of security technologists, from executives to individual contributors across SMBs and major corporations.These are important influencers and decision makers who drive the buying decisions for investments in security."} />
        <Sponsors only_icons={true} />
        <PriceTable />
        <ContactUsSmall />
        <br /><br />
        <BGText title={"Become a sponsor of OWASP BeNeLux!"} button={"Become a Sponsor"} type={2} />
        <FAQ qa={faqList} />
    </div>
}