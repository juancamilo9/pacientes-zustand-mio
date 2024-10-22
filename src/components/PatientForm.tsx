// importamos lalibreria react hook form
import { useForm } from 'react-hook-form';
import { Error } from './Error';
import { DraftPatient } from '../types';
// importamos nuestro customHook
import {usePatientStore} from '../store'



export const PatientForm = () => {

  // Destructuramos nuestro usePatientStore
  const { addPatient} = usePatientStore()

  // Destructuramos nuestro useForm, cuando se genere, utilizamos el mismo type para data y useForm
  const { register, handleSubmit,reset, formState: { errors } } = useForm<DraftPatient>();

  // Función para registrar el paciente, es nuestra conexión entre reac-hook-form y el formulario
  const registerPatient = (data:DraftPatient) => {
    // Recuperamos lo que el usuario ingreso en el formulario con data
    addPatient(data)
    // Limpiamos el formulario
    reset()
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y { '' }
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        // Enlace entre react-hook-form y nuestro formulario, no necesita e e.preventDefult()
        onSubmit={ handleSubmit( registerPatient ) }
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            // Aplicación de la validación del campo con useForm
            { ...register( 'name', {
              required: "El nombre del paciente es obligatorio"
            } ) }
          />
          { errors.name && (
            <Error>{ errors.name?.message}</Error>
          ) }
        </div>


        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            { ...register( 'caretaker', {
              required: 'El nombre del propietario es obligatorio'
            } ) }
          />
          { errors.caretaker && (
            <Error>{ errors.caretaker?.message }</Error>
          ) }
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            { ...register( "email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email No Válido'
              }
            } ) }
          />
          { errors.email && (
            <Error>{ errors.email?.message }</Error>
          ) }
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            { ...register( 'date', {
              required: 'La fecha de alta es obligatorio'
            } ) }
          />
          { errors.date && (
            <Error>{ errors.date?.message}</Error>
          ) }
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            { ...register( 'symptoms', {
              required: 'Los sintomas son obligatorios'
            } ) }
          ></textarea>
          { errors.symptoms && (
            <Error>{ errors.symptoms?.message }</Error>
          ) }
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value='Guardar Paciente'
        />
      </form>
    </div>
  );
};