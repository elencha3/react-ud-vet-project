import React from 'react'

const Paciente = () => {
    return (
        <div className='mx-5 my-4 bg-white shadow-md px-5 py-10 rounded'>
                <p className='font-bold mb-3 text-gray-800'>Nombre: {""}
                    <span className='font-normal'>Hook</span>
                </p>
                <p className='font-bold mb-3 text-gray-800'>Propietario: {""}
                    <span className='font-normal'>Esther</span>
                </p>
                <p className='font-bold mb-3 text-gray-800'>Email: {""}
                    <span className='font-normal'>correo@correo.com</span>
                </p>
                <p className='font-bold mb-3 text-gray-800'>Fechad de alta: {""}
                    <span className='font-normal'>10 Diciembre 2021</span>
                </p>
                <p className='font-bold mb-3 text-gray-800'>Síntomas: {""}
                    <span className='font-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor expedita delectus odio voluptatibus ab, hic illum rerum vel? Impedit reprehenderit dolorem expedita nesciunt! Obcaecati autem voluptatibus ipsum aut quod.</span>
                </p>
            </div>
    )
}

export default Paciente
