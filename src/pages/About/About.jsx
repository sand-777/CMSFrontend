import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import Button from "../../components/Button/Button";
const About = () => {
  return (
    <>
     <Navbar/>
     <Button title="Register"/>

      <section className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to Digital Pathsala, your trusted source for online education
          and learning resources. Our mission is to provide accessible and
          high-quality education to students of all ages and backgrounds. We
          believe that learning should be an enriching and enjoyable experience,
          and we're committed to making it accessible to everyone.
        </p>

        <p>
          At Digital Pathsala, we offer a wide range of courses across various
          subjects, from technology to the arts, taught by experienced and
          passionate instructors. Our interactive and engaging learning platform
          allows you to learn at your own pace, making education flexible and
          convenient for your busy schedule.
        </p>

        <p>
          Join us on this journey of knowledge, growth, and empowerment. Start
          your learning adventure with Digital Pathsala today!
        </p>
      </section>

      <footer>
        <p>&copy; 2023 Digital Pathsala. All rights reserved.</p>
      </footer>
    </>
  );
};

export default About;
