import React from 'react'

function Card({username}) {
    console.log(username)
    return (
         <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=800&q=80"
        alt="Card"
        className="h-full w-full rounded-md object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      {/* Card Content */}
      <div className="absolute bottom-4 left-4 text-white">
        <h1 className="text-2xl font-bold">
         {username}
        </h1>

        <p className="text-sm text-gray-300">
          #345
        </p>

        <p className="mt-2 font-semibold">
          Price: 0.01 ETH
        </p>
      </div>
    </div>
    )
}

export default Card
