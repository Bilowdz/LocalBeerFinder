import React, {useState, useEffect} from 'react';

function GetBreweries() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.openbrewerydb.org/v1/breweries?by_dist=51.505, -0.09&per_page=3')
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    )
}

export default GetBreweries;