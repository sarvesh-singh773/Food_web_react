import React from 'react'
import { BASE_URL } from '../App';

function FoodPage({Data}){
  return (
    <div className={`w-[100%] h-[75vh] bg-[url('/image/bg.png')]`}>
        <div className='w-[80%] mx-auto grid sm:grid-cols-3 grid-cols-2 gap-4 pt-7 '>
            {
                Data?.map((food) =>(
                    <div className=' flex bg-white bg-opacity-10 rounded-xl p-2'>
                        <div>
                            <img src={BASE_URL +  food.image} alt="load img" className='w-[30vw] h-[25vh]'/>
                        </div>
                        <div className='pt-5'>
                            <h1 className='text-[white] text-[22px] bold'>{food.name}</h1>
                            <p className='text-[white]'>{food.text}</p>
                            <button className='bg-[red] text-[white] py-1 px-4 text-[20px] rounded-lg mt-4 ml-[140px]'>${food.price}</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default FoodPage;
