import Footer from "@components/Footer";
import Header from "@components/Header";

function Layout({ children }: any) {
  const privateRoute = window.location.pathname === "/private-route";
  return (
    <div>
      <Header privateRoute={privateRoute} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
