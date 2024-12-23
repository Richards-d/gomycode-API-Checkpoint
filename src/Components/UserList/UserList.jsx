// Component that permits to implement the logic to fetch and display the user list

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; 

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  // Fetch data from the API using axios inside useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Save API data to state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>
      <ul className="user-list">
        {listOfUsers.map((user) => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;