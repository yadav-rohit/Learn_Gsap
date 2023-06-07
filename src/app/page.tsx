import Image from 'next/image'
import Day1 from './Components/Day1/Day1'

export default function Home() {
  return (
    <main className="flex w-[100vw] flex-col items-center justify-between p-16 ">
      <h1 className="text-5xl font-light font-mono">GSAP Practice by Rohit</h1>
      <div className='grid grid-cols-3 w-[100%] gap-5 mt-10 rounded-md p-3 min-h-[30vh]'>
        <Day1/>
      </div>
      <h1 className='absolute bottom-4 right-3'>
        @Rohit Yadav : made with ❤️
      </h1>
    </main>
  )
}
