import {
    Box,
    Typography,
  } from "@mui/material";
import moment from "moment";
const LearnMore = ({item}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    return (
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.capsule_serial}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Launch at: {moment(item.original_launch).format('YYYY-MM-DD')}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Missions : {item.missions.map((e) => {
            return (
                <Typography id="modal-modal-description">
                    Name: {e.name}
          </Typography>
            )
           })}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Description: {item.details}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Type: {item.type}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Landings: {item.landings}
          </Typography>
        </Box>
    )
  };
  
  export default LearnMore;