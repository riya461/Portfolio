import './App.css';
import Blogs from './components/Blogs';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Experience from './components/Experience';
import Volunteering from './components/Volunteering';

const FloatingDoodles = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
    <div className="absolute top-[15%] left-[8%] text-4xl opacity-10 animate-drift" style={{ animationDelay: '0s' }}>✦</div>
    <div className="absolute top-[25%] right-[12%] text-3xl opacity-10 animate-drift" style={{ animationDelay: '3s' }}>✿</div>
    <div className="absolute top-[55%] left-[5%] text-2xl opacity-10 animate-drift" style={{ animationDelay: '6s' }}>◎</div>
    <div className="absolute top-[70%] right-[8%] text-4xl opacity-10 animate-drift" style={{ animationDelay: '1.5s' }}>✧</div>
    <div className="absolute top-[40%] left-[85%] text-3xl opacity-8 animate-drift" style={{ animationDelay: '4.5s' }}>❋</div>
    <div className="absolute top-[85%] left-[15%] text-2xl opacity-8 animate-drift" style={{ animationDelay: '7s' }}>✦</div>
  </div>
);

const App = () => {
  return (
    <div className="bg-cream min-h-screen relative">
      <FloatingDoodles />

      <main className="relative z-10">
        <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 flex items-center justify-center bg-cream border-2.5 border-charcoal rounded-full shadow-sketchy hover:shadow-sketchy-lg hover:-translate-y-1 hover:rotate-12 transition-all duration-300">
          <a href="#home" className="text-lg" aria-label="Back to top">↑</a>
        </button>

        <section id="home"><Home /></section>
        <section id="projects"><Projects /></section>
        <section id="work-experience"><Experience /></section>
        <section id="volunteering"><Volunteering /></section>
        <section id="blogs"><Blogs /></section>
        <section id="about"><About /></section>
        <section id="connect"><Connect /></section>
      </main>

      <footer className="relative z-10 font-handwriting text-center py-10 mt-0 bg-peach-wash">
        <p className="text-charcoal/60 text-xl tracking-wide">
          made with warmth & curiosity ✦ riya sabu
        </p>
      </footer>
    </div>
  );
};

export default App;
