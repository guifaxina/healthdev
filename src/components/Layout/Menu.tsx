import Image from "next/image";
import { useState } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipTrigger,
  TooltipProvider,
  TooltipContent,
} from "../ui/tooltip";

export default function Menu() {
  const [expanded, setExpanded] = useState(false);

  function handleExpandedChange() {
    expanded ? setExpanded(false) : setExpanded(true);
  }

  let menuUpperHalf = [
    { src: "home", alt: "Inicio" },
    { src: "idcard", alt: "Consultório" },
    { src: "building", alt: "Clinicas" },
    { src: "monitor", alt: "Painel de atendimento" },
  ];

  let menuBottomHalf = [
    { src: "notification", alt: "Notificações" },
    { src: "helpcircle", alt: "Central de ajuda" },
    { src: "settings", alt: "Configurações" },
    { src: "arrowbackwards", alt: "Sair" },
  ];

  return (
    <aside
      className={`transition-all h-screen border-r-[1px] flex flex-col bg-white fixed z-10 ${
        expanded ? "w-[270px] items-start pl-[17px]" : "w-16 items-center"
      }`}
    >
      <div className="flex flex-row mt-8 mb-8">
        <Avatar className="border-[1px] border-cyan-400 border-opacity-10">
          <AvatarImage
            src="https://images.unsplash.com/photo-1613324996029-f6190a17838f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="object-cover"
          />
        </Avatar>
        {expanded && (
          <div className="flex flex-col ml-3">
            <span className="text-[#303030] text-sm">Guilherme Faxina</span>
            <span className="text-[#909090] text-sm -mt-1">Médico</span>
          </div>
        )}
      </div>

      <div
        className={`w-[6px] h-[6px] rounded bg-green-300 absolute top-9  ${
          expanded ? "left-[42px]" : "left-10"
        }`}
      ></div>
      <button onClick={() => handleExpandedChange()}>
        <Image
          src={
            expanded ? "/icons/flippedexpand.svg" : "/icons/expandprofile.svg"
          }
          alt="expandir perfil"
          width={50}
          height={50}
          className={`absolute top-[90px] ${expanded ? "-right-6" : "left-9"}`}
        />
      </button>

      {expanded ? (
        <span className="font-medium mb-6 text-[13px] text-[#909090]">
          Ferramentas
        </span>
      ) : (
        <hr className={`w-6 mb-6`} />
      )}
      <nav className={`flex flex-col w-full ${expanded ? "items-start" : "items-center"}`}>{/* W-FULL */}
        <ul className={`flex flex-col gap-[3px] ${expanded ? "w-full items-start" : "items-center"}`}>
          {menuUpperHalf.map(({ src, alt }) => {
            return (
              <TooltipProvider delayDuration={200} key={src}>
                <Tooltip>
                  <TooltipTrigger className={`w-full ${expanded && "pr-4"}`}>
                    <li
                      className={`h-8 flex hover:bg-[#eeeeee]  items-center ${
                        expanded ? "w-full" : "justify-center w-8"
                      }`}
                    >
                      <Image
                        src={"/icons/" + src + ".svg"}
                        alt={alt}
                        width={20}
                        height={20}
                        className={`${expanded && "ml-[6px]"}`}
                      />
                      {expanded && (
                        <span className="text-sm flex flex-row whitespace-nowrap ml-4 mt-[3px] text-[#909090]">
                          {alt}
                        </span>
                      )}
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className={` bg-zinc-700 text-zinc-200 ${
                      expanded && "hidden"
                    }`}
                  >
                    <span>{alt}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </ul>

        <hr
          className={`mt-6 mb-10 w-6 ${
            expanded && "w-[230px] absolute bottom-[370px]"
          }`}
        />

        <ul
          className={`flex flex-col gap-[3px] ${
            expanded ? "mt-[72px] w-full items-start" : "items-center"
          }`}
        >
          {expanded && (
            <span className="font-medium text-[13px] text-[#909090] mb-4">
              Outros
            </span>
          )}
          {menuBottomHalf.map(({ src, alt }) => {
            return (
              <TooltipProvider delayDuration={200} key={src}>
                <Tooltip>
                  <TooltipTrigger className={`w-full ${expanded && "pr-4"}`}>
                    <li
                      key={src}
                      className={`h-8 hover:bg-[#eeeeee] flex items-center ${
                        expanded ? "w-full" : "justify-center w-8"
                      }`}
                    >
                        <Image
                          src={"/icons/" + src + ".svg"}
                          alt={alt}
                          width={20}
                          height={20}
                          className={`${expanded && "ml-[6px]"}`}
                        />
                        {expanded && (
                          <span className="text-sm flex flex-row whitespace-nowrap ml-4 mt-[3px] text-[#909090]">
                            {alt}
                          </span>
                        )}
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className={` bg-zinc-700 text-zinc-200 ${
                      expanded && "hidden"
                    }`}
                  >
                    <span>{alt}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </ul>
        <div className="border-[1px] rounded border-cyan-500 w-8 h-8 flex justify-center items-center mt-40">
          <Image src="/icons/chat.svg" alt="chat" width={16} height={14} />
        </div>
      </nav>
    </aside>
  );
}
