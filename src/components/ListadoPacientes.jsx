import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    return (
        
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {/* Comprobamos si hay pacientes y si no hay modificamos el texto  */}
            {pacientes && pacientes.length ? (

                <>
                    <h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>
                    <p className='text-lg mt-3 mb-4 text-center'>Administra tus {''}
                        <span className='text-cyan-400 font-bold '>Pacientes y Citas</span>
                    </p>
                    {/* TODO scroll only in patietns */}

                    { pacientes.map( paciente => (
                        <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        setPaciente= {setPaciente}
                        eliminarPaciente = {eliminarPaciente} />
                    ))}
                </>
            ) :  (
                <>
                    <h2 className='font-black text-2xl text-center'>No hay pacientes</h2>
                    <p className='text-lg mt-3 mb-4 text-center'>Agrega  {''}
                        <span className='text-cyan-400 font-bold '>nuevos pacientes</span>
                    </p>
                
                </>
            )}
    
        </div>
    )
}

export default ListadoPacientes
