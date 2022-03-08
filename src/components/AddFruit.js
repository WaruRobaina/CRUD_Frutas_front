import React, { useContext, useState } from 'react'
import FruitContext from '../contexts/FruitContext'

const AddFruit = () => {

    const {createFruit} = useContext(FruitContext);
    const initialFruitState = {
        id:null,
        name:'',
        size:'Pequeño',
        color:''
    };

    const [fruitData, setFruitData] = useState(initialFruitState);

    const updateField = (data, field) => {
        setFruitData({
            ...fruitData,
            [field]:data,
        });
    }

    const store = async (e) => {
        e.preventDefault();
        await createFruit(fruitData);
        setFruitData(initialFruitState);
        window.location='/';
    }


  return (
    <div>
        <h3 className='text-center py-3'>Añadir fruta</h3>
        <form onSubmit={store} className='px-4 py-2'>
            <div className='mb-3'>
                <label className='form-label'>Nombre: </label>
                <input
                    required
                    value={fruitData.name}
                    onChange={(e) => updateField(e.target.value, "name")} 
                    type="text"  
                    className='form-control'          
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Tamaño: </label>
                <select onChange={(e) => updateField(e.target.value, "size")} className='form-control'>
                    <option value='Pequeño'>Pequeño</option>
                    <option value='Mediano'>Mediano</option>
                    <option value='Grande'>Grande</option>
                </select>         
            </div>
            <div className='mb-3'>
                <label className='form-label'>Color: </label>
                <input
                    value={fruitData.color}
                    onChange={(e) => updateField(e.target.value, "color")} 
                    type="text"  
                    className='form-control'          
                />
            </div>
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </form>
    </div>
  )
}

export default AddFruit