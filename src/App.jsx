import Hero from './components/Hero';
import ShowOne from './components/ShowOne';
import ShowTwo from './components/ShowTwo';
import ShowThree from './components/ShowThree';
import ShowFour from './components/ShowFour';
import Faq from './components/Faq';
import Footer from './components/Footer';

/**
 * render /> is like innerHTML in js
 */
export default function App() {
	return (
		<>
			<Hero />
			<ShowOne />
			<ShowTwo />
			<ShowThree />
			<ShowFour />
			<Faq />
			<Footer />
		</>
	);
}
