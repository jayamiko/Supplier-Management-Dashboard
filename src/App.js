import { Route, Routes } from "react-router-dom";
import SupplierManagementTemplate from "./components/templates/SupplierManagementTemplate";
import SupplierList from "./components/organisms/SupplierList";
import Configurations from "./components/organisms/Configurations";
import ReviewAndApproval from "./components/organisms/ReviewAndApproval";
import SupplierDetailManagementPage from "./components/pages/SupplierDetailManagementPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SupplierManagementTemplate />}>
        <Route index element={<h2>Dashboard</h2>} />
        <Route path="supplier-list" element={<SupplierList />} />
        <Route
          path="supplier-dashboard"
          element={<h2>Supplier Dashboard</h2>}
        />
        <Route path="supplier-review" element={<ReviewAndApproval />} />
        <Route path="supplier-config" element={<Configurations />} />
        <Route path="funnel-overview" element={<h2>Funnel Overview</h2>} />
        <Route path="funnel-reports" element={<h2>Funnel Reports</h2>} />
        <Route path="supplier/:id" element={<SupplierDetailManagementPage />} />
      </Route>
    </Routes>
  );
}

export default App;
