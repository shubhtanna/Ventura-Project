import React from 'react'
const data = [
  {
    id: 1,
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  },
  {
    id: 5
  },
  {
    id:6
  },
];

let step = 1;
const Circle = () => {


  return (

    <div>

      <div className="flex p-6 flex-col md:flex-row md:justify-start lg:flex-row items-center">
        {
          data.map((item) => (
            <>
              <div key={item.id} className='bg-[green] p-2 rounded-full flex flex-col items-center justify-center aspect-square w-[40px] h-[40px] '>

                <div>
                  {/* <p className='text-[white] '>{item.id}</p> */}
                  <svg className="w-4 h-4 text-white z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
                </div>

              </div>

               {/* Code for lines in between two circles */}
               {item.id !== data.length && (
                <>
                  <div

                    className={`w-0 h-20 md:h-0 md:w-[200px] lg:w-[200px] lg:h-0 border-[green] border-l-2 md:border-l-0 md:border-b-2 lg:border-l-0 lg:border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"
                      }`}
                  >
                  </div>
                </>
              )}             

              <div>


              </div>
            </>


          ))


        }
       
      </div>
    </div>
  )
}

export default Circle

// className={`h-[calc(32px/2)] w-[20%] border-dashed border-b-2 ${step > item.id ? "border-yellow-50" : "border-richblack-500"
// }`}