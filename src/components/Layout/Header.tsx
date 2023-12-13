import Image from "next/image";

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
      <div className="flex flex-col ml-8 ">
        <div className="flex flex-row items-center text-sm text-zinc-700">
          <Image
            src="/home.svg"
            alt="home icon"
            width="20"
            height="20"
            className="mb-2 mr-2"
          />
          <Image
            src="/chevronright.svg"
            alt="chevron right"
            width="16"
            height="16"
            className="mb-1 mr-2"
          />
          <span className="mr-2">Inicio</span>
          <Image
            src="/chevronright.svg"
            alt="chevron right"
            width="16"
            height="16"
            className="mb-1 mr-2"
          />
          <span className="font-medium">Perfil</span>
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
        <span className="mr-6">
          <Image
            src="/settings.svg"
            alt="settings icon"
            width={20}
            height={20}
          />
        </span>
        <span className="mr-6">
          <Image
            src="/notification.svg"
            alt="notificaton icon"
            width={20}
            height={20}
          />
        </span>
        <span className="border-l-[1px] h-6 mr-3"></span>
        <div className="flex flex-col mr-4">
          <span className="text-md text-black">Clinica Odontolife</span>
          <span className="text-sm text-zinc-500">
            Unidade 2 - Consultorio 1
          </span>
        </div>
        <Image
          src="/chevrondown.svg"
          alt="chevron downwards"
          width={20}
          height={20}
        />
      </div>
    </header>
  );
}
