import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "intermediate",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "beginner",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB"
  },

  {
    skill: "Microsoft Office",
    level: "Advanced",
    color: "#00FFFF"
  },
];

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
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({skill, color, level}) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span> 
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "Advanced" && "💪"
      }</span>
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
