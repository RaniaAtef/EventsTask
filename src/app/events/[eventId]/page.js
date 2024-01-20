"use client";
import { useEffect, useState } from "react";
import BasicModal from "@/components/Modal";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

export default function Details({ params }) {
  const eventId = params.eventId;
  const [data, setData] = useState();
  async function getData() {
    fetch(`http://localhost:3000/api/events/${eventId}`)
      .then(async (res) => {
        return res.json();
      })
      .then((data) => setData(data));
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
    getData();
  }, []);

  return (
    <>
      <main className=" flex flex-col justify-center items-center  py-6 px-4 sm:p-6 md:py-10 md:px-8">
        {data && (
          <>
            <Image src={data.image} width={600} height={600} alt="yoga" />
            <div className="w-[600px]">
              <Typography
                variant="h5"
                className="my-5"
                sx={{ color: "#E3481C" }}
              >
                {data?.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "4px",
                }}
              >
                <Typography sx={{ color: "#E3481C" }}>
                  {data?.location}
                </Typography>
                <Typography sx={{ color: "#E3481C" }}>{data?.date}</Typography>
              </Box>
              <Typography>{data?.description}</Typography>
              <Typography sx={{ marginTop: "4px", color: "#E3481C" }}>
                Duration : {data?.duration}
              </Typography>
              <hr className="my-3" />
              <Typography
                variant="p"
                sx={{ fontWeight: "bold", color: "#E3481C" }}
              >
                Joined Users :
              </Typography>
              <ul className="mb-3">
                {data?.attendees.slice(0, 5).map((attnd) => (
                  <li key={attnd.id}>{attnd.name}</li>
                ))}
              </ul>
              <BasicModal attendees={data?.attendees} />
            </div>
          </>
        )}
      </main>
    </>
  );
}
