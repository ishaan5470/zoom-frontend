import { Box, Typography } from "@mui/material";

const Attachment = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box>
        <Typography>Attachment</Typography>
        <Typography variant="body2">Source File</Typography>
      </Box>

      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box
          sx={{
            height: "40px",
            width: "40px",
            borderRadius: "5px",
            backgroundColor: "#5D7D87",
          }}
        ></Box>
        <Box>
          <Typography variant="body2">Competition Analysis</Typography>
          <Typography variant="caption">Statement</Typography>
        </Box>
      </Box>

      <Typography align="center" style={{ textDecoration: "underline" }}>
        View All
      </Typography>
    </Box>
  );
};

export default Attachment;
