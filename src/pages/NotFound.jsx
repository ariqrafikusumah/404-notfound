import React from 'react'
import { Footer } from '../components'

function NotFound() {
    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center">
                <h1 className="text-6xl font-bold mb-2">404 Not Found</h1>
                <p className="text-lg mb-4">The page you are looking for could not be found.</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Home
                </button>
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </>
    )
}

export default NotFound