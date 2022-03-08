import React, { createContext, useEffect, useState } from 'react'
import { FruitService } from '../services/FruitService'

const FruitContext = createContext();

const FruitContextProvider = ({children}) => {
     
    const fruitService = new FruitService();

    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fruitService.readAll().then((data) => {
            setFruits(data);
        });       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const createFruit = async (fruit) =>{
        return new Promise ((resolve, reject) => {
            fruitService.create(fruit).then((data)=> {
                setFruits([...fruits, data]);
                resolve();
            })           
        })        
    };

    const deleteFruit = (id) =>{
        fruitService.delete(id).then(() => setFruits(fruits.filter(f => f.id !== id)));
    };

    const data = {createFruit, deleteFruit, fruits}

    return (
        <FruitContext.Provider value={data}>
            {children}
        </FruitContext.Provider>
    );
}

export {FruitContextProvider}
export default FruitContext