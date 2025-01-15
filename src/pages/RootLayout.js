import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

export default function RootLayout() {
  return (
    <main>
      <NavigationBar />
      <Outlet />
    </main>
  );
}
