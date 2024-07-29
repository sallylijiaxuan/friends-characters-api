import { useState, useEffect } from "react";
import Character from "./Character.jsx";
import styled from "styled-components";

const PageWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 80vw;
    margin: auto;
`;

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const data = await fetch('https://sallylijiaxuan.github.io/mp4/db.json');

            const { drinks } = await data.json();

            setCharacters(drinks);
            setLoading(false);
        }

        fetchData();
    }, [characters.length]);

    return (
        <PageWrapper>
            {loading ? (
                <div>Loading...</div>
            ) : (
                characters.map((character) => (
                    <Character
                        key={character.idDrink}
                        name={character.strDrink}
                        instruction={character.strInstructions}
                        glass={character.strGlass}
                    />
                ))
            )}
        </PageWrapper>
    );
}