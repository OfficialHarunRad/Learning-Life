import React from "react";
import "./App.css";
import { SkillTreeButton } from "./SkillTreeButton";
import { UserProfile } from "./UserProfile";

export function SkillTree({ user }) {
  // Flatten the skills object into a single array
  const allSkills = Object.values(user.skills).flat();

  const skillTreeDataHierarchy = {
    RootSkills: allSkills.length > 0 ? [allSkills[0]] : [],
    Branches: allSkills.slice(1).map((skill) => [skill]),
  };
  // Get the total number of skills
  const numberOfSkills = allSkills.length;

  return (
    <div className="SkillTree">
      <div className="current-buttons">
        {/* Render SkillTreeButton components based on the number of skills the user has */}
        {allSkills.map((skill, index) => (
          <div className="skill-button" key={index}>
            Skill Name: {skill.skillName}
            <SkillTreeButton key={index} skillName={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
