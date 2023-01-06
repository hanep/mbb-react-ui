import * as React from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import NavigationBar from "./components/Common/NavigationBar";
import CustomerRouting from "./routing/CustomerRouting";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <div className=" w-60 bg-gray-200 h-96">
          <NavigationBar />
        </div>
        <div className="flex flex-1 bg-blue-50">
          <CustomerRouting />
        </div>
      </div>

      <Footer />
    </>
  );
}
