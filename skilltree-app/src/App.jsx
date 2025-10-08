import React from 'react';
import './App.css';
import { UserProfile } from './UserProfile';
import { SkillTreeButton } from './SkillTreeButton';
import { UserInfoBar } from './UserInfoBar';

function App() {
  return (
    <div className="App">
      <UserProfile />
      <SkillTreeButton />
      <UserInfoBar />
    </div>
  );
}

export default App;
