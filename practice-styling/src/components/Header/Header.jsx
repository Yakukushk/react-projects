import logo from '../../assets/logo.png';
// import styles from './Header.module.css';

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center mt-8 mb-8 md:mb-16">
      <img className="object-contain w-44 h-44 mb-8" src={logo} alt="A canvas" />
      <h1 className="text-xl md:text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-display">ReactArt</h1>
      <p className="text-center text-gray-500">A community of artists and art-lovers.</p>
    </header>
  );
}
