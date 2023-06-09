import Image from 'next/image'
import Day1 from './Components/Day1/Day1'
import Day2 from './Components/Day2/Day2'
import Trail from './Components/trail/Trail'
import Day3 from './Components/Day3/Day3'

export default function Home() {
  return (
    <main className="flex w-[100vw] flex-col items-center  justify-between md:p-16 ">
      <h1 className="text-5xl font-light font-mono p-3">GSAP Practice by Rohit</h1>
      <div className='grid grid-col-1 lg:grid-cols-3 w-[100%] gap-5   mt-10 rounded-md p-3 '>
        <Day1/>
        <Day2/>
        <Day3/>
      </div>
      {/* <Trail/> */}
      <h1 className='fixed bottom-4 right-3 bg-[#2323237a] backdrop-blur-lg p-2 rounded-lg border border-slate-600'>
        @Rohit Yadav : made with ❤️
      </h1>
    </main>
  )
}
