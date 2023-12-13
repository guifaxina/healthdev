import Menu from "./Menu";
import Header from "./Header";


export default function Layout() {
  return (
    <main className="flex flex-row h-screen">
      <Menu />
      <Header />
    </main>
  )
}