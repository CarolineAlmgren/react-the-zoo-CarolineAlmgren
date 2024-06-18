
import { useEffect, useState } from 'react';
import { fetchAnimals } from "./../services/animalService"
import { Animal } from '../models/Animal';
import { useNavigate } from 'react-router-dom';

const AnimalList = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    const navigate = useNavigate();

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

  
    const handleAnimalClick = (id: number) => {
        navigate(`/animal/${id}`, { state: { animals } });
    };

    return (
        <div id="animals-section">
            <ul className='animal-list'>
                {animals.map(animal => (
                    <li key={animal.id} className="animal-item">
                        <p>{animal.name}</p>
                        <img className="animal-image" src={animal.imageUrl} alt={animal.name} />
                        <p>{animal.shortDescription}</p>
                        <button onClick={() => handleAnimalClick(animal.id)} >Mer info</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnimalList;