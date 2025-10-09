import React, { useState } from "react";

export function UserProfile({ user, setUser }) {
  const [leveledUp, setLeveledUp] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const levelUp = () => {
    if (user.xp >= 100) {
      setUser((prevUser) => ({
        ...prevUser,
        level: prevUser.level + 1,
        xp: 0,
      }));
      setLeveledUp(true);
    }
  };

  const addXP = () => {
    setUser((prevUser) => {
      const newXP = prevUser.xp + 10;
      const updatedUser = { ...prevUser, xp: newXP };
      if (newXP >= 100) {
        setTimeout(() => levelUp(), 0);
      }
      return updatedUser;
    });
  };

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
      {Object.entries(user.skills).map(([category, skills]) => (
        <div key={category} className="skill-category">
          {/* .slice to extract skills array */}
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          <ul>
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <li key={index}>
                  {skill.skillName}: {skill.skillPoints} points
                </li>
              ))
            ) : (
              <li>No skills yet.</li>
            )}
          </ul>
        </div>
      ))}

      <button onClick={addXP}>Gain 10 XP</button>

      {leveledUp && (
        <div className="skill-selection">
          <h3>🎉 You leveled up! Choose a skill to upgrade:</h3>
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
