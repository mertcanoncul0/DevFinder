import { createContext, useState } from "react";
import Header from "./components/header";
import UserCard from "./components/user-card";

export const User = createContext({});

export default function App() {
  const [user, setUser] = useState({});

  function changeUser(user: {}) {
    setUser(user);
  }

  const data = {
    changeUser,
    user,
  };

  return (
    <User.Provider value={data}>
      <Header />
      <main>
        <UserCard />
      </main>
    </User.Provider>
  );
}
