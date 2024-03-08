import {useLocation} from "react-router-dom";

const HomePage=()=>{
    const location = useLocation()
    console.log(location)
    return(
        <>

        Welcome {location.state.somnath}
        </>
    )
}
export default HomePage;