'use client'
import { useState } from 'react'
import ColorSpinner from "./ColorSpinner"
import PuzzleGraph from "./PuzzleGraph"

export default function Game({initialNodes, initialEdges, optimum, par, colorlist}) {
    const [spinCount, setSpinCount] = useState(0)
    const [gameOver, setGameOver] = useState(false)

    return (
        <div className='flex flex-col items-center'>
            <ColorSpinner colorlist={colorlist} spincount={spinCount} />
            <PuzzleGraph initialNodeList={initialNodes} initialEdges={initialEdges} spinnerColor={colorlist[spinCount % colorlist.length]} setSpinCount={setSpinCount} />
        </div>
    )


}