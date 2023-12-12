import Image from "next/image";

export default function Aside() {
  return (
    <aside className="w-16 h-screen border-r-2 flex flex-col items-center">
      <p>pfp</p>
      <Image src="" alt="" width={32} height={32} />
      {/* Profile Pic */}
      <hr className="w-6" />
      <nav>
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
        <hr className="w-6" />
        <ul>
          <li>a</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </nav>
    </aside>
  )
}
