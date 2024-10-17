
// types para paciente
export type Patient = {
  id:string
  name:string
  caretaker:string
  email:string
  date:Date
  symptoms:string

}

// Borrador antes de registrar
export type DraftPatient = Omit<Patient,'id'>