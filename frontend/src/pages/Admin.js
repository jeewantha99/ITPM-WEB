import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Swal from 'sweetalert2';
import axios from 'axios';
import Select from '@mui/material/Select';
import Grid from "@mui/material/Grid";

import {
    UserButton,
    useUser,
  } from "@clerk/clerk-react";
  import FilledInput from '@mui/material/FilledInput';
  import InputAdornment from '@mui/material/InputAdornment';  
  import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';


const columns = [
  { id: 'name', label: 'Name', minWidth: 70 },
  { id: 'Category', label: 'Category', minWidth: 70},
  
  
  {
    id: 'Status',
    label: 'Status',
    minWidth: 70,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];

const forms=[
  {
    name:"jagath chamila",
    catagory:"Native",
    status:"Pending"
  }
]

function Admin() {
    const {user} = useUser();

    const myStyle={
        backgroundImage: 
 "url('https://res.cloudinary.com/dgmrua3dm/image/upload/v1678868749/home_slide_4_eqk2vx.webp')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: "flow-root"
        
    };

    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <div style={myStyle} > 
      <div style={{marginLeft:"1400px"}}>
      {user? <UserButton/> : <h3>Login</h3>}
      </div>
         
      <FormControl width sx={{ m: 10,backgroundColor:"#ffffff",marginTop:"100px",marginLeft:"px",opacity:"0.5",width:"1000px"}} variant="filled"  >
          <InputLabel htmlFor="filled-adornment-Search">Search</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            endAdornment={<InputAdornment position="end"><SearchIcon/></InputAdornment>}
          />
        </FormControl>
        
   <Container>

       
   <h4>My Purchases</h4>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
               
                <TableBody>
                  {forms.map((form)=>(
                    <Grid>
                      <Grid item>
                      <h5>{form.name}</h5>
                    <h5>{form.catagory}</h5>
                    <h5>{form.status}</h5>
                      </Grid>
                    
                  </Grid>
                  ))}
                  
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={forms.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
    </Container>
    
   
      

    
  
      
          
  </div>
          
        )
}

export default Admin