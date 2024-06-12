import React from 'react'

const addNote = () => {
  return (
    <form className='flex flex-col gap-3' action="">
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Note Title' />
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Note Description' />
        <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'> Add Note</button>
    </form>
  )
}

export default addNote