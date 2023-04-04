import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const DonationForm =() =>{
  const [Category, setCategory] = React.useState('');

 
const history = useHistory();

  const homepage = async(e) => {
    history.push("/");
  }

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
 
  return (
  <div style={myStyle} > 

<Card style={{height:"40px",width:"700px",backgroundColor:"#ffffff",marginTop:"100px",marginLeft:"400px",opacity:"0.5",fontSize:"28px"}} >Donation Details</Card>
   

   <div style={{height:"450px",width:"700px",backgroundColor:"#ffffff",marginTop:"30px",marginLeft:"400px",opacity:"0.5",borderRadius:"2%"}}>
   <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '22ch',height: '2ch' }
      }}
    >
    
      <TextField sx={{marginTop:"15px",marginLeft:"50px"}} label={'Name of Donator'} id="margin-none" marginTop=""/>
      
      <TextField sx={{marginTop:"10px",marginLeft:"50px"}} label={'Name of Plant'} id="margin-dense" margin="dense" />
      
      
      <FormControl sx={{width:"594px",marginTop:"10px",marginLeft:"50px"}} >
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Category}
          label="Age"
          onChange={(e)=>setCategory((e.target.value))}
        >
          <MenuItem value={10}>Native</MenuItem>
          <MenuItem value={20}>Outdoor</MenuItem>
          <MenuItem value={30}>Indoor</MenuItem>
          <MenuItem value={40}>Flower</MenuItem>
        </Select>
      </FormControl>
  
      <TextField sx={{marginTop:"10px",marginLeft:"50px"}} label={'Quantity'} id="margin-normal" margin="normal" />

      <TextField sx={{marginTop:"10px",marginLeft:"50px"}} label={'Address'} id="margin-normal" margin="normal" />

      <TextField sx={{marginTop:"10px",marginLeft:"50px"}} label={'Contact Number'} id="margin-normal" margin="normal" />
      
      
      
    </Box>
    

   
   </div>
   <Button variant="success" style={{width:"300px",marginRight:"20px",backgroundColor:"#98F516",fontSize:"30px",opacity:"0.7"}}onClick={homepage} >Submit
    </Button>
    
   
      

    
    </div>


    


  )
}

export default DonationForm