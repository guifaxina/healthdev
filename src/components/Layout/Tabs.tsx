import Link from "next/link";
import Arrow from "../../../public/icons/arrow";

export default function Tabs() {
  return (
    <div className="ml-24 pr-10">
      <div className="mt-10 flex flex-row gap-3">
        <Link href="/">
          <Arrow fill="#505050" className="hover:fill-cyan-600 duration-200"/>
        </Link>
        <h1 className="text-[#505050] text-md font-medium">
          Configurações de perfil
        </h1>
      </div>

      <nav className="border-b-[1px]">
        <ul className="flex flex-row gap-9 mt-10 text-[#707070]">
          <li>
            <Link href={"/dados-gerais"}>
              <button
                className="hover:text-cyan-600 duration-200 focus:text-cyan-600 focus:border-b-2 
                  pb-6 px-3 focus:border-cyan-600 focus:font-medium"
              >
                Dados gerais
              </button>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <button
                className="hover:text-cyan-600 duration-200 focus:text-cyan-600 focus:border-b-2 
                  pb-6 px-3 focus:border-cyan-600 focus:font-medium"
              >
                Endereço
              </button>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <button
                className="hover:text-cyan-600 duration-200 focus:text-cyan-600 focus:border-b-2 
                  pb-6 px-3 focus:border-cyan-600 focus:font-medium"
              >
                Senha
              </button>
            </Link>
          </li>
          <li>
            <Link href={""}>
              <button
                className="hover:text-cyan-600 duration-200 focus:text-cyan-600 focus:border-b-2 
                  pb-6 px-3 focus:border-cyan-600 focus:font-medium"
              >
                Dados Profissionais
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
