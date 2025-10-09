<<<<<<< HEAD
import { useState } from "react";
import { UserModal } from "./UserModal";
import logo from "./assets/Logo-Icon.png";

export function SkillTreeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center cursor-pointer rounded-lg border-green-800 border-solid border"
      >
        <img src={logo} alt="App logo" className="w-20 h-20 object-contain" />
      </button>

      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
=======
import { useState } from 'react';
import { UserModal } from './UserModal';
import logo from './assets/Logo-Icon.png';

export function SkillTreeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center cursor-pointer rounded-lg border-green-800 border-solid border"
      >
        <img src={logo} alt="App logo" className="w-20 h-20 object-contain" />
      </button>

      {isModalOpen && <UserModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
>>>>>>> 7c66dd37e3132c4c1edc0e10813604c195f492e9
