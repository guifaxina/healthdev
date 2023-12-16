import Link from "next/link";
import { useState } from "react";
import Arrow from "../../../public/icons/arrow";
import { motion } from "framer-motion";
import DadosGerais from "../Tabs/DadosGerais";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("");

  const tabs = [
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
        <ul className="flex flex-row gap-5 mt-10 text-[#707070]">
          {tabs.map(({ id, value }) => {
            return (
              <li key={id}>
                <div>
                  {activeTab === id ? (
                    <>
                      <button
                        className="relative text-cyan-600 
                    pb-6 px-3 font-medium"
                        onClick={() => setActiveTab(id)}
                      >
                        {activeTab === id && (
                          <motion.div
                            layoutId="blue-border"
                            className="absolute inset-0 border-b-2 border-cyan-500"
                            transition={{ duration: 0.15 }}
                          />
                        )}
                        {value}
                      </button>
                    </>
                  ) : (
                    <button
                      className="relative hover:text-cyan-600 duration-200 focus:text-cyan-600 
                  pb-6 px-3 focus:font-medium"
                      onClick={() => setActiveTab(id)}
                    >
                      {value}
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      <main className="mt-[50px]">
        <DadosGerais />
      </main>
    </div>
  );
}
