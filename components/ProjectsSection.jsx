import { PROJECTS_DATA } from "@/constants";
import { ProjectCard } from ".";


export default function AboutSection() {

  return (
    <section 
      id='projects'
      className="md:py-10"
      data-aos="fade-up">

        <div className="w-full flex flex-col gap-2">
            
          <h2 className="text-sky-500 font-bold text-lg uppercase">
           My projects</h2>
          
          <h3 className="text-3xl font-semibold">Every project is a one-of-a-kind development journey!</h3>

          { PROJECTS_DATA?.map(( project ) => (
            <ProjectCard
              key={ project.id }
              project={ project }/>
          ))}
      </div>
    </section>
  )
}
