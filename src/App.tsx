import './App.scss';

//@ts-ignore
import { Header, ArtistFriends, Sidebar, ArtistInfo, Footer } from './App/index.tsx';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Sidebar />
        <ArtistInfo />
        <ArtistFriends />
      </div>
      <Footer />
    </div>
  );
}

export default App;
