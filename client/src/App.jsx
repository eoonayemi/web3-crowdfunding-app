// import { useThemeContext } from "./contexts/ThemeContext";

import { Route, Routes } from "react-router-dom";
import {
  CampaignDetails,
  CreateCampaign,
  Dashboard,
  Profile,
  SearchedCampaigns,
} from "./pages";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#13131a] min-h-screen">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/campaign-details/:title"
            element={<CampaignDetails />}
          />
          <Route path="/search" element={<SearchedCampaigns />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
};

export default App;
