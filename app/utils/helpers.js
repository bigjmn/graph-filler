
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

export { corToPos, getEdges}