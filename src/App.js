import './App.css';
import Navigation from './components/navigation';
import "tachyons";
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*Todo: Navigation, Logo, ImageLinkForm FaceRecogntion */}
    </div>
  );
}

export default App;
