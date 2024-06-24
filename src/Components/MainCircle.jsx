import React from 'react'
import Circle from './Circle'

const MainCircle = () => {
  const data=[
    {
    id:1,
    heading:"Bindings Start",
    date:"12 Dec 2023"
  },
    {
    id:2,
    heading:"Bidding ends",
    date:"15 Dec 2023"
  },
    {
    id:3,
    heading:"Allotment finalization",
    date:"18 Dec 2023"
  },
    {
    id:4,
    heading:"Refund initiation",
    date:"18 Dec 2023"
  },
    {
    id:5,
    heading:"Demat transfer",
    date:"18 Dec 2023"
  },
  {
    id:6,
    heading:"Listing date",
    date:"21 Dec 2023"
  },
  
]
  return (
      <div className='flex flex-row md:flex-col lg:flex-col md:gap-10'>
        <Circle/>
        <div className='flex flex-col md:flex-row lg:flex-row gap-[70px] md:gap-[4%] mt-5 md:mt-0 lg:gap-[7%]'>
          {
            data.map((item)=>(
              <div key={item.id}>
                 <p>{item.heading}</p>
                 <p>{item.date}</p>
              </div>  
            ))
          }
           
        </div>
    </div>
  
    
  )
}

export default MainCircle