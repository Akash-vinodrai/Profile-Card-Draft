import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="akash.jpg" alt="Akash Vinodrai" />;
}

function Intro() {
  return (
    <div>
      <h1>Akash Vinodrai</h1>
      <p>
        I'm a Computer Science graduate from De Montfort University, Leicester,
        with experience in front-end development, Agile/Scrum, and Microsoft
        technologies. I'm skilled in HTML, CSS, JavaScript, and React.js. I’ve
        built web applications, designed databases, and enjoy finding creative
        solutions. I'm a strong team player, work well in fast-paced
        environments, and adapt quickly to new challenges.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💎" color="blue" />
      <Skill skill="HTML+CSS" emoji="💎" color="orange" />
      <Skill skill="Web Development" emoji="💎" color="green" />
      <Skill skill="Power Bi" emoji="💎" color="purple" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
