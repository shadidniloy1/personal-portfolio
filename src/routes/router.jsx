import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projects',
        element: <div>Projects</div>
    },
    {
        path: '/contact',
        element: <div>Contact</div>
    },
    {
        path: '*',
        element: <div>Error</div>
    }
])

export default router