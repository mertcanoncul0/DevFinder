import { FormEvent, useContext } from "react";
import { User } from "../App";

export default function HeaderSearch() {
  const { changeUser } = useContext(User) as {
    changeUser: (user: any) => void;
  };

  async function onSubmitForm(e: FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = Object.fromEntries(new FormData(form)) as {
      username: string;
    };

    const user = await fetch(
      `https://api.github.com/users/${formData.username.trim()}`
    ).then((x) => x.json());

    changeUser(user);
  }

  return (
    <form className="search-form" onSubmit={onSubmitForm}>
      <button className="search-icon">
        <img src="/search-icon.svg" alt="Search" />
      </button>

      <input
        className="search-input"
        type="text"
        name="username"
        placeholder="Search GitHub username…"
      />

      <button className="search-btn">Search</button>
    </form>
  );
}
