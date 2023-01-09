import * as React from "react";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import NavigationBar from "./components/Common/NavigationBar";
import CustomerRouting from "./routing/CustomerRouting";
export default function App() {
  return (
    <>
      <Header />

      <div className="bg-white border-gray-200 px-4 lg:px-6  dark:bg-gray-800">
        <div className="flex">
          <div className="w-80 border-r-[1px] py-[2rem]">
            <NavigationBar />
          </div>
          <div className="w-full p-[2rem]">
            <CustomerRouting />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
