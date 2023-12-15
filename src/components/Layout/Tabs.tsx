import Link from "next/link";
import Arrow from "../../../public/icons/arrow";

export default function Tabs() {
  let tabs = [
    { id: "generalData", value: "Dados gerais" },
    { id: "address", value: "Endereço" },
    { id: "password", value: "Senha" },
    { id: "professionalData", value: "Dados profissionais" },
  ];

  return (
    <div className="ml-24 pr-10">
      <div className="mt-10 flex flex-row gap-3">
        <Link href="/">
          <Arrow fill="#505050" className="hover:fill-cyan-600 duration-200" />
        </Link>
        <h1 className="text-[#505050] text-md font-medium">
          Configurações de perfil
        </h1>
      </div>

      <nav className="border-b-[1px]">
        <ul className="flex flex-row gap-9 mt-10 text-[#707070]">
          {tabs.map(({ id, value }) => {
            return (
              <li key={id}>
                <Link href={"/dados-gerais"}>
                  <button
                    className="hover:text-cyan-600 duration-200 focus:text-cyan-600 focus:border-b-2 
                  pb-6 px-3 focus:border-cyan-600 focus:font-medium"
                  >
                    {value}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
