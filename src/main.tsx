import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store/index.tsx";
import { Provider } from "react-redux";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
        <Provider store={store}>
                <App />    
        </Provider>
  

);
           