import { usePatientStore } from '../store';
import { PatientDetails } from './PatientDetails';

export const PatientsList = () => {
  // const {patients} = usePatientStore()
  const patients = usePatientStore( ( state ) => state.patients )
  return (
    <div className="md:w-1/2 lg:3/5 sm:h-screen overflow-y-scroll">
      { patients.length ?
        (
          <>
            <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Administra tus { ' ' }
              <span className="text-indigo-600 font-bold" >pacientes</span>
            </p>
            {patients.map(p=>(
              <PatientDetails 
                key={p.id}
                patient={p}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">Agrega los pacientes y
              <span className="text-indigo-600 font-bold" >Admnistralos</span>
            </p>
          </>
        )
      }
    </div>
  );
};
