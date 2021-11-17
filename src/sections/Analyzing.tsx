import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ReactNode,
} from "react";
import { useTransition, animated, config } from "react-spring";
import Typography from "@mui/material/Typography";
import { ResultsProps } from "../models/Results";
import Container from "react-bootstrap/Container";

export default function Analyzing() {
  const [index, setIndex] = useState(0);
  const slides = [".", ".", "."];

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },

    
  });

  useEffect(() => {
    if (index >= slides.length - 1) {
      const t = setInterval(() => {
        setIndex(0);
      }, 1000);
      return () => {
        clearInterval(t);
    }}
else{
    const t = setInterval(() => {
        setIndex(state=>state+1);
      }, 500);
      return () => {
        clearInterval(t);
    }
}
   
    
  }, [index]);

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "22vw!important",
        }}
      >
        <Typography variant="h1" > Analyzing </Typography>
        
        {transitions((style, item: any) => (
          <animated.div
            style={{
              ...style,
            }}
          >
            <Typography variant="h1" >{slides[index]}</Typography>
          </animated.div>
        ))}
      </div>
    </>
  );
}
