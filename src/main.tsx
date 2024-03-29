import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import { HashRouter } from "react-router-dom";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </>,
);
