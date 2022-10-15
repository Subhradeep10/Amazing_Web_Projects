import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "@assets/routes";
import { store } from "@redux/store";

function App() {
  return (
    <Suspense fallback={null}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </Suspense>
  );
}

export default App;
