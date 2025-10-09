import React from "react";
import "./App.css";

export function UserInfoBar({ user }) {
  const currentXP = user?.xp || 0;
  const maxXP = 100;
  const level = user?.level || 1;

  return (
    <div className="infobar flex items-center justify-between bg-gray-100 text-black rounded-xl p-3 shadow-md w-full max-w-lg mx-auto">
      {/* XP Section */}
      <div className="flex flex-col w-2/3">
        <div className="flex justify-between text-sm mb-1">
          <span>
            XP: {currentXP}/{maxXP}
          </span>
          <span>{Math.round((currentXP / maxXP) * 100)}%</span>
        </div>
        <div className="relative h-3 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-green-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentXP / maxXP) * 100}%` }}
          />
        </div>
      </div>

      {/* Level Section */}
      <div className="flex flex-col items-center justify-center w-1/3">
        <span className="text-xs text-black uppercase">Level</span>
        <span className="text-2xl font-bold text-green-400">{level}</span>
      </div>
    </div>
  );
}
