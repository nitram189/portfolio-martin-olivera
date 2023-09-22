import Link from "next/link";


export default function Footer() {

  return (
    <div className="p-5 w-full bg-black/80">

      <footer
        className="flex flex-col justify-center  text-sm text-white">

        <div className="flex flex-col gap-10 lg:gap-20 sm:flex-row justify-center p-10">

          <h5 className="font-semibold">martin.dev 2023</h5>
          
          <p className="font-semibold uppercase">Learning stack |</p>

          <div className="flex flex-col space-y-2">
            <h6 className="uppercase font-semibold text-sky-300">YouTube</h6>

            <Link href='https://www.youtube.com/@midulive'
            target="_blank" className="hover:text-sky-300 transition-all ">
                midulive
            </Link>
            
            <Link href='https://www.youtube.com/@carpicoder' target="_blank" className="hover:text-sky-300 transition-all ">
                Carpi Coder
            </Link>

            <Link href='https://www.youtube.com/@codecommerce' target="_blank" className="hover:text-sky-300 transition-all ">
                Code Commerce
            </Link>

            <Link href='https://www.youtube.com/@soydalto' target="_blank" className="hover:text-sky-300 transition-all ">
                Soy Dalto
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <h6 className="uppercase font-semibold text-sky-300">Udemy</h6>

            <Link href='https://www.udemy.com/user/juanpablodelatorrevaldez/' target="_blank" className="hover:text-sky-300 transition-all ">
              Código Con Juan
            </Link>

            <Link href='https://www.udemy.com/user/550c38655ec11/' target="_blank" className="hover:text-sky-300 transition-all ">
              Fernando Herrera
            </Link>
          </div>
        </div>

        
        <div className="border-t border-white/70 text-center w-3/4 mx-auto">
            <h5 className="pt-5">All rights reserved - Website developed by{' '}
            <Link
              href='https://www.linkedin.com/in/martinolivera1989/' target="_blank"
              style={{ fontWeight: 'bold' }}>
                Martin Olivera
            </Link>
            </h5>
        </div>
       
      </footer>
    </div>
  )
}
