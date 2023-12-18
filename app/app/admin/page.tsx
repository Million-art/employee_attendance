 'use client'
import React, { useState } from 'react';
import CheckAttendance from '../components/Checkattendance';
import ManageEmployees from '../components/ManageUser';

 

const AdminDashboard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Left Panel */}
      <div className="w-64 bg-gray-200 text-black border-r overflow-y-auto">
        <div className="p-4">
          <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>
          <div className="space-y-2 mt-32">
            <button
              className={`block w-full text-left px-4 py-2 rounded ${
                selectedOption === 'checkAttendance'
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-100'
              }`}
              onClick={() => handleOptionClick('checkAttendance')}
            >
              Check Attendance
            </button>
            <button
              className={`block w-full text-left px-4 py-2 rounded ${
                selectedOption === 'manageEmployees'
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-100'
              }`}
              onClick={() => handleOptionClick('manageEmployees')}
            >
              Manage Employees
            </button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 p-4 overflow-y-auto text-black">
        {selectedOption === 'checkAttendance' && <CheckAttendance />}
        {selectedOption === 'manageEmployees' && <ManageEmployees />}
      </div>
    </div>
  );
};

export default AdminDashboard;
