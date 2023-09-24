
export default function IntroModal({closeIntro}){

    return (
        <div className="absolute left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white bg-opacity-80">
            <div className="card w-1/2 border mx-auto flex flex-col items-center text-center">
                <h2>ColorFill</h2>
                <p>Fill up the graph in as few moves as possible. Coloring a node resets neighboring nodes of the same color. You'll get it.

                </p>
                <button onClick={closeIntro} className="btn-primary">Got it</button>
            </div>

        </div>
    )
}