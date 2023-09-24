
// get svg position based on coordinate
const corToPos = (cor) => 50+cor*100

// create svg lines based on edges 
const getEdges = (nodelist, edgelist) => {
    const edges = []
    edgelist.forEach(ed => {
        const firstnode = nodelist.find(n => n.id === ed[0])
        const secondnode = nodelist.find(n => n.id === ed[1])
        const x1 = corToPos(firstnode.corX),
                y1 = corToPos(firstnode.corY),
                x2 = corToPos(secondnode.corX),
                y2 = corToPos(secondnode.corY)
        const newline = <line key={ed} x1={x1} y1={y1} x2={x2} y2={y2} style={{stroke: '#999', strokeWidth: 20}} />
        edges.push(newline)

    })
    return edges 
}

const makeHeadline = (finalscore, par) => {
    const scoreDiff = finalscore - par 
    if (scoreDiff < -3) return "I'm sorry, what?"
    if (scoreDiff === -3) return "Double Eagle!"
    if (scoreDiff === -2) return "Eagle!"
    if (scoreDiff === -1) return "Birdie!"
    if (scoreDiff === 0) return "Par!"
    if (scoreDiff === 1) return "Bogey!"
    if (scoreDiff === 2) return "Double Bogey!"
    if (scoreDiff === 3) return "Triple Bogy!"
    if (scoreDiff > 3) return "Oof."
    return "Huh..."

}

const makeMessage = (finalscore, par, optimum) => {
    if (finalscore < optimum) {
        return {message: "Better than I thought was possible! Or maybe there's a bug in the game.", giveRetry: false}
    }
    if (finalscore === optimum) {
        return {message: "That's the optimal score!", giveRetry: false}
    }
    if (finalscore < par) {
        return {message: `Great job! This puzzle can actually be solved in ${optimum} moves.`, giveRetry: true}
    }
    if (finalscore === par || finalscore === par+1){
        return {message: `Not bad! This puzzle can actually be solved in ${optimum} moves.`, giveRetry: true}
    }
    return {message: `Not great... This puzzle can actually be solved in ${optimum} moves.`, giveRetry: true}

}

export { corToPos, getEdges, makeMessage, makeHeadline}