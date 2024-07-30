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

            const { character } = await data.json();

            setCharacters(character);
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
                        key={character.id}
                        first name={character.first_name}
                        last_name={character.last_name}
                        gender={character.gender}
                        occupation={character.occupation}
                        father={character.father}
                        mother={character.mother}
                        protrayed_by={character.portrayed_by}
                    />
                ))
                )}
        </PageWrapper>
    );
}