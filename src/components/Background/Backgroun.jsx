import homebackgroundVideo from '../../assets/homeBackground.mp4'
export const HomeBackground=()=>{
    return(
        <>
        <div>
            <video src={homebackgroundVideo} autoPlay muted loop ></video>
        </div>
        
        </>
    )
}