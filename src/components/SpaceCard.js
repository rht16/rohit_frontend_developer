import React, {useState} from 'react'
import {
    Box,
    Typography,
    Button,
    Card,
    CardContent,
    CardMedia,
    Modal,
  } from "@mui/material";
import LearnMore from './LearnMore';
const SpaceCard = ({item}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card data-testid="team-card">
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography  gutterBottom variant="h6" component="div">
            {item.capsule_serial}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle2">{item.status}</Typography>
          </Box>
          
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="subtitle2">{item.type}</Typography>
          </Box>
        <Box
          sx={{
            display: "flex",
            direction: "row",
            justifyContent: "space-between",
            mt: 1,
          }}
        >
          <Button variant="contained" onClick={handleOpen}>Learn More</Button>
        </Box>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LearnMore item={item}/>
      </Modal>
      </CardContent>
    </Card>
  )
};

export default SpaceCard;