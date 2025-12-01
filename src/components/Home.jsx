export default function Home () {
  return (
    <section id="home" className="flex flex-col justify-center items-center text-center h-screen text-white">
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="col-span-1 flex items-end">
          <h1 className="text-2xl text-start" style={{ fontFamily: "'Momo Signature', cursive"}}>
            Hello there! <span className="font-medium text-2xl" style={{ fontFamily: "'Rubik', sans-serif" }}>My name is</span>
          </h1>
        </div>
        <div className="col-span-2 flex items-start">
          <p className="text-9xl text-start" style={{ fontFamily: "'Bebas Neue', cursive" }}>
            Dhanu Pandhowo
          </p>
        </div>
      </div>

      <img src="/Myself.png" alt="Dhanu Pandhowo" className="absolute z-20 w-lg overflow-hidden bottom-0"/>
    </section>
  )
}