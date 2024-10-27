import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { DraftPatient, Patient } from '../types';
import { devtools, persist } from 'zustand/middleware';

// Tye local para usePatientStore
type PatientState = {
  patients: Patient[];
  activeId: ( Patient[ 'id' ] );
  addPatient: ( data: DraftPatient ) => void;
  deletePatient: ( id: Patient[ 'id' ] ) => void;
  getPatientById: ( id: Patient[ 'id' ] ) => void;
  updatePatient:(data:DraftPatient)=>void
};

// Función para crear el paciente, toma un patient de typo DraftPatient y nos retora un Patient
const createPatient = ( patient: DraftPatient ): Patient => {
  return {
    ...patient,
    id: uuidv4()
  };
};

export const usePatientStore = create<PatientState>()(
  devtools(
    persist(( set ) => ( {
    //state
    patients: [],
    activeId: '',
    // funciones
    addPatient: ( data ) => {
      const newPatient = createPatient( data );
      // modificamos el state
      set( ( state ) => ( {
        patients: [ ...state.patients, newPatient ]
      } ) );
    },
    deletePatient: ( id ) => {
      // Eliminamos el paciuente
      set( ( state ) => ( {
        // Traemos solos los paciente cuyos id son diferens al id que pasamos
        patients: state.patients.filter( patient => patient.id !== id )
      } ) );
    },
    getPatientById: ( id ) => {
      set( () => ( {
        activeId: id
      } ) );
    },
    updatePatient: (data) =>{
      
      set((state)=>({
        patients:state.patients.map(patient=>patient.id === state.activeId ? {id:state.activeId,...data}: patient),
        activeId:''
      }))
    }
  }),{
    name:'patient-storage'
  })
));