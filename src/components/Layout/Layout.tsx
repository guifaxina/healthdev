import Menu from "./Menu";
import Header from "./Header";
import Tabs from "./Tabs";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Menu />
      <Header />
      <Tabs/>
    </div>
  );
}