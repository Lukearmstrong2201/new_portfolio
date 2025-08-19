import Navigation from '../components/Navigation'
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer'

const Index = () => {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <About />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Index
