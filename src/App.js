import { Provider } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import store from "./store";
import Auth from "./components/Auth";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Auth />
      <Counter />
    </Provider>
  );
}

export default App;
