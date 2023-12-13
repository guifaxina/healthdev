import Aside from "./Aside";
import Header from "./Header";


export default function Layout() {
  return (
    <main className="flex flex-row h-screen">
      <Aside />
      <Header />
    </main>
  )
}