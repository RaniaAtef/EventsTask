"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e) => {
    setLoading(true);
    setError(null);
    e.preventDefault();
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
        setLoading(false);
        router.push("/");
      })
      .catch((error) => {
        setError("Invalid email or password");
        setLoading(false);
      });
  };
  return (
    <div className="max-w-sm mx-auto mt-16">
      <form onSubmit={handleRegister}>
        <h1 className="my-5 font-bold">Register</h1>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            {loading && <CircularProgress color="inherit" size={16} />}{" "}
            <span>Register</span>
          </button>
          <Link href="/login" className="text-blue-600 mt-2">
            Already have account
          </Link>
        </Box>
      </form>
    </div>
  );
}
