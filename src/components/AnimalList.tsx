
import { useEffect, useState } from 'react';
import { fetchAnimals } from "./../services/animalService"
import { Animal } from '../models/Animal';

const AnimalList = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        const loadAnimals = async () => {
            try {
                const animalsData = await fetchAnimals();
                setAnimals(animalsData);
            } catch (error) {
                console.error('Error loading animals:', error);
              
            }
        };

        loadAnimals();
    }, []);

    return (
        <div>
            <ul>
                {animals.map(animal => (
                    <li key={animal.id}>
                        <h3>{animal.name}</h3>
                        <img src={animal.imageUrl} alt={animal.name} />
                        <button key={animal.isFed ? 'Yes' : 'No'}> Mata </button>
                        {animal.isFed && (
                            <p>Last Fed: {animal.lastFed?.toLocaleString()}</p>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;