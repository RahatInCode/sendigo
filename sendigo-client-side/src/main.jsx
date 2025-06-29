import {RouterProvider} from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./router/router";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Whether animation should happen only once while scrolling down
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="urbanist-font max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
