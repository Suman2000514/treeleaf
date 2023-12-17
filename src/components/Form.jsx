import React from "react";

const App = ({ addRecord, inputData, userData, resetForm }) => {
  return (
    <div className="m-auto w-[50%] mt-10 shadow-lg p-6 rounded-lg bg-white">
      <div className="border-lime-300 border-l-2 border-t-2 border-r-2 border-b-2 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          User Information Form
        </h1>
        <form onSubmit={addRecord}>
          <div className="mb-4">
            <label className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full px-4 py-2 border rounded"
              value={userData.name}
              onChange={inputData}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded"
              value={userData.email}
              onChange={inputData}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter your Phone Number"
              className="w-full px-4 py-2 border rounded"
              value={userData.phoneNumber}
              onChange={inputData}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="w-full px-4 py-2 border rounded"
              value={userData.dob}
              onChange={inputData}
              required
            />
          </div>
          <div className="flex mb-4">
            <div className="mr-2 w-[50%]">
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                name="city"
                placeholder="Enter your City Name"
                className="w-full px-4 py-2 border rounded"
                value={userData.city}
                onChange={inputData}
                required
              />
            </div>
            <div className="w-[50%]">
              <label className="block text-gray-600">District</label>
              <input
                type="text"
                name="district"
                placeholder="Enter District Name"
                className="w-full px-4 py-2 border rounded"
                value={userData.district}
                onChange={inputData}
                required
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="mr-2 w-[50%]">
              <label className="block text-gray-600">Province</label>
              <select
                name="province"
                className="w-full px-4 py-2 border rounded"
                value={userData.province}
                onChange={inputData}
                required
              >
                <option value="">Select Your Province</option>
                <option value="1">Province 1</option>
                <option value="2">Province 2</option>
                <option value="3">Province 3</option>
                <option value="4">Province 4</option>
                <option value="5">Province 5</option>
                <option value="6">Province 6</option>
                <option value="7">Province 7</option>
              </select>
            </div>
            <div className="w-[50%]">
              <label className="block text-gray-600">Country</label>
              <input
                type="text"
                name="country"
                className="w-full px-4 py-2 border rounded"
                value="Nepal"
                onChange={inputData}
                readOnly
              />
            </div>
          </div>
          <div className="mb-4 flex justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Add Record
            </button>

            <button
              type="Reset"
              onClick={resetForm}
              className="bg-red-500 text-black px-4 py-2 rounded"
            >
              Reset Record
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
