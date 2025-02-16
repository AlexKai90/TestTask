import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacter } from './redux/characterSlicer';

const Character = () => {
    const character = useSelector((state) => state.character)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCharacter())
    }, [])
    
    return (
        <div>
            <h2>List of Characters</h2>
            {character.loading && <div> Loading...</div>}
            {!character.loading && character.error ? <div>Error: {character.error} </div> : null}
            {!character.loading && character.characters.length ? (
                <ul>
                {
                    character.characters.map(character => (
                        <li key={character.id}>{character.name}</li>
                    ))
                }
                </ul>
            ) : null}
        </div>
    )
};

export default Character;