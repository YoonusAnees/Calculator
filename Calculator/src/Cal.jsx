import React, { useState } from 'react'
import { FaDivide } from "react-icons/fa";
import { FaBackspace } from "react-icons/fa";

function Cal() {
    const [input, setInput] = useState("");

     const handleClick = (value) => {
        setInput(input + value)
    }

    const handleClickClear = () => {
        setInput("")
    }

    const handleEqual = () => {
        try {
            setInput(eval(input));
        } catch {
            setInput("Error");
        }
    }
    return (

        <>

            <div className='w-full h-screen bg-red-900 flex justify-center items-center'>
                <div className='bg-[#171314] inset-shadow-sm inset-shadow-zinc-500'>

                    <div className='bg-[#171314] w-full p-8  inset-shadow-sm inset-shadow-zinc-500 flex justify-center items-center'> 


                   <input className='px-10 py-5 text-white text-2xl' type="text" value={input} />


                    </div>



                    <div className='grid grid-cols-4  gap-6  p-8'>

                        <button onClick={handleClickClear}  className='bg-[#171314] p-6  inset-shadow-sm  rounded-2xl inset-shadow-zinc-500 hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl'>C</button>
                        <button onClick={() => handleClick('-')}  className='bg-[#171314] p-6  inset-shadow-sm inset-shadow-zinc-500 rounded-2xl hover:inset-shadow-red-500 hover:-translate-1  flex items-center justify-center text-amber-50 text-2xl'>-</button>

                        <button onClick={() => handleClick('/')}  className='bg-[#171314] p-6  inset-shadow-sm inset-shadow-zinc-500 rounded-2xl hover:inset-shadow-red-500 hover:-translate-1  flex items-center justify-center text-amber-50 text-2xl'><FaDivide /></button>

                        <button  onClick={() => setInput(input.slice(0, -1))}  className='bg-[#171314] p-6  inset-shadow-sm inset-shadow-zinc-500 rounded-2xl hover:inset-shadow-red-500 hover:-translate-1  flex items-center justify-center text-amber-50 text-2xl'><FaBackspace /></button>

                        <button onClick={() => handleClick('7')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>7</button>



                        <button onClick={() => handleClick('8')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>8</button>
                        <button onClick={() => handleClick('9')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>9</button>
                        <button onClick={() => handleClick('*')}  className='bg-[#bf0000] p-6 inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>x</button>


                        <button onClick={() => handleClick('4')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>4</button>
                        <button onClick={() => handleClick('5')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>5</button>
                        <button onClick={() => handleClick('6')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>6</button>
                        <button onClick={() => handleClick('+')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>+</button>
                        <button onClick={() => handleClick('1')}  className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>1</button>

                        <button onClick={() => handleClick('2')}  className='bg-[#bf0000]  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>2</button>
                        <button onClick={() => handleClick('3')}   className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>3</button>
                        <button onClick={handleEqual} className='bg-[#bf0000] p-6 row-span-2 inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>=</button>


                        <div className='bg-[#bf0000] col-span-2 p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>0</div>
                        <div className='bg-[#bf0000] p-6  inset-shadow-sm inset-shadow-zinc-800 rounded-2xl  hover:inset-shadow-red-500 hover:-translate-1 flex items-center justify-center text-amber-50 text-2xl font-bold'>.</div>
                      
                        

                    </div>
                </div>

            </div>


        </>
    )
}

export default Cal
