import React, { useState, useEffect } from 'react'
import { FruitService } from '../services/FruitService'
import { useParams } from 'react-router-dom';

const EditFruit = () => {

    const fruitService = new FruitService();
    const {id} = useParams();

    const [name, setName] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    useEffect(() => {
        const getFruitById = async () => {
            const response = await fruitService.getFruit(id);
            setName(response.name);
            setSize(response.size);
            setColor(response.color);
        }
        getFruitById()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const update = async (e) => {
        e.preventDefault();
        await fruitService.update(id,name,size,color);
        window.location='/';
    }

    return (
        <div>
        <h3 className='text-center py-3'>Editar fruta</h3>
        <form onSubmit={update} className='px-4 py-2'>
            <div className='mb-3'>
                <label className='form-label'>Nombre: </label>
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    type="text"  
                    className='form-control'          
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Tamaño: </label>
                <select onChange={(e) => setSize(e.target.value)} className='form-control'>
                    <option value='Pequeño'>Pequeño</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Grande'>Grande</option>
                </select>         
            </div>
            <div className='mb-3'>
                <label className='form-label'>Color: </label>
                <input
                    value={color}
                    onChange={(e) => setColor(e.target.value)} 
                    type="text"  
                    className='form-control'          
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
    )

}

export default EditFruit