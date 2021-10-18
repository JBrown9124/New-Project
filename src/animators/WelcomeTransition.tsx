import React, { useState, useCallback, useRef, useEffect, ReactNode } from "react";
import { useTransition, animated, config } from "react-spring";
import Typography from "@mui/material/Typography";
import Welcome from "../sections/Welcome"
import ReactDOM from "react-dom";


// function Transition() {
//   const [toggle, set] = useState(true)
//   const [show, setShow] =useState(true)
//   const transitions = useTransition(toggle, {
//     from: { position: 'absolute', opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     reset: toggle,
//     reverse:toggle,
//     delay: 200,
//     config: 	{ mass: 1, tension: 280, friction: 120, },
//     onRest: () => set(false),
//   })
//   useEffect(() => {

//    const t=   setTimeout(() => {
//         set(true)
//       }, 10000)
//     return ()=>{clearTimeout(t)}
//   }, [toggle])

//   return transitions(({ opacity }, item) =>
//     item ? (
//       <animated.div
//         style={{
//           position: 'absolute',
//           opacity: opacity.to({ range: [0.0,.5, 1.0], output: [0,.5 , 1] }),
//         }}>
//        <Typography  variant="h3" >

// Welcome


// </Typography>

//       </animated.div>
//     ) : (
//       <animated.div
//         style={{
//           position: 'absolute',
//           opacity: opacity.to({ range: [0.0,.5, 1.0], output: [1, 0] }),
//         }}>

//         <Typography   variant="h3" >

//         Please go to the safest location available to you before continuing.


// </Typography>
//       </animated.div>
//     )
//   )

// }

// export default Transition;
// export default function App() {
//     const ref = useRef<ReturnType<typeof setTimeout>[]>([])
//     const [items, set] = useState<string[]>(["Welcome"])
//     const transitions = useTransition(items, {
//       from: {
//         opacity: 0,


//       },
//       enter: [
//         { opacity: 1},

//       ],
//       leave: [{ opacity: 0, height: 0 }],
//       update: { color: '#28b4d7' },
//       config: config.molasses
//     })

//     const reset = useCallback(() => {
//       ref.current.forEach(clearTimeout)
//       ref.current = []
//       set([])
//       ref.current.push(setTimeout(() => set(["Welcome",]), 50))
//       ref.current.push(setTimeout(() => set(['Please ', 'Find']), 5000))
//       ref.current.push(setTimeout(() => set(['A', 'Safe', 'Location']), 8000))
//     }, [])

//     useEffect(() => {
//       reset()
//       return () => ref.current.forEach(clearTimeout)
//     }, [])

//     return (
//       <div className={styles.container}>
//         <div className={styles.main}>
//           {transitions(({  ...rest }, item) => (
//             <animated.div className={styles.transitionsItem} style={rest} onClick={reset}>
//               <animated.div >{item}</animated.div>
//             </animated.div>
//           ))}
//         </div>
//       </div>
//     )
//   }


interface Props {
   
    child1:ReactNode,
    child2:ReactNode,
    isClicked:boolean
   }

export default function WelcomeTransition({child1, child2, isClicked=false}:Props) {
    const slides:any = [
        "Welcome", "Please go to the safest location available to you before continuing", child1, child2
    ]
    
    
    const [index, set] = useState(0);
    const [clicked, setClicked] = useState(false);
    const transitions = useTransition(index, {
        key: index,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    
        config: config.molasses,
        trail: 1500,
    })
    // useEffect(() => {
    //     if (index < 2) {
    //         const t = setInterval(() => set(state => (state + 1)), 6000)
    //         return () => clearTimeout(t)
    //     }
    // }, [index])
    useEffect(() => {
        if (index < 2) {
            const t = setInterval(() => set(state => (state + 1)), 6000)
            return () => clearTimeout(t)
        }
      
            
        
    }, [index])
    useEffect(() => {
        if (isClicked){
       
            set(state => (state + 1))
            
            
        }      
    }, [ isClicked])
    
    return (
        <div >
            {transitions((style, i) => (
                <animated.div

                    style={{...style,}}

                >
                    <Typography className="text-container"  variant="h1" >
                        {slides[i]}</Typography>
                </animated.div>

            ))}
        </div>
    )
}
