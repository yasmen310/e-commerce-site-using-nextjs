export default async function UserProfile() {
  const user = await fetchUser(); 

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

async function fetchUser() {
  return { name: "John Doe", email: "john@example.com" };
}
