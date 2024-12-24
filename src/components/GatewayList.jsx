import React from 'react'

const GatewayList = () => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden max-w-lg mx-auto mt-16">
    <div className="bg-gray-100 py-2 px-4">
        <h2 className="text-xl font-semibold text-gray-800">Top Gateway Game Recommendations</h2>
    </div>
    <ul className="divide-y divide-gray-200">
        <li className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">1.</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://cf.geekdo-images.com/pH5LgRL4mNRon-2NsSDb1Q__imagepage/img/H8gGY2t-R-NjaEA0bE5tnn5zIps=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6137509.png"
                alt="User avatar"/>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Quacks of Quedlinberg</h3>
                
            </div>
        </li>
        <li className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">2.</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/men/40.jpg"
                alt="User avatar"/>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">David Lee</h3>
                <p className="text-gray-600 text-base">987 points</p>
            </div>
        </li>
        <li className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">3.</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/54.jpg"
                alt="User avatar"/>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Sophia Williams</h3>
                <p className="text-gray-600 text-base">876 points</p>
            </div>
        </li>
        <li className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">4.</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/men/83.jpg"
                alt="User avatar"/>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Michael Chen</h3>
                <p className="text-gray-600 text-base">765 points</p>
            </div>
        </li>
        <li className="flex items-center py-4 px-6">
            <span className="text-gray-700 text-lg font-medium mr-4">5.</span>
            <img className="w-12 h-12 rounded-full object-cover mr-4" src="https://randomuser.me/api/portraits/women/17.jpg"
                alt="User avatar"/>
            <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-800">Mia Davis</h3>
                <p className="text-gray-600 text-base">654 points</p>
            </div>
        </li>
    </ul>
</div>
  )
}

export default GatewayList