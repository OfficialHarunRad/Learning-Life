<<<<<<< HEAD
import { useState } from "react";

export function UserModal({ onClose }) {
  const [isJournal, setIsJournal] = useState(true);

  const handleOverlayClick = (e) => {
    // if the click is on the overlay itself (not inside modal)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // this div is your overlay (the blurred background)
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      {/* this div is your actual modal box */}
      <div className="container flex flex-col bg-white/80 rounded-lg p-6 w-[600px] h-[600px] shadow-lg">
        <div className="selection-header flex gap-16 justify-around mb-6">
          <button onClick={() => setIsJournal(true)}>Journal</button>
          <button onClick={() => setIsJournal(false)}>Check List</button>
        </div>

        {isJournal ? (
          <div className="journal flex flex-grow">
            <textarea
              placeholder="Enter Text Here"
              className="border rounded p-2 w-2/3 bg-transparent flex-grow"
            />
            <div className="right-side-container flex flex-col justify-between">
              <div className="prev-records flex flex-col pl-8 pr-8">
                <button>Journal 1</button>
                <button>Journal 2</button>
                <button>Journal 3</button>
              </div>
              <div className="submit-button flex justify-center">
                <button className="border rounded px-4 py-2 bg-green-500 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="check-list flex flex-col flex-grow items-center">
            <ul className="w-2/3">
              <li>
                <input type="checkbox" /> Task 1
              </li>
              <li>
                <input type="checkbox" /> Task 2
              </li>
              <li>
                <input type="checkbox" /> Task 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
=======
import { useState } from 'react';

export function UserModal({ onClose }) {
  const [isJournal, setIsJournal] = useState(true);

  const handleOverlayClick = (e) => {
    // if the click is on the overlay itself (not inside modal)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // this div is your overlay (the blurred background)
    <div
      className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      {/* this div is your actual modal box */}
      <div className="container flex flex-col bg-white/80 rounded-lg p-6 w-[600px] h-[600px] shadow-lg">
        <div className="selection-header flex gap-16 justify-around mb-6">
          <button onClick={() => setIsJournal(true)}>Journal</button>
          <button onClick={() => setIsJournal(false)}>Check List</button>
        </div>

        {isJournal ? (
          <div className="journal flex flex-grow">
            <textarea
              placeholder="Enter Text Here"
              className="border rounded p-2 w-2/3 bg-transparent flex-grow"
            />
            <div className="right-side-container flex flex-col justify-between">
              <div className="prev-records flex flex-col pl-8 pr-8">
                <button>Journal 1</button>
                <button>Journal 2</button>
                <button>Journal 3</button>
              </div>
              <div className="submit-button flex justify-center">
                <button className="border rounded px-4 py-2 bg-green-500 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="check-list flex flex-col flex-grow items-center">
            <ul className="w-2/3">
              <li>
                <input type="checkbox" /> Task 1
              </li>
              <li>
                <input type="checkbox" /> Task 2
              </li>
              <li>
                <input type="checkbox" /> Task 3
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
>>>>>>> 7c66dd37e3132c4c1edc0e10813604c195f492e9
