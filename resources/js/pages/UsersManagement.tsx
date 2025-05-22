interface User {
  id: number;
  name: string;
  email: string;
  location: string;
  joined: string;
  permissions: string;
  avatar: string;
}

interface UsersManagementProps {
  users: User[];
}

export default function UsersManagement({ users }: UsersManagementProps) {
  const getPermissionColor = (permission: string) => {
    switch (permission) {
      case "Admin":
        return "bg-blue-500";
      case "Technician":
        return "bg-blue-400";
      case "Viewer":
        return "bg-blue-300";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          User Management
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center">
          <span className="mr-1">+</span>
          New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-3 px-4 text-left">Full Name</th>
              <th className="py-3 px-4 text-left">Email Address</th>
              <th className="py-3 px-4 text-left">Location</th>
              <th className="py-3 px-4 text-left">Joined</th>
              <th className="py-3 px-4 text-left">Permissions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user: User) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={user.avatar}
                    alt={`${user.name}'s avatar`}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  {user.name}
                </td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 bg-gray-800 rounded-full mr-2"></span>
                    {user.location}
                  </div>
                </td>
                <td className="py-3 px-4">{user.joined}</td>
                <td className="py-3 px-4">
                  <span
                    className={`${getPermissionColor(
                      user.permissions
                    )} text-white px-2 py-1 rounded text-sm`}
                  >
                    {user.permissions}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
