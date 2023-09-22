import { STACK_IMAGES } from "@/constants";
import Image from "next/image";


export default function StackImages() {

  return (
    <div className="flex flex-wrap gap-5 py-4 items-center">
      { STACK_IMAGES?.map(({ id, image }) => (
        <Image
          key={ id }
          src={ image }
          alt={`${ image } logo`}
          width={30}
          height={30}
          className="h-fit"
          />
      ))}
    </div>
  )
}
