import './Background.css'
import homebackgroundVideo from '../../assets/homebackgroud2.mp4'
export const HomeBackground=()=>{
    return(
        <>
        <div className='home-background'>
            <video src={homebackgroundVideo} autoPlay muted loop ></video>
        </div>
        
        </>
    )
}