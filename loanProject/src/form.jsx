export default function FormDash() {
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
              placeholder="Enter full name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">
              Your Phone Number
            </label>
            <input
              type="number"
              placeholder="0770XXXXXXX"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">Your Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4 text-cyan-500" />
            <label className="font-medium text-gray-600">
              Are you an employee?
            </label>
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-600">
              Select Your Salary
            </label>
            <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400">
              <option value="">Select salary</option>
              <option>500-$</option>
              <option>1000-$</option>
              <option>1500-$</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
