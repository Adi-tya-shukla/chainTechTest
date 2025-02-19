import { useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name || "");
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    if (!user) return;
    setUpdating(true);
    try {
      await updateDoc(doc(db, "users", user.uid), {
        name,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
    setUpdating(false);
  };

  if (loading) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Profile</h2>
        <p className="text-gray-700">Email: {user?.email}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-4 w-full p-2 border rounded"
          placeholder="Enter your name"
        />
        <button
          onClick={handleUpdate}
          disabled={updating}
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition disabled:opacity-50"
        >
          {updating ? "Updating..." : "Update Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
