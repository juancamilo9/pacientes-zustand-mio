import React from 'react';

export const Error = ({children}:{children:React.ReactNode}) => {
  return (
    <p className='text-center text-sm bg-red-500 font-bold p-1 uppercase text-white rounded-lg'>{children}</p>
  )
}