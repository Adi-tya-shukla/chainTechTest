import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
        {user ? (
          <div className="text-center">
            <p className="text-lg font-semibold">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-center">Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
