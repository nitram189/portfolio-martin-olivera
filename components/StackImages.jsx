import { STACK_IMAGES } from "@/constants";
import Image from "next/image";


export default function StackImages() {

  return (
    <div className="flex flex-wrap gap-5 py-4 items-center">
      { STACK_IMAGES?.map(({ id, image, name }) => (
        <div key={ id } data-name={ name } className="cursor-pointer tooltip">
          <Image
            src={ image }
            alt={`${ name } logo`}
            width={30}
            height={30}/> 
        </div>
      ))}
    </div>
  )
}
