import React, { useEffect, useState } from "react";
import { auth, db, doc, getDoc, signOut } from "../config/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        
        // Fetch additional user data from Firestore
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setProfile(userDoc.data());
        }
      } else {
        toast.error("User not logged in");
        navigate("/login");
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-6 bg-white rounded-lg shadow-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>
        {user ? (
          <div>
            <img
              src={user.photoURL || "https://via.placeholder.com/100"}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="text-lg font-semibold">{profile.name || user.displayName || "No Name"}</p>
            <p className="text-gray-600">{user.email}</p>
            <button
              onClick={handleLogout}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
