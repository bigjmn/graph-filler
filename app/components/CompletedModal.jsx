import { makeHeadline, makeMessage } from "../utils/helpers"
export default function CompletedModal({finalscore, optimum, par, closemodal, resetGame}){
    const headline = makeHeadline(finalscore, par)
    const {message, giveRetry} = makeMessage(finalscore, par, optimum)

    const handleClose = () => {
        closemodal()

    }
    const handleRetry = () => {
        resetGame()
        closemodal()

    }

    return (
        <div className="absolute left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none bg-white bg-opacity-80">
            <div className="card w-1/2 border mx-auto flex flex-col items-center text-center">
                <h2>{headline}</h2>
                <p>{message}</p>
                <div className="flex justify-center">
                    <button onClick={handleClose} className="btn-secondary">Close</button>
                    {giveRetry && <button onClick={handleRetry} className="btn-primary">Try Again</button>}

                </div>
            </div>

        </div>
    )
}