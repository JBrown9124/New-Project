import React, { useEffect, useState } from 'react';
import Typography from "@mui/material/Typography";



import WelcomeTransition from "../animators/WelcomeTransition"

export default function FeelSafe(props: any) {

  const [introText, setIntroText] = useState(["Welcome", "Please find a safe location"])
const [open, set] = useState(true)
 



  return (
    <>
    
    <WelcomeTransition/>
    
    {/* <Experiment  open={open}>
      
  
          <Typography  variant="h1" >

            Welcome


          </Typography>
      
    
          <Typography   variant="h1" >

            Please find a safe location


          </Typography>
        
        
          </Experiment> */}
   

    </>
  )
}