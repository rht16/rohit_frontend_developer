import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Modal,
} from "@mui/material";
import LearnMore from "./LearnMore";
const SpaceCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        paddingLeft: "20px",
        width: "85%",
        height: "200px",
        marginBottom: "20px",
        backgroundColor: 'rgb(224, 247, 250)',
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {item.capsule_serial}
          </Typography>
          <Box sx={{mt:"10px"}}>
            <Typography variant="subtitle2">{item.status}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex",mt:"10px" }}>
          <Typography variant="subtitle2">{item.type}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
          }}
        >
          <Button sx={{mt:"10px"}} variant="contained" onClick={handleOpen}>
            Learn More
          </Button>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <LearnMore item={item} />
        </Modal>
      </CardContent>
    </Card>
  );
};

export default SpaceCard;