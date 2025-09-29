import { AiOutlineLink } from "react-icons/ai";

const ConferenceSchedule = () => {
  const schedule = [
    {
      time: "08:30 - 09:00",
      title: "Registration booth and morning coffee",
      speaker: "",
      link: "",
    },
    {
      time: "09:00 - 09:15",
      title: "Opening / Welcome by Owasp BeNeLux Team",
      speaker: "",
      link: "",
    },
    {
      time: "09:30 - 10:15",
      title: "Opening Keynote",
      speaker: "Jim Manico",
      link: "https://www.youtube.com/watch?v=OQzAplOFUY4&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD",
      id: "spk_0"
    },
    {
      time: "10:15 - 11:00",
      title:
        "How to use OWASP Security Champions Guide for your Security Champions Program",
      speaker: "Irfaan Santoe and Robin van Loon",
      link: "https://www.youtube.com/watch?v=EoxpHIgJLNM&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=2",
      id: "spk_1"      
    },
    { time: "11:00 - 11:30", title: "Break", speaker: "", link: "" },
    {
      time: "11:30 - 12:15",
      title:
        "Shifting Further Left - A novel way to integrate security through AI in Software design",
      speaker: "Spandan Chandra",
      link: "https://www.youtube.com/watch?v=REsR1UqRlek&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=3",
      id: "spk_3"
    },
    {
      time: "12:15 - 13:00",
      title:
        "Are you ready to be regulated? How the EU Cyber Resilience Act will change the software industry forever",
      speaker: "Olle E. Johansson",
      link: "https://www.youtube.com/watch?v=XMAfeQQ2ZOM&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=4",
      id: "spk_4"
    },
    { time: "13:00 - 14:00", title: "Lunch", speaker: "", link: "" },
    {
      time: "14:00 - 14:45",
      title: "Supercharging OAuth 2.0 security",
      speaker: "Philippe De Ryck",
      link: "https://www.youtube.com/watch?v=WwBa2vWHXwc&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=5",
      id: "spk_6"
    },
    {
      time: "14:45 - 15:30",
      title: "The dawn of the emerging tech hero",
      speaker: "Tiago Teles",
      link: "https://www.youtube.com/watch?v=Lr9BIYosJhM&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=6",
      id: "spk_7"
    },
    { time: "15:30 - 16:00", title: "Break", speaker: "", link: "" },
    {
      time: "16:00 - 16:45",
      title: "From Code to Cloud - Securing the Stack with Open-Source Tools",
      speaker: "Mackenzie Jackson",
      link: "https://www.youtube.com/watch?v=UPt0YhshTE0&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=7",
      id: "spk_9"
    },
    {
      time: "16:45 - 17:30",
      title:
        "Closing Keynote > AI - the new beginning? A lighthearted talk about our end of days.",
      speaker: "Rob van der Veer",
      link: "https://www.youtube.com/watch?v=UrzIHmecXnk&list=PLyxqkIdWNocBj4L0TY6U3MFSqQQIyuQkD&index=8",
      id: "spk_10"
    },
    {
      time: "17:30 - 17:45",
      title: "Closing by Owasp BeNeLux Team",
      speaker: "",
      link: "",
    },
    {
      time: "17:45 - 18:45",
      title: "Let's have a drink altogether! by Owasp BeNeLux Team",
      speaker: "",
      link: "",
    },
  ];

  const scrollToSection = (text) => {
    const section = document.getElementById(text);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="conference-schedule">
      <h1>Conference Day on 28/11/2024: Program Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Title</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.time}</td>
              <td
                className={item.link !== "" && "yt-link"}
                onClick={() => item.link !== "" && window.open(item.link)}
              >
                {item.title} {item.link !== "" && <AiOutlineLink />}
              </td>
              <td className={item.link !== "" && "yt-link"} onClick={() => item.link !== "" && scrollToSection(item?.id)}>
                {item.speaker || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ConferenceSchedule;
