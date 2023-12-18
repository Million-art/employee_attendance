import React from 'react';

const Checkattendance = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Employees</h1>
      <div className="flex flex-col">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-lg font-semibold">Employee Name</h1>
            <p className="text-gray-600">John Doe</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Employee ID</h1>
            <p className="text-gray-600">12345</p>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Check Attendance
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkattendance;
