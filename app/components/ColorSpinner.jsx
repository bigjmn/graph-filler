import { motion } from "framer-motion"
export default function ColorSpinner({colorlist, spincount}) {

    return (
        <motion.svg 
        animate={{rotate: spincount*(360/colorlist.length)}} 
        style={{width: '40%', height: '40%', maxWidth: 300}} 
        viewBox="0 0 200 200">
            {colorlist.map((c, i) => {
                const centerX = 100+50*Math.cos(3*Math.PI/2+2*Math.PI*i/colorlist.length)
                const centerY = 100-50*Math.sin(3*Math.PI/2+2*Math.PI*i/colorlist.length)
                return (
                    <>
                    <line x1={100} y1={100} x2={centerX} y2={centerY} style={{stroke: 'gray', strokeWidth: 4}} />
                    <motion.circle animate={{scale: spincount % colorlist.length === i ? 2 : 1}} cx={centerX} cy={centerY} stroke="black" fill={c} r={10} key={i} />


                    </>
                )
            })}
            
        </motion.svg>
    )
}