import React from 'react'

const TestimonialCard = () => {
  return (
    <div className="md:w-[350px] md:h-[200px] h-[320px] bg-white rounded-md m-5 md:m-0 relative">
      <blockquote className="p-5">
      This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.
      </blockquote>

      <div className="absolute flex left-5">
        <div className="w-10 h-10 overflow-hidden">
          <img className="h-full w-full object-cover rounded-full" src="https://img.freepik.com/free-photo/pretty-girl-with-long-hair-posing_155003-7882.jpg?uid=R117734300&ga=GA1.1.776574482.1719942477&semt=ais_user" alt="" />
        </div>
        <div className='flex flex-col ml-5'>
          <h2 className="font-semibold">Jelia Moose</h2>
          <p className="text-sm font-light">Customer</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard