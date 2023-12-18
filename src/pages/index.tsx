import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center text-2xl">
        <Link href={"/configuracoes-perfil"}>Ir para configurações de perfil</Link>
      </div>
    </>
  )
}
