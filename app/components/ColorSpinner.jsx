import { motion } from "framer-motion"
export default function ColorSpinner({colorlist, spincount}) {

    return (
        <motion.svg 
        animate={{rotate: spincount*(360/colorlist.length)}} 
        style={{width: '25%', height: '25%', rotate: 90}} 
        viewBox="0 0 200 200">
            {colorlist.map((c, i) => {
                const centerX = 100+75*Math.cos(3*Math.PI/2+2*Math.PI*i/colorlist.length)
                const centerY = 100-75*Math.sin(3*Math.PI/2+2*Math.PI*i/colorlist.length)
                return (
                    <>
                    <line x1={100} y1={100} x2={centerX} y2={centerY} style={{stroke: 'gray', strokeWidth: 4}} />
                    <motion.circle animate={{scale: spincount % colorlist.length === i ? 1.5 : .8}} cx={centerX} cy={centerY} fill={c} r={15} key={i} />


                    </>
                )
            })}
            
        </motion.svg>
    )
}