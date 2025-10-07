import React from 'react';
import './App.css';
import { UserProfile } from './UserProfile';
import { SkillTreeButton } from './SkillTreeButton';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <SkillTreeButton />
    </div>
  );
}

export default App;
