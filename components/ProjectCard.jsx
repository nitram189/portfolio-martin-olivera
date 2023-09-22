import Image from "next/image";
import Link from "next/link";


export default function ProjectCard({ project }) {

  const { title, description, image, library, database, codeLink, demoLink } = project;


  return (
    <div
      className="md:flex gap-10 items-start py-10 my-5 px-5 shadow-lg"
      data-aos="fade-up" data-aos-duration="1500">
            
      <div className="w-full md:w-3/5 flex justify-center">
        <Image
          src={ image }
          alt={`Image related to ${ title }`}
          width={500}
          height={500}
          className="rounded-lg"/>
      </div>

      <div className="w-full md:w-2/5 pt-6 md:pt-0">

        <h4 className="text-2xl font-bold border-b border-b-sky-500 pb-1">{ title }</h4>

        <p className="text-gray-800 py-3 text-justify lg:text-lg">{ description }</p>
          
          <div className="flex items-center justify-center gap-7 py-2">
            <Image
              src='/react.png'
              alt='React logo'
              width={40}
              height={40}/>

            <Image
              src={ library }
              alt={`${ library } logo`}
              width={35}
              height={35}/>

            <Image
              src='/tailwind.png'
              alt='Tailwindcss logo'
              width={40}
              height={40}/>   
              
            { database.length === 0
              ? <div></div>
              : <Image
                  src={ database }
                  alt={`${ database } logo`}
                  width={40}
                  height={40}/> 
            }
          </div>

        <div className="flex justify-center gap-10 py-5 font-semibold">
          <Link
            href={ codeLink }
            target="_blank"
            className="px-3 py-1 border rounded-full border-black/80">
              Code
          </Link>

          <Link
            href={ demoLink }
            target="_blank"
            className="px-3 py-1 border rounded-full border-black/80">
              Live Demo
          </Link>
        </div>

      </div>
    </div>
  )
}
