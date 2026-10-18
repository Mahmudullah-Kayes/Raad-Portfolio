import Navbar from './components/MainWebsite/shared/Navbar';
import Footer from './components/MainWebsite/shared/Footer';
import Hero from './components/MainWebsite/Home/Hero';
import Experience from './components/MainWebsite/Home/Experience';
import About from './components/MainWebsite/Home/About';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}