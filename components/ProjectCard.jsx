
import Image from "next/image";
import Link from "next/link";


export default function ProjectCard({ project }) {

  const { title, description, image, library, database, codeLink, demoLink, libraryName, dataName } = project;


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
          
          <div className="flex items-center justify-center gap-6 py-2">
            
            <div  className="tooltip cursor-pointer" data-name='React'>
              <Image
                src='/react.png'
                alt='React logo'
                width={40}
                height={40}/>
            </div>

            <div className="tooltip cursor-pointer" data-name='Tailwindcss'>
              <Image
                src='/tailwind.png'
                alt='Tailwindcss logo'
                width={40}
                height={40}/>   
            </div>

            <div className="tooltip cursor-pointer" data-name={ libraryName }>
              <Image
                 src={ library }
                 alt={`${ library } logo`}
                 width={35}
                 height={35}/>
            </div>

              
            { database.length === 0
              ? null
              : <div className="tooltip cursor-pointer" data-name={ dataName }>
                  <Image
                    src={ database }
                    alt={`${ database } logo`}
                    width={40}
                    height={40}/> 
              </div>
            }
          </div>

        <div className="flex justify-center gap-10 py-5 font-medium">
          <Link
            href={ codeLink }
            target="_blank"
            className="px-3 py-1 rounded-full border-[1.5px] border-black/80 hover:bg-black/5 ease-in duration-200">
              Code
          </Link>

          <Link
            href={ demoLink }
            target="_blank"
            className="px-3 py-1 rounded-full border-[1.5px] border-black/80 hover:bg-black/5 ease-in duration-200">
              Live Demo
          </Link>
        </div>

      </div>
    </div>
  )
}
