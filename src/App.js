import './index.css';
import SearchForm from './SearchForm';
import Stories from './Stories';
import Buttons from './Buttons';
import Footer from './Footer';
function App() {
  return (
    <div className="wrapper">
<div className="main">
  <div className="news">
  <div className="container">
  <SearchForm></SearchForm>
  <Stories></Stories>
  <Buttons></Buttons>
  </div>
  </div>
</div>
<Footer></Footer>
    </div>
  );
}

export default App;
