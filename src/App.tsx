import {PatientForm,PatientsList} from './components';

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
    </>
  )
}

export default App
