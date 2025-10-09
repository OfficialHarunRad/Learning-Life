import React, { useState } from "react";
import { UserModal } from "./UserModal";
import logo from "./assets/Logo-Icon.png";

export function SkillTreeButton({ skillName }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center cursor-pointer rounded-lg border-green-800 border-solid border"
      >
        <img src={logo} alt={skillName} className="w-20 h-20 object-contain" />
      </button>

      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
