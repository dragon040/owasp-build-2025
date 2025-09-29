import ContactForm from "../Components/ContactForm";
import HeroMini from "../Components/HeroMini";

export default function Contact() {
    return <div className="contact">
        <HeroMini title={"CONTACT US"} bg_img="/owasp-build-2025/img3.jpg" />
        <ContactForm />
    </div>
}