import './App.css'
import { Hero } from './components/home/Hero';
import Partners from './components/home/Partners';
import ProblemSolution from './components/home/ProblemSolution';
import Review from './components/home/Review';
import { Footer } from './components/shared/Footer';
import { Navbar } from './components/shared/Nav';

const App = () => {
  return (
    <main className="font-nunito-sans bg-hero-bg min-h-svh bg-no-repeat bg-top mx-auto w-full bg-cover">
      <Navbar />
      <Hero />
      <ProblemSolution/>
      <Review/>
      <Partners/>
      {/*<Faq />
      <Note /> */}
      <Footer />
    </main>
  );
};

export default App;