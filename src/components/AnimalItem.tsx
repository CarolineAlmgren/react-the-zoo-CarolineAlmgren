import { useNavigate } from "react-router-dom";
import { Animal } from "../models/Animal";

interface AnimalItemProps {
    animal: Animal;
  }

  export const AnimalItem = ({animal}:AnimalItemProps)=> {
  const navigate = useNavigate();

   const handleAnimalClick = () => {
    navigate(`/animal/${animal.id}`)
   }
   return (
    <li className="animal-item">
        <p>{animal.name}</p>
        <img 
            className="animal-image" 
            src={animal.imageUrl} 
            alt={animal.name} 
        />
        <p>{animal.shortDescription}</p>
        <button onClick={handleAnimalClick}>Mer info</button>
    </li>
);
};