import './App.css'
import { Hero, ProblemSolution, Review, Faq, Partners, Note } from './components/home';
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
      <Faq/>
      <Note />
      <Footer />
    </main>
  );
};

export default App;