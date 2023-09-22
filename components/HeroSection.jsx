'use client';
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import StackImages from "./StackImages";

    
export default function HeroSection() {

  return (
    
    <section
      id='home'
      className="py-10">

      <div className="md:flex gap-14 items-center justify-between">

        <div className="w-full md:w-1/2 flex flex-col gap-6">
            
          <h1 className="font-extrabold text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              {`Hello, I'm`}{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Martin',
                2000,
                'an engineer',
                2000,
                'a web developer',
                2000,
                ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-black/80 text-base sm:text-lg lg:text-xl">
            {`It's Martin here. An enthusiastic Frontend React developer based in Buenos Aires, Argentina.`}
          </p>
          
          <Link
            href='https://github.com/nitram189'
            target="_blank"
            className="px-6 py-2 rounded-full w-1/2 lg:w-1/2 text-center font-semibold border-2 border-black/80 hover:bg-black/5">
              GitHub
          </Link>
        
          <Link
            href='https://www.linkedin.com/in/martinolivera1989/'
            target="_blank"
            className="px-6 py-2 rounded-full w-1/2 lg:w-1/2 text-center font-semibold border-2 border-black/80 hover:bg-black/5">
              LinkedIn
          </Link>
        </div>


        <div className="w-full md:w-1/2 flex justify-center pt-20 pb-5">
          <div className="rounded-full bg-red-500 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src='/hero-avatar.png'
              alt="Avatar hero image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
          </div>
        </div>
      </div>
      
      <div data-aos="fade-right">
        <h5 className="font-bold pt-10 lg:pt-0">Tech Stack</h5>
        <StackImages />
      </div>
    </section>
  )
}
