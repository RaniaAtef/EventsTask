"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const EventButton = ({ id }) => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);
  return (
    <>
      <Button onClick={() => router.push(`/events/${id}`)} variant="outlined">
        Show Details
      </Button>
    </>
  );
};

export default EventButton;
