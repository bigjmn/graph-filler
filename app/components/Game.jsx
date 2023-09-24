'use client'
import { useState, useEffect } from 'react'
import ColorSpinner from "./ColorSpinner"
import PuzzleGraph from "./PuzzleGraph"
import CompletedModal from './CompletedModal'
import IntroModal from './IntroModal'
import { getEdges } from '../utils/helpers'

export default function Game({initialNodes, initialEdges, optimum, par, colorlist}) {
    const [spinCount, setSpinCount] = useState(0)
    const [graphNodes, setGraphNodes] = useState(initialNodes)
    const allEdges = getEdges(initialNodes, initialEdges)

    const [gameOver, setGameOver] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const [showIntro, setShowIntro] = useState(true)

    const closeIntro = () => {
        setShowIntro(false)
    }

    useEffect(() => {
        const k = graphNodes.find(x => x.color === 'white')
        if (!k){
            setGameOver(true)
            setShowScore(true)

        }
    }, [graphNodes])
    

    const resetGame = () => {
        setGraphNodes(initialNodes)
        setGameOver(false)
        setSpinCount(0)
    }
    const closemodal = () => {
        setShowScore(false)
    }

    return (
        <div className='relative flex flex-col items-center bg-white'>
            <h1>Puzzle 1</h1>
            <h3><i>par 15</i></h3>
            {showIntro && <IntroModal closeIntro={closeIntro} />}
            {showScore && <CompletedModal finalscore={spinCount} par={par} optimum={optimum} resetGame={resetGame} closemodal={closemodal} />}
            <div className="flex flex-col w-1/4 min-w-fit items-center">
            <ColorSpinner colorlist={colorlist} spincount={spinCount} />
            <PuzzleGraph gameOver={gameOver} allEdges={allEdges} graphNodes={graphNodes} setGraphNodes={setGraphNodes} initialEdges={initialEdges} spinnerColor={colorlist[spinCount % colorlist.length]} setSpinCount={setSpinCount} />
            <p>Moves made: {spinCount}</p>
            <button className='btn-primary mt-2' onClick={resetGame}>reset</button>
            </div>
        </div>
    )


}