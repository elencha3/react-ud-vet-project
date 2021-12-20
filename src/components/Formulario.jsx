import {useState, useEffect} from 'react'

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log("Hay algún campo vacío")
            setError(true);
            return;
        } 

        setError(false);

    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-lg mt-3 mb-4 text-center'>Añade pacientes y {''}
                <span className='text-cyan-400 font-bold '>Adminístralos</span>
            </p>

            <form 
            className='bg-cyan-50 shadow-md rounded py-10 px-5'
            onSubmit={handleSubmit}>
                {error && (
                    <div className='bg-red-500 text-white text-center p-2 font-bold mb-3 rounded'>  
                        <p>Todos los campos son obligatorios</p> 
                    </div>
                )}
                <div className='mb-5'>
                    <label className='block text-gray-800 font-bold' htmlFor="mascota">Nombre Mascota</label>
                    <input 
                    type="text" 
                    id='mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
                    placeholder='Nombre de la mascota'
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-800 font-bold' htmlFor="propietario">Nombre Propietario</label>
                    <input 
                    type="text" 
                    id='propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
                    placeholder='Nombre del propietario' 
                    value={propietario}
                    onChange={(e)=> setPropietario(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-800 font-bold' htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    id='email'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
                    placeholder='Email de contacto' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-800 font-bold' htmlFor="alta">Fecha de alta</label>
                    <input 
                    type="date" 
                    id='alta'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded' 
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <label className='block text-gray-800 font-bold' htmlFor="sintomas">Síntomas</label>
                    <textarea
                    id='sintomas'
                    placeholder='Describe los síntomas'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded' 
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)} />
                </div>
                <input 
                type="submit"
                value="Agregar Paciente"
                className='bg-cyan-500 w-full p-3 text-white uppercase font-bold rounded hover:bg-cyan-400 cursor-pointer transition-all'/>
            </form>
        </div>
    )
}

export default Formulario
