import React, { useState } from "react";
import "./App.css";
import { UserProfile } from "./UserProfile";
import { UserInfoBar } from "./UserInfoBar";
import { SkillTree } from "./SkillTree";

function App() {
  const [user, setUser] = useState({
    name: "HarunRad",
    level: 1,
    xp: 0,
    skills: {
      technology: [
        { skillPoints: 0, skillName: "JavaScript" },
        { skillPoints: 0, skillName: "React" },
      ],
      health: [{ skillPoints: 0, skillName: "Fitness" }],
      personalDevelopment: [
        { skillPoints: 0, skillName: "Piano" },
        { skillPoints: 0, skillName: "Reading" },
      ],
    },
  });

  return (
    <div className="App">
      <UserProfile user={user} setUser={setUser} />
      <UserInfoBar user={user} />
      <SkillTree user={user} />
    </div>
  );
}

export default App;
