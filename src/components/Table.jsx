import React from "react";

const Table = ({
  allUserData,
  handleDeleteData,
  editRecord,
  toggleSortOrder,
  sortOrder,
}) => {
  // console.log(allUserData);

  const sortUserData = () => {
    return [...allUserData].sort((a, b) => {
      const nameA = a.name ? a.name.toUpperCase() : "";
      const nameB = b.name ? b.name.toUpperCase() : "";

      if (sortOrder === "asc") {
        return nameA.localeCompare(nameB);
      } else {
        return nameB.localeCompare(nameA);
      }
    });
  };

  const sortedUserData = sortUserData();

  return (
    <div className="w-full  mt-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-lg text-center">
          User Information Table
        </h1>
        <table className="w-full bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th
                className="py-2 px-4 border cursor-pointer"
                onClick={toggleSortOrder}
              >
                Name {sortOrder === "asc" ? "▲" : "▼"}
              </th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone Number</th>
              <th className="py-2 px-4 border">Date of Birth</th>
              <th className="py-2 px-4">
                Address
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 border">City</th>
                      <th className="py-2 px-4 border">District</th>
                      <th className="py-2 px-4 border">Province</th>
                      <th className="py-2 px-4 border">Country</th>
                    </tr>
                  </thead>
                </table>
              </th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {sortedUserData.map((user, index) => (
              <tr key={user.key}>
                <td className="py-2 px-4 border">{user.name}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.phoneNumber}</td>
                <td className="py-2 px-4 border">{user.dob}</td>
                <td className="py-2 px-4 border">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border">{user.city}</td>
                        <td className="py-2 px-4 border">{user.district}</td>
                        <td className="py-2 px-4 border">{user.province}</td>
                        <td className="py-2 px-4 border">{user.country}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td className="py-2 px-4 border" key={index}>
                  <button
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                    onClick={() => editRecord(user.key)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => handleDeleteData(user.key)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
