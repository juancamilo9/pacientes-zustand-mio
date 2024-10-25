import {PatientForm,PatientsList} from './components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="text-center text-4xl font-black md:w-2/3 md:mx-auto">Seguimiento de pacientes {''}
          <span className="text-indigo-700" >Veterinaria</span>
        </h1>
      </div>
      <div className="mt-12 md:flex">
        <PatientForm/>
        <PatientsList/>
      </div>

      <ToastContainer/>
    </>
  )
}

export default App
