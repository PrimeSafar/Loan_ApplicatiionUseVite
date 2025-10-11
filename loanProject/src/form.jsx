import { useState } from "react";
export default function FormDash() {
  const InitialValue = {
    name: "",
    phone: "",
    age: "",
    isEmployee: false,
    salary: "",
  };
  const [FormData, SetForm] = useState(InitialValue);
  // Define validation conditions
  const isNameValid = FormData.name.length >= 2; // At least 2 characters
  const isPhoneValid = FormData.phone.length >= 11; // At least 11 digits
  const isAgeValid = FormData.age >= 18; // At least 18 years old
  const isSalaryValid = FormData.salary !== ""; // Salary selected

  // Combine all validations
  const isFormValid =
    isNameValid && isPhoneValid && isAgeValid && isSalaryValid;
  return (
    <div className="flex w-screen items-center justify-center min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500 p-4">
      <div className="w-screen max-w-md bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          Employee Form
        </h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={FormData.name}
              onChange={(e) => SetForm({ ...FormData, name: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {/* Error message for name */}
            {FormData.name && FormData.name.length < 2 && (
              <p className="text-red-500 text-sm mt-1">
                Name must be at least 2 characters
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">
              Your Phone Number
            </label>
            <input
              type="number"
              name="phone"
              value={FormData.phone}
              onChange={(e) => SetForm({ ...FormData, phone: e.target.value })}
              placeholder="0770XXXXXXX"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {/* Add this for phone */}
            {FormData.phone && FormData.phone.length < 11 && (
              <p className="text-red-500 text-sm mt-1">
                Phone must be at least 11 digits
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">Your Age</label>
            <input
              type="number"
              name="age"
              value={FormData.age}
              onChange={(e) => SetForm({ ...FormData, age: e.target.value })}
              placeholder="Enter your age"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            {/* Add this for age */}
            {FormData.age && FormData.age < 18 && (
              <p className="text-red-500 text-sm mt-1">
                Must be at least 18 years old
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="isEmployee"
              value={FormData.isEmployee}
              onChange={(e) =>
                SetForm({ ...FormData, isEmployee: e.target.checked })
              }
              className="h-4 w-4 text-cyan-500"
            />
            <label className="font-medium text-gray-600">
              Are you an employee?
            </label>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">
              Select Your Salary
            </label>
            <select
              value={FormData.salary}
              onChange={(e) => SetForm({ ...FormData, salary: e.target.value })}
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <option value="">Select salary</option>
              <option>500-$</option>
              <option>1000-$</option>
              <option>1500-$</option>
            </select>
            {/* Add this for salary */}
            {FormData.salary === "" && (
              <p className="text-red-500 text-sm mt-1">
                Please select a salary
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
