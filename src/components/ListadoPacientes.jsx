import React from 'react'
import Paciente from './Paciente'


const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>
            <p className='text-lg mt-3 mb-4 text-center'>Administra tus {''}
                <span className='text-cyan-400 font-bold '>Pacientes y Citas</span>
            </p>
            {/* TODO scroll only in patietns */}
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
            <Paciente />
        </div>
    )
}

export default ListadoPacientes
