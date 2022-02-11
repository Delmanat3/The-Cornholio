import React from "react";
import { Typography,TextField,Button } from "@mui/material";
import { Box } from "@mui/system";

export function Copyright() {


  const handleMail=(e)=>{
    e.preventDefault();
    const x=document.getElementById("subject").value
    const y=document.getElementById("content").value
    console.log(x)
    document.location.href = "mailto:delman.nathan832@gmail.com?subject="
    + encodeURIComponent(x)
    + "&body=" + encodeURIComponent(y);
  
  }




    return (
      <div 
     style={{ backgroundColor:"beige"}}
      id="copyright">
      <Typography 
    
      variant="body2" color="text.secondary" align="center" >
        {'Contact Me: '}
       
        {'.'}
      </Typography>
      <Box 
      style={{display:"flex",justifyContent:"center"}}
      noValidate
      required
      component="form" 
      onSubmit={handleMail}
      >

      <TextField
      id="subject"
      placeholder="subject"
      noValidate
      required
      >
      </TextField>
      <TextField
      id="content"
      noValidate
      sx={{width:"500px"}}
      required
      placeholder="content"
      >

      </TextField>
      <Button type="submit" >Send</Button>
      </Box>
      </div>
    );
  }