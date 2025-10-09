<<<<<<< HEAD
import React, { useState } from "react";
import "./App.css";
import { UserProfile } from "./UserProfile";
import { UserInfoBar } from "./UserInfoBar";
import { SkillTree } from "./SkillTree";
=======
import React from 'react';
import './App.css';
import { UserProfile } from './UserProfile';
import { SkillTreeButton } from './SkillTreeButton';
import { UserInfoBar } from './UserInfoBar';
>>>>>>> 7c66dd37e3132c4c1edc0e10813604c195f492e9

function App() {
  const [user, setUser] = useState({
    name: "HarunRad",
    level: 1,
    xp: 0,
    skills: {
      Technology: [
        { skillPoints: 0, skillName: "JavaScript" },
        { skillPoints: 0, skillName: "React" },
      ],
      Health: [{ skillPoints: 0, skillName: "Fitness" }],
      Personal_Development: [
        { skillPoints: 0, skillName: "Piano" },
        { skillPoints: 0, skillName: "Reading" },
      ],
    },
  });

  return (
    <div className="App">
<<<<<<< HEAD
      {/* Pass both user and setUser */}
      <UserProfile user={user} setUser={setUser} />
      <UserInfoBar user={user} />
      <SkillTree user={user} />
=======
      <UserProfile />
      <SkillTreeButton />
      <UserInfoBar />
>>>>>>> 7c66dd37e3132c4c1edc0e10813604c195f492e9
    </div>
  );
}

export default App;
