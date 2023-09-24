import { adminFirestore } from "../config/firebase-admin-config";
import Game from "../components/Game";
async function getGame() {
    const gameDoc = await adminFirestore.collection('puzzles').doc('112423').get()
    console.log(gameDoc.data())
    return gameDoc.data()

}

export default async function TodaysGame(){
    const { initialnodes, initialedges, colorlist, par, optimum } = await getGame()

    return (
        <Game initialNodes={initialnodes} initialEdges={initialedges} colorlist={colorlist} par={par} optimum={optimum} />
    )

}