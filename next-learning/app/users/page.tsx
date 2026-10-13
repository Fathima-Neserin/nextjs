
import { Suspense } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

// This component fetches and displays the users
async function UsersList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

// This page displays the loading fallback
export default function UserPage() {
  return (
    <main>
      <h1>User List</h1>

      <Suspense fallback={<p>Loading users...</p>}>
        <UsersList />
      </Suspense>
    </main>
  );
}
