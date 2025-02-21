import { useState, useEffect } from "react";
import './fetch.css'
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User List</h1>
      <input  type="text"  placeholder="Search users by name..." 
       value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
      {loading ? (
        <p>Loading...</p>
      ) : filteredUsers.length > 0 ? (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UserList;