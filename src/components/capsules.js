import React, { useState, useEffect } from "react";
import "./capsules.css";
import SpaceXService from "../service/spaceservice";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SpaceCard from './SpaceCard'
export default function Capsules() {
  const [type, setType] = useState([]);
  const [status, setStatus] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [page, setPage] = React.useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState();
  const [selectedType, setSelectedType] = useState();
  const [selectedDate, setSelectedDate] = useState();

  const statusHandleChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const typeHandleChange = (event) => {
    setSelectedType(event.target.value);
  };
  const handleChange = (event, value) => {
    console.log('setting')
    setCurrentPage(value);
    setPage(value !== 1 ? (value - 1) * 9 : 3);
  };

  const filterCapsules = async () => {
    console.log('runnig')
    try {
      const payload = {
        selectedStatus,
        selectedType,
        skip: page - 1,
        selectedDate,
      };
      const { data } = await SpaceXService.filterCapsules(payload);
      setPagesCount(data.length / 9 === 0 ? data.length : Math.floor(data.length / 9)+1);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    (selectedStatus ||
      selectedType ) &&
      filterCapsules();
  }, [selectedStatus, selectedType]);

  const fetchCapsules = async () => {
    try {
      const { data } = await SpaceXService.getAllCapsules({ skip: page });
      console.log(data);
      setCapsules(data);
    //   setPagesCount(data.length / 10 === 0 ? data.length : Math.floor(data.length / 10)+1);
      let tempType = [];
      let tempStatus = [];
      data.map((e) => {
        tempType.push(e.type);
        tempStatus.push(e.status);
      });
      tempType = tempType.filter((v, i, a) => a.indexOf(v) === i);
      tempStatus = tempStatus.filter((v, i, a) => a.indexOf(v) === i);
      setType(tempType);
      setStatus(tempStatus);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPagesCapsules = async () => {
    try {
        const payload = {
            selectedStatus,
            selectedDate,
            selectedType,
            skip: page,
        }

      const { data } = await SpaceXService.getNextCapsules(payload);
      
      console.log(data);
      setCapsules(data)
      
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    page !== 0 && nextPagesCapsules();
  }, [page]);

  const fetchPagesCount = async (req, res) => {
    const { data } = await SpaceXService.getPagesCount();
    setPagesCount(data.count);
  };
  useEffect(() => {
   !pagesCount && fetchPagesCount();
    fetchCapsules();
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <>
      <div className="capsulesSearch">
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedStatus}
            onChange={statusHandleChange}
            autoWidth
            label="Select a status"
          >
            {status.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={selectedStatus}
            onChange={typeHandleChange}
            autoWidth
            label="Select a type"
          >
            {type.map((e) => {
              return <MenuItem value={e}>{e}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          disableFuture
          label="By Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={selectedDate}
          onChange={(newValue) => {
            setSelectedDate(newValue);
          }}
          onAccept={() => filterCapsules()}
          renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
      </div>
      {/* {capsules.map((e) => {
        return ( */}
            <>
            <Box sx={{paddingTop: '100px'}}>
            <Grid>
            <Grid container spacing={4}>
              {capsules.map((item) => (
                <Grid xs={12} sm={6} md={4} >
                  <SpaceCard item={item}/>
                </Grid>
              ))}
              <Grid
                xs={12}
                sm={6}
                md={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              ></Grid>
            </Grid>
          </Grid>
          </Box>
          </>
          
      <div
        style={{
          alignItems: "center",
          justifyItems: "center",
          marginLeft: "45%",
          position: "fixed",
          bottom: "0",
        }}
      >
        <Pagination
          count={pagesCount}
          color="secondary"
          onChange={handleChange}
          page={currentPage}
          size={"large"}
        />
      </div>
    </>
  );
}
