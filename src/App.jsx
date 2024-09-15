import HeaderLayout from "./components/header/HeaderLayout";
import { Outlet } from "react-router-dom";
import { ItemContextProvider } from "./context/ItemContextProvider";

export default function App() {
  return (
    <>
      <ItemContextProvider>
        <HeaderLayout />
        <div className="container mx-auto min-h-screen  flex justify-center items-center ">
          <div className="w-1/3 shadow-lg px-3 py-4">
            <Outlet />
          </div>
        </div>
      </ItemContextProvider>
    </>
  );
}
