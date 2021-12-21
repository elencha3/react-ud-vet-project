import {useState, useEffect} from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');


    const [error, setError] = useState(false);

    useEffect(() => {
        if ( Object.keys(paciente).length > 0 ) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])


    const generarId = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validación del formulario
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            console.log("Hay algún campo vacío")
            setError(true);
            return;
        } 

        setError(false);

        //Objecto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        if(paciente.id) {
            //Editando registro
            objetoPaciente.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            
            setPacientes (pacientesActualizados)
            setPaciente({})
        } else {
            //Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente]);
        }
        
        //Reiniciar from
        setNombre('');
        setPropietario('');
        setEmail('')
        setFecha('')
        setSintomas('')

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
                { error && <Error> <p>Todos los campos son obligatorios</p></Error> }
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
                value= {paciente.id ? 'Editar Paciente' : 'Agregar paciente'}
                className='bg-cyan-500 w-full p-3 text-white uppercase font-bold rounded hover:bg-cyan-400 cursor-pointer transition-all'/>
            </form>
        </div>
    )
}

export default Formulario
