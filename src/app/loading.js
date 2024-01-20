import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default loading;
