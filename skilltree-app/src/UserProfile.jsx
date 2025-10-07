import React, { useState } from "react";

export function UserProfile() {
  //Usestate to manage user data
  const [user, setUser] = useState({
    name: "HarunRad",
    level: 1,
    xp: 0,
    skills: [{ skillPoints: 0, skillName: "JavaScript" }],
  });

  // New state to manage level-up status
  const [leveledUp, setLeveledUp] = useState(false);

  // Function to handle leveling up
  const levelUp = () => {
    if (user.xp >= 100) {
      setUser((prevUser) => ({
        ...prevUser,
        level: prevUser.level + 1,
        xp: 0,
      }));
      setLeveledUp(true); // ✅ show the skill-selection section
    }
  };

  // Function to add XP
  const addXP = () => {
    setUser((prevUser) => {
      const newXP = prevUser.xp + 10;
      const updatedUser = { ...prevUser, xp: newXP };
      if (newXP >= 100) {
        // call levelUp inside here
        setTimeout(() => levelUp(), 0);
      }
      return updatedUser;
    });
  };

  const [selectedSkill, setSelectedSkill] = useState("");

  // Function to add skill points
  const addSkillPoint = (skillName) => {
    setUser((prevUser) => ({
      ...prevUser,
      skills: prevUser.skills.map((s) =>
        s.skillName === skillName ? { ...s, skillPoints: s.skillPoints + 1 } : s
      ),
    }));
    setLeveledUp(false);
  };

  const addSkill = (skillName) => {
    setUser((prevUser) => ({
      ...prevUser,
      skills: [...prevUser.skills, { skillPoints: 0, skillName }],
    }));
  };

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <h1>Level: {user.level}</h1>
      <p>XP: {user.xp}</p>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>
            {skill.skillName}: {skill.skillPoints} points
          </li>
        ))}
      </ul>

      <button onClick={addXP}>Gain 10 XP</button>

      {leveledUp && (
        <div className="skill-selection">
          <h3>🎉 You leveled up! Choose a skill to upgrade:</h3>

          {/* controlled dropdown */}
          <select
            className="skill-dropdown"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
          >
            <option value="">-- Select a skill --</option>
            {user.skills.map((skill, index) => (
              <option key={index} value={skill.skillName}>
                {skill.skillName}
              </option>
            ))}
          </select>

          <button
            onClick={() => {
              if (selectedSkill) {
                addSkillPoint(selectedSkill);
              } else {
                alert("Please select a skill first!");
              }
            }}
          >
            Add Skill Point
          </button>
        </div>
      )}

      <div className="add-skill">
        <h3>Add New Skill:</h3>
        <input type="text" id="new-skill" placeholder="Skill Name" />
        <button
          onClick={() => {
            const skillName = document.getElementById("new-skill").value;
            if (skillName) {
              addSkill(skillName);
              document.getElementById("new-skill").value = "";
            }
          }}
        >
          Add Skill
        </button>
      </div>
    </div>
  );
}
