import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
function Layout() {
  return (
    <>
      <div>
        <Header />
        <div>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
