"use client";
import FetchButton from "@/components/FetchButton/FetchButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function UserList() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <FetchButton category="admins" />
        <FetchButton category="users" />
      </QueryClientProvider>
    </>
  );
}
