"use client";
import React from "react";
import Dashboard from "../components/Dashboard";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log(session?.user);
  }, [session]);

  return (
    <div className="min-w-full min-h-screen flex justify-center">
      {session?.user ? (
        <Dashboard user={session?.user?.email} />
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default DashboardPage;
