import './App.css';
import ImageList from './componets/ImageList';
import SearchBar from './componets/SearchBar';

function App() {
  return (
    <div className='maxWidth'>
      <SearchBar/>
      <ImageList/>
    </div>
  );
}

export default App;
