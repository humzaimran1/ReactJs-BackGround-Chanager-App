import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")
  return (

    <div className="w-full h-screen duration-200" style={{ background: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
       
        {/* for red */}
        <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "red" }}>RED</button>

        {/* for yellow */}
        <button
          onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "yellow" }}>Yellow</button>
        {/* blue */}
        <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>

        {/* Green */}
        <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{ backgroundColor: "green" }}>Green</button>

      </div>

    </div>
  )
}

export default App