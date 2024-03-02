import React from 'react'

function Header({handalsearchval , handalbutton}) {
    let list = ["All" , "Breakfast" , "Lunch" , "Dinner"];
  return (
    <div className='w-[100%] h-[25vh] bg-gray-800 '>
        <div className='w-[80%] h-[50%] flex justify-between mx-auto md:pt-[50px]'>
            <div className=''>
                <img src="image/Foody Zone.svg" alt="load img" />
            </div>
            <div>
                <input type="text" placeholder='Search Food...' className='bg-gray-800 border-[1px] border-[red] rounded-md py-1 px-2 text-[white]' 
                onChange={(e)=>{handalsearchval(e)}}
                />
            </div>
        </div>
        <div className='w-[80%] h-[50%] mx-auto flex justify-center pt-6'>
            <div className=''>
                {
                    list.map((item , index) =>(
                        <button key={index} className='bg-[#FF4343] text-[20px] py-2 px-3 rounded-md ml-4'
                        onClick={()=>handalbutton(item)}
                        >{item}</button>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Header