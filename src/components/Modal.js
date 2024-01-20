import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Pagination from "@mui/material/Pagination";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ attendees }) {
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  const itemsPerPage = 5;
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const count = Math.ceil(attendees?.length / itemsPerPage);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        {attendees?.length} Members
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{ position: "absolute", top: "15px", right: "25px" }}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Users :
          </Typography>
          <ul className="mb-3">
            {attendees
              ?.slice(indexOfFirstItem, indexOfLastItem)
              .map((attnd) => (
                <li key={attnd.id}>{attnd.name}</li>
              ))}
          </ul>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Pagination
              count={count}
              variant="outlined"
              color="primary"
              page={page}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
