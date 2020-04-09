import React, { useState, createContext } from "react";

// whene you like to use users you import userContext
export const UserContext = createContext();

// provider will provide users informations
export const UsersProvider = (props) => {
  const [usersData, setUsersData] = useState([]);

  return (
    <UserContext.Provider value={[usersData, setUsersData]}>
      {props.children}
    </UserContext.Provider>
  );
};
