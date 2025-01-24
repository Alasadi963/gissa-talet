"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
/*export default function register() {
    const [count, setcount] = useState(0)
    return (
        <div>
            <h1 className='rubrik'>register times {count} </h1>
            <button className='bg-white text-black' onClick={() => setcount(count + 1)}>increase </button>
            <Image src={"/download.jpg"} width={500} height={500} alt='' />
            <br />
            <h2>gissa talet</h2>
            <input type="number" />
        </div>
    )
}*/
export default function Home() {
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [numberToGuess, setNumberToGuess] = useState(generateRandomNumber());
    const [guessCount, setGuessCount] = useState(0);

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1; // Slumpa ett tal mellan 1 och 100
    }

    const handleGuess = () => {
        const numericGuess = parseInt(guess, 10);
        setGuessCount(guessCount + 1);

        if (numericGuess === numberToGuess) {
            setMessage(`Rätt! Du gissade rätt på ${guessCount + 1} försök.`);
        } else if (numericGuess < numberToGuess) {
            setMessage("För lågt! Försök igen.");
        } else {
            setMessage("För högt! Försök igen.");
        }
    };

    const handleReset = () => {
        setNumberToGuess(generateRandomNumber());
        setGuess("");
        setMessage("");
        setGuessCount(0);
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Gissa Talet</h1>
            <p>Jag tänker på ett nummer mellan 1 och 100. Kan du gissa det?</p>

            <input
                type="number"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Skriv ditt gissning"
            />
            <button onClick={handleGuess}>Gissa</button>

            <p>{message}</p>

            <button onClick={handleReset}>Starta Om</button>

            <p>Antal gissningar: {guessCount}</p>
        </div>
    );
}