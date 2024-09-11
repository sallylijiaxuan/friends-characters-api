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
            const data = await fetch('https://sallylijiaxuan.github.io/friends-characters-api/db.json');

            const { characters } = await data.json();

            setCharacters(characters);
            setLoading(false);
        }

        fetchData();
    }, [characters.length]);

    return (
        <PageWrapper>
            {loading ? (
                <div>Loading...</div>
            ) : (
                characters.map((characters) => (
                    <Character
                        key={characters.id}
                        firstName={characters.first_name}
                        lastName={characters.last_name}
                        gender={characters.gender}
                        occupation={characters.occupation}
                        father={characters.father}
                        mother={characters.mother}
                        portrayedBy={characters.portrayed_by}
                    />
                ))
            )}
        </PageWrapper>
    );
}