import { useState } from 'react'
import './App.css'

function Card({ title, description, image, views, tag }) {
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">

      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src={image}
          alt="card"
          className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="mb-4">
        <span className="inline-block px-3 py-1 text-xs uppercase bg-white text-black rounded-full mb-3">
          {tag}
        </span>

        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gray-300">
          {title}
        </h2>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        {description}
      </p>

      <div className="flex justify-between items-center">
        <button className="px-4 py-2 bg-white text-black text-sm rounded-lg hover:bg-gray-200">
          Learn More
        </button>

        <span className="text-xs text-gray-500">{views} views</span>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const data = [
    {
      title: "Modern Design",
      description: "Explore modern UI/UX design patterns.",
      image: "https://picsum.photos/400/300?random=1",
      views: "234",
      tag: "Featured"
    },
    {
      title: "Frontend Development",
      description: "Learn React and Tailwind easily.",
      image: "https://picsum.photos/400/300?random=2",
      views: "500",
      tag: "Trending"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center gap-6 flex-wrap p-6">
      
      <h1 className='w-full text-center bg-green-400 text-black p-4 rounded-xl'>
        Tailwind Cards
      </h1>

      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}

    </div>
  )
}

export default App