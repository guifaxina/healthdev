import Image from "next/image";
import Notification from "../../../public/icons/notification";
import Settings from "../../../public/icons/settings";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../ui/tooltip";

export default function Header() {
  const date = new Date();
  const day = date.getDay() as keyof typeof dayInPt;
  const numericDay = date.getDate();
  const month = date.getMonth() as keyof typeof monthInPt;
  const year = date.getFullYear();

  const dayInPt = {
    0: "Domingo",
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado",
  };

  const monthInPt = {
    0: "Janeiro",
    1: "Fevereiro",
    2: "Março",
    3: "Abril",
    4: "Maio",
    5: "Junho",
    6: "Julho",
    7: "Agosto",
    8: "Setembro",
    9: "Outubro",
    10: "Novembro",
    11: "Dezembro",
  };

  return (
    <header className="h-[90px] w-screen border-b-[1px] flex items-center justify-between">
      <div className="flex flex-col ml-24">
        <div className="flex flex-row items-center text-sm text-zinc-700">
          <Image
            src="/icons/home.svg"
            alt="inicio"
            width="20"
            height="20"
            className="mb-2 mr-2"
          />
          <Image
            src="/icons/chevronright.svg"
            alt=""
            width="16"
            height="16"
            className="mb-1 mr-2"
          />
          <span className="mr-2">Inicio</span>
          <Image
            src="/icons/chevronright.svg"
            alt=""
            width="16"
            height="16"
            className="mb-1 mr-2"
          />
          <span className="font-medium text-cyan-600">Perfil</span>
        </div>
        <span className="text-[13px] text-zinc-700">
          {dayInPt[day] +
            ", " +
            numericDay +
            " de " +
            monthInPt[month] +
            " de " +
            year}
        </span>
      </div>

      <div className="mr-10 flex flex-row items-center">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger>
              <span className="group mr-3 w-8 h-8 rounded-full flex items-center justify-center hover:bg-cyan-600/5">
                <Settings
                  fill="#909090"
                  className="group-hover:fill-cyan-500 duration-200"
                />
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className=" bg-zinc-700 text-zinc-200 mr-2"
            >
              <span>Configurações</span>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger>
              <span className="group mr-5 w-8 h-8 rounded-full flex items-center justify-center hover:bg-cyan-600/5">
                <Notification
                  fill="#909090"
                  className="group-hover:fill-cyan-500 duration-200"
                />
              </span>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className=" bg-zinc-700 text-zinc-200 mr-4"
            >
              <span>Notificações</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <span className="border-l-[1px] h-6 mr-3"></span>
        <div className="flex flex-col mr-4">
          <span className="text-md text-black">Clinica Odontolife</span>
          <span className="text-sm text-zinc-500">
            Unidade 2 - Consultorio 1
          </span>
        </div>
        <Image
          src="/icons/chevrondown.svg"
          alt="chevron downwards"
          width={20}
          height={20}
        />
      </div>
    </header>
  );
}
