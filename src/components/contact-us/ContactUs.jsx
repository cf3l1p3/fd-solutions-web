import React, {useState} from 'react'

const ContactUs = () => {

  const [formState, setFormState] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorCorreo, setErrorCorreo] = useState('');

  const validarCorreo = (correo) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarCorreo(formState.correo)){  
      setErrorCorreo('Por favor ingrese un correo válido');
      return;
    }else{
      setErrorCorreo('');
    }

    if (formState.nombre.trim().length < 2) {
      setErrorMsg('El nombre debe tener al menos 2 caracteres.');
      return;
    }

    if (formState.mensaje.trim().length < 10) {
      setErrorMsg('El mensaje debe tener al menos 10 caracteres.');
      return;
    }
  
    try {
      const response = await fetch('https://formspree.io/f/xeozrrqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormState({ nombre: '', correo: '', asunto: '', mensaje: '' });
        setErrorMsg(null);
      } else {
        const data = await response.json();
        setErrorMsg(data?.error || 'Error al enviar el mensaje.');
      }
    } catch (error) {
      setErrorMsg('No se pudo enviar el mensaje. Intenta más tarde.');
    }
  };


  return (
  <>
    <section id='contactanos' className='bg-slate-100'>
      <div className='container mx-auto flex flex-col items-center justify-center py-10 cd:h-[500px]'>
        <div className='grid grid-cols-1 items-center gap-4 md:grid-cols-1'>
          <div 
            data-aos="fade-up"
            data-aos-duration="100"
            data-aos-once="true" 
            className='flex flex-col gap-4 text-left md:items-start md:p-8 md:text-left
                "md:order-last" : ""'>
            <h1 className='font-bold'>Contáctanos</h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4">
                <p className='flex flex-col items-left'>Nombre completo</p>
                <input type='text' name="nombre" placeholder='Nombre completo' required value={formState.nombre} 
                onChange={handleChange} className='items-center px-4 py-2 border 
                border-cyan-500 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg font-bold '/>

                <p className='flex flex-col items-left'>Correo electrónico:</p>
                <input type='text' name ="correo" placeholder='correo@dominio.com' required value={formState.correo} 
                onChange={handleChange} className={`px-4 py-1 border ${errorCorreo ? 'border-red-500' : 'border-cyan-500'} 
                rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg font-bold `}/>

                <p className='flex flex-col items-left'>Asunto:</p>
                <input type='text' name ="asunto" placeholder='Asunto' required value={formState.asunto} 
                onChange={handleChange} className='px-4 py-1 border 
                border-cyan-500 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg font-bold '/>

                <p className='flex flex-col items-left'>Mensaje:</p>
                <textarea type='textarea' name ="mensaje" placeholder='Necesito ayuda con...' required value={formState.mensaje} 
                onChange={handleChange} className='px-4 py-1 border 
                border-cyan-500 rounded-md shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg font-bold '/>
                {errorCorreo && (
                  <p className="text-red-600 bg-red-100 p-2 rounded">{errorCorreo}</p>
                )}
                {errorMsg && (
                  <p className="text-red-600 bg-red-100 p-2 rounded">{errorMsg}</p>
                )}
                <p>
                  <button type="submit" className='btn-primary cursor-pointer'> Enviar </button>
                </p>

            </form>
          </div> 
        </div>
      </div>
    </section>

    {/* Popup de éxito */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm w-full text-center">
            <h3 className="text-xl font-bold text-cyan-700 mb-2">¡Gracias por tu mensaje!</h3>
            <p className="mb-4">Te responderemos lo antes posible.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
  </>
    
  )
}

export default ContactUs