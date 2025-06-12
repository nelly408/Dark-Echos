//import statements
import {episodeList} from "./data";
import Episode from "./OneEpisode"

function App() {

    return(
    <div>
    {episodeList.map(episodeList=> <p>{episodeList.title}<br></br>{episodeList.description}</p>)}
    </div>

  )
}


export default App