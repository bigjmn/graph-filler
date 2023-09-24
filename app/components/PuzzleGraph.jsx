import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { getEdges } from '../utils/helpers'

export default function PuzzleGraph({initialNodeList, initialEdges, spinnerColor, setSpinCount}) {
    const [graphNodes, setGraphNodes] = useState(initialNodeList)
    const [allEdges, setAllEdges] = useState([])
    useEffect(() => {
        setAllEdges(getEdges(initialNodeList, initialEdges))

    }, [initialNodeList, initialEdges])

    // clicking a node makes it that color, and clears neighbors with that color 
    const handleClick = (nodeId) => {
        setGraphNodes(oldNodes => (
            oldNodes.map(node =>  {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        color: spinnerColor
                    }
                }
                if (initialEdges.includes([node.id, nodeId].sort().join('')) && node.color === spinnerColor) {
                    return {
                        ...node,
                        color: "white"
                    }
                }
                return node 

            }))

        )
        setSpinCount(x => x+1)
    }

    return (
        <svg style={{width: 500, height: 500}} viewBox="0 0 500 500">
            ...{allEdges}
            {graphNodes.map((gn) => (
                <GraphNode 
                corX={gn.corX}
                corY={gn.corY}
                color={gn.color}
                id={gn.id}
                key={gn.id}
                
                handleClick={handleClick}
                />
            ))}
        </svg>

    )
}

function GraphNode({corX, corY, color, id, handleClick}){
    const nodeClick = () => {
        // only allow change to empty node
        if (color === 'white') {
            handleClick(id)
        }
    }

    return (
        <motion.circle 
        cx={50+100*corX} 
        cy={50+100*corY}
        style={{stroke: 'black', strokeWidth: 3}} 
        animate={{fill: color}} 
        r={20} 
        id={id}
        onClick={nodeClick}
        key={id}
        />
    )

}