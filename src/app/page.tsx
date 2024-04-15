import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start p-20">
      <div className="sm:w-full md:w-1/2 lg:w-1/3">
        <p className="font-light text-3xl">
          Ren is a design and technology studio making delightful interfaces and
          experiences.
        </p>
      </div>

      <div className="w-1/3">
        <p className="font-light text-3xl italic pt-16">Contact</p>
      </div>
    </main>
  );
}
