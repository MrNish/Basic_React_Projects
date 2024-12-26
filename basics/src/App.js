import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Greetings from "./Greetings";

function App() {
  return (
    <div>
      <h1>Hello From ReactJs</h1>
      <Header />
      <Greetings name = {'Pooja'}></Greetings>
      <Greetings name = {'Ayush'}></Greetings>
      <Greetings name = {'Govind'}></Greetings>
      {/* <Home name = {"poja"} age = {24}></Home> */}
      {/* <About></About> */}
      {/* <Contact></Contact> */}
    </div>
  );
}

export default App;
