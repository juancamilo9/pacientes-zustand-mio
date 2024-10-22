import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import { DraftPatient, Patient } from '../types';

// Tye local para usePatientStore
type PatientState = {
  patients:Patient[]
  addPatient:(data:DraftPatient) => void
}

// Función para crear el paciente, toma un patient de typo DraftPatient y nos retora un Patient
const createPatient = (patient:DraftPatient):Patient=>{
  return{
    ...patient,
    id:uuidv4()
  }
}

export const usePatientStore = create<PatientState>((set)=>({
  //state
  patients:[],
  // funciones
  addPatient:(data)=>{
    const newPatient = createPatient(data)
    // modificamos el state
    set((state)=>({
      patients:[...state.patients, newPatient]
    }))
  }
}))