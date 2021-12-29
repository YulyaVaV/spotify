import './App.scss';

//@ts-ignore
import { Header, Right, Left, Middle, Footer } from './components/index.tsx';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Left />
        <Middle />
        <Right />
      </div>
      <Footer />
    </div>
  );
}

export default App;
