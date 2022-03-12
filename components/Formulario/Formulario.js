import {useState} from 'react';
import axios from 'axios';
import 'animate.css';

export const Fomulario = () => {

    const [component, setComponent] = useState (true)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [pais, setPais] = useState("");
    const [prefijo, setPrefijo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [data, setData] = useState("");
    
    let form;

    if(typeof document !== 'undefined'){
        form = document.getElementById('form');
        
    }

    
    const boton = (e) => {
        e.preventDefault();
        setComponent(false);
        sessionStorage.setItem('newsletter', false);
    }


    const sendForm = async(e) => {
        const textoRegEx = new RegExp(/([A-Za-zíÍáÁóÓéÉúÚ ])+/);
        const prefijoRegEx = new RegExp(/([+0-9])+/);
        const telRegEx= new RegExp(/([0-9\-])+/);
        e.preventDefault();
        if(nombre !== '' && apellido !== '' && pais !== '' && prefijo !== '' && telefono !== '' && correo !== ''){
            if(nombre !== textoRegEx || apellido !== textoRegEx || pais !== textoRegEx || prefijo !== prefijoRegEx ||  telefono !== telRegEx){
                try {
                    const res = await axios({
                        method: 'post',
                        url: `${process.env.REACT_APP_ENDPOINT_NEWSLETTER}`,
                        data: {
                            Nombre: nombre.trim(),
                            Apellido: apellido.trim(),
                            Pais: pais.trim(),
                            Telefono: `${prefijo.trim()} ${telefono.trim()}`,
                            Correo: correo.trim()
                        }
                    });
                    
                    setData(res.data);
                } catch (error) {
                    setData(error);
                }
                form.reset();
            }else{
                form.reset();
                setData('¡Error! Estás intentando ingresar caracteres no soportados');
            }
        }else{
            setData('¡Error! Porfavor llena todos los campos');
            form.reset();
        }
        
            
        
    }
   

  return (
    <>
    {component? 
        <div className='w-[100vw] z-40 h-[100vh] bg-zinc-500/50 fixed overflow-y-scroll overflow-x-hidden top-[-0rem]'>
            <form
                onSubmit={(e)=> {sendForm(e)}}
                id='form'
                className='z-50 animate__fadeInDown animate__animated bg-white w-[90%] xl:w-[50%] xl:mt-2  mx-auto flex flex-col xl:items-center shadow-lg pt-6 px-6 md:px-12 xl:px-6 xl:pt-3 '>
                <div className='w-full xl:w-[70%] mx-auto'>
                    <div className='flex flex-col'>
                        <h1 className='font-Metropolis md:text-[2.9rem] text-[1.6rem] text-center'>RENDEZ-VOUS</h1>
                        <h2 className='font-Metropolis md:text-[1.3rem] text-[0.9rem] text-center font-light relative md:left-[4rem] left-[3rem] bottom-[1rem]'>magazine</h2>
                    </div>
                    <p className='font-Metropolis text-zinc-800 text-center'>!Suscribete a nuestro <span className='font-Volkhov'>NEWSLETTER</span> para recibir actualizaciones diarias!</p>
                </div>
                <div className='flex flex-col xl:mt-1 '>
                    <div className=' flex flex-col xl:flex-row'>
                        <div className='flex flex-col xl:mr-6  mt-6'>
                            <label htmlFor='Nombre' className='font-Karla text-zinc-700'>Nombre</label>
                            <input
                                type='text'
                                onChange={(e)=> {setNombre(e.target.value)}}
                                className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring'
                                name='Nombre' 
                            />
                        </div>
                        <div className='flex flex-col xl:ml-6 mt-6'>
                            <label htmlFor='Apellido' className='font-Karla text-zinc-700 relative text-left'>Apellido</label>
                            <input
                                onChange={(e)=> {setApellido(e.target.value)}}
                                type='text'
                                className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring' 
                                name='Apellido'
                            />
                        </div>
                        
                    </div>
                    <div className='flex flex-col xl:flex-col'>
                        <div className='flex flex-col mt-6'>
                            <label htmlFor='Pais' className='font-Karla text-zinc-700 relative text-left'>País</label>
                            <input
                                onChange={(e) => {setPais(e.target.value)}}
                                type='text'
                                className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring' 
                                name='Pais'
                            />
                        </div>
                        <div className='flex flex-row mt-6'>
                            <div className='flex flex-col w-[25%]'>
                            <label htmlFor='pre' className='font-Karla text-zinc-700 relative text-left '>Prefijo</label>
                            <input 
                                type='phone'
                                name='pre'
                                onChange={(e) => setPrefijo(e.target.value)}
                                placeholder='+507'
                                className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring'
                            />
                            </div>
                            <div className='flex flex-col w-[75%]'>
                                <label htmlFor='Celular' className='font-Karla text-zinc-700 relative text-left'>Número Celular</label>
                                <input
                                    onChange={(e) => setTelefono(e.target.value)}
                                    type='phone'
                                    id='phone'
                                    className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring' 
                                    name='Celular'
                                    placeholder='6123-4567'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label htmlFor='Correo' className='font-Karla text-zinc-700 relative text-left'>Correo Electrónico</label>
                            <input
                                onChange={(e) => setCorreo(e.target.value)}
                                type='email'
                                className='placeholder:font-Karla font-Karla border-2 border-[#fff] border-b-[#ad8d32] focus-visible:ring-transparent focus:outline-none focus:ring' 
                                name='Correo'
                                placeholder='correo@correo.com'
                            />
                        </div>
                        <div>
                            {data !== ''?  <p className='font-Metropolis text-center border-2 border-[#ad8d32] mt-3 py-3'>{data}</p>:null}
                        </div>
                    </div>
                </div>
                <div className='w-[100%] justify-center flex flex-row my-3 xl:w-[50%]'>
                    <button 
                        onClick={boton}
                        className='mt-2 mr-2 bg-gradient-to-t from-[#000] to-[#7a7a7a] font-Karla text-center xl:w-[30%] w-full text-white shadow-xl py-2 rounded-[5px]'
                    >
                        Cerrar
                    </button>
                    <button 
                        type='submit'
                        className='mt-2 ml-2 bg-gradient-to-t from-[#000] to-[#7a7a7a] font-Karla text-center xl:w-[50%] w-full text-white shadow-xl py-2 rounded-[5px]'
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    :null
    }
    </>
  )
}
