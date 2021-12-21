import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar a este paciente?')

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className='mx-5 my-4 bg-white shadow-md px-5 py-10 rounded'>
            <p className='font-bold mb-3 text-gray-800'>Nombre: {""}
                <span className='font-normal'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-800'>Propietario: {""}
                <span className='font-normal'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-800'>Email: {""}
                <span className='font-normal'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-800'>Fechad de alta: {""}
                <span className='font-normal'>{fecha}</span>
            </p>
            <p className='font-bold mb-3 text-gray-800'>Síntomas: {""}
                <span className='font-normal'>{sintomas}</span>
            </p>

            <div className='flex justify-between mt-10'>
                <button
                type="button"
                className='py-2 px-10 bg-cyan-500 hover:bg-cyan-400 text-white font-bold uppercase rounded'
                onClick={() => setPaciente(paciente)}> {/*Arrow function para que no se llene directamente, solo en el onclick. Callback*/ }
                    Editar
                </button>
                <button
                type="button"
                className='py-2 px-10 bg-red-600 hover:bg-red-500 text-white font-bold uppercase rounded'
                onClick={handleEliminar}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente
