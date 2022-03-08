import React, { useContext } from 'react'
import FruitContext from '../contexts/FruitContext'

const ShowFruits = () => {

const {fruits, deleteFruit} = useContext(FruitContext)

    const editFruit = (id) =>{
        window.location='/edit/'+id
    }
    

  return (
    <div>
        <div div className='px-4 py-4'>
            <a className='btn btn-success btn-lg mt-2 mb-2' href='/add'>Añadir fruta</a>
        </div>
        <div className='px-4 py-4'>
            <table className='table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Nombre</th>
                        <th>Tamaño</th>
                        <th>Color</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {fruits.map((fruit) => (
                        <tr key={fruit.id}>
                            <td>{fruit.name}</td>
                            <td>{fruit.size}</td>
                            <td>{fruit.color}</td>
                            <td> 
                                <a className='btn btn-warning' onClick={()=> editFruit(fruit.id)}>Editar fruta</a>
                                <button className='btn btn-danger' onClick={()=> deleteFruit(fruit.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowFruits