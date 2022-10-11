import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import LayoutMiddle from "./views/layoutMiddle/LayoutMiddle";
import HomeView from "./views/homeViewFolder/HomeView";
import DetailsView from "./views/detailsScreenFolder/DetailsView";
import NoPage from "./views/errorPage/NoPage";
import DetailsScreen from "./components/detailsScreen/DetailsScreen";
import Home from "./components/home/Home";
import DataEpi from "./components/fetchingDataEpi/DataEpi";
import LogInView from "./views/logInView/LogInView";
import RegistrationView from "./views/registrationView/RegistrationView";
import PopUpContext from "./components/useContext/PopUpContext";
import PagesContext from "./components/useContext/PagesContext";

function App() {

  return (
    <div className="App">
        <PopUpContext>
          <PagesContext>
            <Routes>
              <Route path="/" element={<LayoutMiddle />}>
                <Route index element={<HomeView />} />
                <Route path="details" element={<DetailsView />} />
                <Route path="episodes/:id" element={<DetailsScreen />} />
                <Route path="listEpisodes" element={<DataEpi />} />
                <Route path="login" element={<LogInView />} />
                <Route path="registration" element={<RegistrationView />} />
                <Route path="home" element={<Home />} />
                <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>
          </PagesContext>
        </PopUpContext>
    </div>
  );
}

export default App;
