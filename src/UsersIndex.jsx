import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CSS/Global.css"

export function UsersIndex() {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>Users Index</h2>
     
      {users.map((user) => (
        <div key={user.id} className="container-col font-14">
          <div>Handle: {user.handle}</div>
          <div>Email: {user.email}</div>
          <div>First Name: {user.first_name}</div>
          <div>Last Name: {user.last_name}</div>
        </div>
      ))}
    </div>
  );
  
}

export default UsersIndex;
