import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

function App() {
  return (
    <div id="app-container">
      <div id="header">
        <Header />
      </div>
      <div id="content">
        <Content />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;