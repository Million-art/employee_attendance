// Import necessary types from React and React hooks
import React, { useState, FC } from 'react';

// Define the entry type for better type safety
type Entry = {
  date: string;
  clockIn: string;
  clockOut: string | null;
};

// Define the prop types for the User component
const User: FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [clockInClicked, setClockInClicked] = useState<boolean>(false);
  const [clockOutClicked, setClockOutClicked] = useState<boolean>(false);

  const handleClockIn = () => {
    if (!clockInClicked && new Date().getHours() >= 7) {
      const newEntry: Entry = {
        date: new Date().toLocaleDateString(),
        clockIn: new Date().toLocaleTimeString(),
        clockOut: null,
      };
      setEntries([...entries, newEntry]);
      setClockInClicked(true);
    } else {
      alert('Clock In button can only be clicked once after 7 AM.');
    }
  };

  const handleClockOut = () => {
    if (!clockOutClicked) {
      const updatedEntries = entries.map((entry, index) => {
        if (index === entries.length - 1) {
          return { ...entry, clockOut: new Date().toLocaleTimeString() };
        }
        return entry;
      });

      setEntries(updatedEntries);
      setClockOutClicked(true);
    } else {
      alert('Clock Out button can only be clicked once.');
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <div>
        <button onClick={handleClockIn} disabled={clockInClicked} className="bg-blue-500 text-white px-4 py-2 mr-2">
          Clock In
        </button>
        <button onClick={handleClockOut} disabled={clockOutClicked} className="bg-green-500 text-white px-4 py-2">
          Clock Out
        </button>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Entries</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Clock In</th>
              <th className="border px-4 py-2">Clock Out</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.date}</td>
                <td className="border px-4 py-2">{entry.clockIn}</td>
                <td className="border px-4 py-2">{entry.clockOut || 'Not recorded'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
