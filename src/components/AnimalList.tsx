
import { useEffect, useState } from 'react';
import { fetchAnimals } from "./../services/animalService"
import { Animal } from '../models/Animal';
import { AnimalItem } from './AnimalItem';


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
        <div id="animals-section">
            <ul className='animal-list'>
                {animals.map(animal => (
                    <AnimalItem key={animal.id} animal={animal} />
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;
