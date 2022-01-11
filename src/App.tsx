import './App.scss';

//@ts-ignore
import { Header, Right, Left, ArtistInfo, Footer } from './components/index.tsx';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Left />
        <ArtistInfo />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
