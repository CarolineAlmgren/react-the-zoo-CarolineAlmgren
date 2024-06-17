import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAnimals } from '../services/animalService';
import { Animal } from '../models/Animal';

const AnimalDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [animal, setAnimal] = useState<Animal | undefined>();

    useEffect(() => {
        const loadAnimal = async () => {
            try {
                const animalsData = await fetchAnimals();
                const selectedAnimal = animalsData.find(a => a.id === parseInt(id!, 10));

                if(selectedAnimal){
                    const saveFeedStatus = localStorage.getItem(`animal-${id}-feed-status`);
                    if(saveFeedStatus) {
                        const {isFed,lastFed } = JSON.parse(saveFeedStatus)
                        selectedAnimal.isFed = isFed;
                        selectedAnimal.lastFed = new Date(lastFed);
                    }
                }
                setAnimal(selectedAnimal);

            } catch (error) {
                console.error('Error loading animal:', error);
            }
        };

        loadAnimal();
    }, [id]);

    if (!animal) {
        return <p>Laddar...</p>;
    }

    const handleFeedAnimal = (id: number) => {
        const updatedAnimal = { ...animal, isFed: true, lastFed: new Date() };
            setAnimal(updatedAnimal)

            localStorage.setItem(`animal-${id}-feed-status`,JSON.stringify({
               isfed:updatedAnimal.isFed,
               lastFed:updatedAnimal.lastFed
            }))
    };

    return (
        <div id='animalDetail-section'>

            <div id='animalDetail-box'>
            <p>{animal.name}</p>
            <img className='animal-image' src={animal.imageUrl} alt={animal.name} />
            <p>{animal.longDescription}</p>
            <button
                onClick={() => handleFeedAnimal(animal.id)}
                disabled={animal.isFed}
            >
                {animal.isFed ? 'Matad' : 'Ge mat'}
            </button>
            
                <p>Senast matad: {animal.lastFed?.toLocaleString()}</p>
            
        </div></div>
    );
};

export default AnimalDetail;