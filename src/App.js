import Hero from './components/Hero';
import Notice from './components/Notice';

/**
 * render /> is like innerHTML in js
 */
export default function App() {
  return (
    <main>
      <Notice />
      <Hero />
    </main>
  );
}
