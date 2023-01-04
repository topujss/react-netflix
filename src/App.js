import Notice from './components/Notice';
import Hero from './components/Hero';
import ShowOne from './components/ShowOne';
import ShowTwo from './components/ShowTwo';
import ShowThree from './components/ShowThree';
import ShowFour from './components/ShowFour';
import Faq from './components/Faq';

/**
 * render /> is like innerHTML in js
 */
export default function App() {
  return (
    <>
      <Notice />
      <Hero />
      <ShowOne />
      <ShowTwo />
      <ShowThree />
      <ShowFour />
      <Faq />
    </>
  );
}
