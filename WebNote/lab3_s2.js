import React, { useState } from "react";
// import our data from the Javascript file.
// JSON object representing Spotify streams to August 2023
import { flightData } from "./airlines";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    function onSearchFormChange(event) {
        setSearchTerm(event.target.value);
    }

    return (
        <>
            <h1>CS385 Flight Tracker Search</h1>
            <p>Your current search term is [{searchTerm}]</p>
            <form>
                <h3>Type your flight search here: </h3>
                <input onChange={onSearchFormChange} type="text" />
            </form>
            <ResultsComponent
                searchTermFromParent={searchTerm}
                flightArrayFromParent={flightData}
            />
        </>
    );
}

function ResultsComponent(props) {
    function flightFilterFunction(searchTerm) {
        return function (flightObject) {
            // convert everything to lower case for string matching
            let flight = flightObject.flight.toLowerCase();
            let dest = flightObject.dest.toLowerCase();
            let dept = flightObject.dept.toLowerCase();
            return (
                searchTerm !== "" &&
                (dept.includes(searchTerm.toLowerCase()) ||
                    flight.includes(searchTerm.toLowerCase()) ||
                    dest.includes(searchTerm.toLowerCase()))
            );
        };
    }
    // We can use the filter function to tell us how many search results
    // we have. We find the length of the filtered array

    let numberFlights = props.flightArrayFromParent.filter(
        flightFilterFunction(props.searchTermFromParent)
    ).length;

    return (
        <>
            <h1>Search Results</h1>
            <h1>Flights: {numberFlights}</h1>
            {numberFlights === 0 && <p>No flight information available</p>}
            {numberFlights === 1 && <p>One flight available</p>}
            {numberFlights >= 2 && numberFlights <= 20 && (
                <p>Several flights available</p>
            )}
            {numberFlights > 20 && (
                <p>
                    A large number of search results – please consider narrowing your
                    search
                </p>
            )}

            {props.flightArrayFromParent
                .filter(flightFilterFunction(props.searchTermFromParent))
                .map((a, index) => (
                    <p key={index}>
                        <b>{a.flight}</b>, Depature <i>{a.dept}</i> Destination:{" "}
                        <i>{a.dest}</i>, Status: {a.status}
                    </p>
                ))}
        </>
    );
} // end of child component for results.
export default App;

