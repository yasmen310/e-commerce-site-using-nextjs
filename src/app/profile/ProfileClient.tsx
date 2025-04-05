"use client";

import { useQuery, useMutation, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const queryClient = new QueryClient();

export default function ProfileClientWrapper({ user }: { user: any }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProfileClient user={user} />
    </QueryClientProvider>
  );
}

function ProfileClient({ user }: { user: any }) {
  const { data: userData, refetch } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      return res.json();
    },
    initialData: user,
  });

  const mutation = useMutation({
    mutationFn: async (updatedUser: any) => {
      return fetch("/api/update-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser),
      });
    },
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div>
      <label className="form-label fw-bold">Name:</label>
      <input
        className="form-control"
        value={userData.name}
        onChange={(e) => mutation.mutate({ name: e.target.value })}
      />
      <button className="btn btn-primary w-100 mt-3" onClick={() => mutation.mutate(userData)}>
        Save Changes
      </button>
    </div>
  );
}
