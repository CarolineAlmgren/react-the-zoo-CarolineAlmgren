import axios from "axios";
import { Animal } from "../models/Animal";

const API_URL = "https://animals.azurewebsites.net/api/animals";

export const fetchAnimals = async ():Promise<Animal[]> => {
    const response = await axios.get<Animal[]>(API_URL);
    console.log(response.data)
    return response.data;
}

