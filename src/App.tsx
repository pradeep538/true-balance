import store from "./redux/store";
import Network from "./network/network";
import { Provider } from "react-redux";
import "./styles.css";

import AppContainer from "./views/container/AppContainer/AppContainer";
import ErrorBoundry from "./views/components/ErrorBoundry/ErrorBoundry";
import useCaseInstance from "./usecases";
import Api from "./network/api";



function App() {
  let apiInstance = new Api("truebalance.com" /* API_BASE_URL */, 3000);
  useCaseInstance.apiInstance = apiInstance;
  useCaseInstance.storeInstance = store;
  /* useCaseInstance.initialize({
    api: apiInstance,
    store: store,
  }); */
  return (
    <Provider store={store}>
      <div className="App">
        <ErrorBoundry>
          <AppContainer />
        </ErrorBoundry>
      </div>
    </Provider>
  );
}

export default App;
