import GetBreweries from "./GetBreweries";
import Map from "./Map";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Just a map. Need to add the beer
                </p>
            </header>
            <Map/>
            <GetBreweries/>
        </div>
    )
}

export default App;