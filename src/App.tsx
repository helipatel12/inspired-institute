import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/site/Navbar'
import Footer from '@/components/site/Footer'
import WhatsAppButton from '@/components/site/WhatsAppButton'

import IndexPage from '@/pages/index'
import AboutPage from '@/pages/About'
import AcademicPage from '@/pages/Academic'
import BlogPage from '@/pages/Blog'
import ConnectPage from '@/pages/Connect'
import CoursesPage from '@/pages/Courses'
import PeoplePage from '@/pages/People'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <a href="/" className="mt-6 inline-block btn-primary">Go home</a>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Academic" element={<AcademicPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Connect" element={<ConnectPage />} />
        <Route path="/Courses" element={<CoursesPage />} />
        <Route path="/People" element={<PeoplePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  )
}