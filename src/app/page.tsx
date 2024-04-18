import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center p-20 select-none">
      <div className="flex flex-col space-y-16 sm:w-full md:w-1/2 lg:w-[40%]">
        <div className="flex justify-center w-full">
          <Image src="/ren.svg" alt="Ren Logo" width={100} height={100} />
        </div>

        <div className="text-4xl font-light text-center leading-tight">
          <p>
            Ren is a design and technology studio making delightful interface
            experiences.
          </p>
        </div>

        <div className="flex flex-row font-light justify-center text-3xl text-center">
          <div className="group w-40 space-y-4 flex flex-col items-center">
            <Link href={`mailto:ericdai@sas.upenn.edu`}>Contact</Link>
            <div className="transition duration-300 ease-in-out w-[5px] h-[1px] bg-white group-hover:block group-hover:scale-[20] group-hover:bg-black rounded-custom-oval "></div>
          </div>

          <div className="group w-40 space-y-4 flex flex-col items-center">
            <p>Work</p>
            <div className="transition duration-300 ease-in-out w-[5px] h-[1px] bg-white group-hover:block group-hover:scale-[20] group-hover:bg-black rounded-custom-oval "></div>
          </div>
        </div>
      </div>
    </main>
  );
}
