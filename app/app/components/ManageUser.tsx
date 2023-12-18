import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface Employee {
  id: number;
  fullName: string;
  phoneNumber: number;
  email: string;
  isAdmin: boolean;
}

const apiBaseUrl = 'http://localhost:3000';

const ManageUser: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [formData, setFormData] = useState<Employee>({
    id: 0,
    fullName: '',
    phoneNumber: 0,
    email: '',
    isAdmin: false,
  });
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(null);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(`${apiBaseUrl}/employees`);
      const data: Employee[] = await response.json();
      setEmployees(data);
    } catch (error: any) {
      console.error('Error fetching employees:', error.message);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (selectedEmployeeId) {
      // Update existing employee
      try {
        const response = await fetch(`${apiBaseUrl}/employees/${selectedEmployeeId}`, {
          method: 'PUT', // Assuming your backend supports PUT for updates
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const updatedEmployees = employees.map((employee) =>
            employee.id === selectedEmployeeId ? { ...employee, ...formData } : employee
          );
          setEmployees(updatedEmployees);
          setFormData({ id: 0, fullName: '', phoneNumber: 0, email: '', isAdmin: false });
          setSelectedEmployeeId(null);
        } else {
          console.error('Error updating employee:', response.statusText);
        }
      } catch (error: any) {
        console.error('Error updating employee:', error.message);
      }
    } else {
      // Add new employee
      try {
        const response = await fetch(`${apiBaseUrl}/employees`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const data: Employee = await response.json();
          setEmployees([...employees, data]);
          setFormData({ id: 0, fullName: '', phoneNumber: 0, email: '', isAdmin: false });
        } else {
          console.error('Error creating employee:', response.statusText);
        }
      } catch (error: any) {
        console.error('Error creating employee:', error.message);
      }
    }
  };

  const handleEdit = (id: number) => {
    // Set the selected employee's data in the form for editing
    const selectedEmployee = employees.find((employee) => employee.id === id);
    if (selectedEmployee) {
      setFormData({
        id: selectedEmployee.id,
        fullName: selectedEmployee.fullName,
        phoneNumber: selectedEmployee.phoneNumber,
        email: selectedEmployee.email,
        isAdmin: selectedEmployee.isAdmin,
      });
      setSelectedEmployeeId(id);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${apiBaseUrl}/employees/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
      } else {
        console.error('Error deleting employee:', response.statusText);
      }
    } catch (error: any) {
      console.error('Error deleting employee:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4"> Blih Employees Attendance Manager</h1>

      <form onSubmit={handleFormSubmit} className="mb-8">
        <label className="block mb-2">Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="border p-2 mb-4"
          required
        />

        <label className="block mb-2">Phone Number:</label>
        <input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="border p-2 mb-4"
          required
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 mb-4"
          required
        />

        <label className="  mb-2 flex flex-row gap-4 align-middle ">Is Admin :
        <input
          type="checkbox"
          name="isAdmin"
          checked={formData.isAdmin}
          onChange={(e) => setFormData({ ...formData, isAdmin: e.target.checked })}
          
          className="w-5"
        /></label><br/>

        <button type="submit" className="bg-blue-500 text-white p-2">
          {selectedEmployeeId ? 'Update Employee' : 'Add Employee'}
        </button>
      </form>

      {employees.length > 0 && (
        <table className="table-auto w-full text-center">
          <thead>
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Is Admin</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="border px-4 py-2">{employee.fullName}</td>
                <td className="border px-4 py-2">{employee.phoneNumber}</td>
                <td className="border px-4 py-2">{employee.email}</td>
                <td className="border px-4 py-2">{employee.isAdmin ? 'Yes' : 'No'}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handleEdit(employee.id)} className="mr-2 text-white bg-green-600 px-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(employee.id)} className="px-2 text-white bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div></div>
    </div>
  );
};

export default ManageUser;
