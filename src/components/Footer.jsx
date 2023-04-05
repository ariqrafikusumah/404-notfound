import React from 'react'

function Footer() {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center bg-gray-900">
                <h1 className="text-6xl font-bold mb-2 text-white">Sorry </h1>
                <p className="text-lg mb-4 text-white text-center">The page you are looking for to renew your hosting and domain.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Home
                </button>
            </div>
        </>
    )
}

export default Footer