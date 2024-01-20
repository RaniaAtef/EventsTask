import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardActions } from "@mui/material";
import EventButton from "./Button";

export default function EventCard({ event }) {
  const words = event?.description.split(/\s+/);
  const croppedText = words?.slice(0, 25).join(" ") + "...";
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={event?.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event?.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "4px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                {event?.location}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>{event?.date}</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {croppedText}
            </Typography>
            <hr className="my-2" />
            <Typography sx={{ fontSize: "12px" }}>
              Duration : {event?.duration}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <EventButton id={event?.eventId} />
        </CardActions>
      </Card>
    </>
  );
}
