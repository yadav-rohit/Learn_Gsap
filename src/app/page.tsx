import Image from 'next/image'
import Day1 from './Components/Day1/Day1'
import Day2 from './Components/Day2/Day2'
import Trail from './Components/trail/Trail'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center  justify-between md:p-16 overflow-x-hidden">
      <h1 className="text-5xl font-light font-mono p-3">GSAP Practice by Rohit</h1>
      <div className='grid grid-col-1 lg:grid-cols-3 w-[100%] gap-5   mt-10 rounded-md p-3 min-h-[30vh]'>
        <Day1/>
        <Day2/>
      </div>
      {/* <Trail/> */}
      <h1 className='fixed bottom-4 right-3'>
        @Rohit Yadav : made with ❤️
      </h1>
    </main>
  )
}
