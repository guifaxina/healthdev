import Image from "next/image";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function Menu() {
  return (
    <aside className="w-16 h-screen border-r-[1px] flex flex-col items-center fixed bg-white">
      <Avatar className="mt-8 mb-8 border-[1px] border-cyan-400 border-opacity-10">
        <AvatarImage src="https://images.unsplash.com/photo-1613324996029-f6190a17838f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </Avatar>
      <div className="w-[6px] h-[6px] rounded bg-green-300 absolute top-9 left-10"></div>
      <button>
        <Image
          src="/icons/expandprofile.svg"
          alt="expandir perfil"
          width={50}
          height={50}
          className="absolute left-9 top-[90px]"
        />
      </button>

      <hr className="w-6 mb-6" />
      <nav className="flex flex-col items-center">
        <ul className="flex flex-col items-center gap-[2px]">
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/home.svg" alt="inicio" width={20} height={20}/>
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/idcard.svg" alt="usuário" width={20} height={20} />
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/building.svg" alt="clinicas" width={20} height={20} />
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/monitor.svg" alt="painel atendimento" width={18} height={18} />
          </li>
        </ul>
        <hr className="mt-6 mb-10 w-6" />
        <ul className="flex flex-col gap-[2px] items-center">
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image
              src="/icons/notification.svg"
              alt="notificações"
              width={20}
              height={20}
            />
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/helpcircle.svg" alt="central de ajuda" width={20} height={20} />
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image src="/icons/settings.svg" alt="configurações" width={20} height={20} />
          </li>
          <li className="w-8 h-8 hover:bg-[#eeeeee] duration-200 flex items-center justify-center">
            <Image
              src="/icons/arrowbackwards.svg"
              alt="sair"
              width={20}
              height={20}
            />
          </li>
        </ul>
        <div className="border-[1px] rounded border-cyan-500 w-8 h-8 flex justify-center items-center mt-40">
          <Image src="/icons/chat.svg" alt="chat" width={16} height={14} />
        </div>
      </nav>
    </aside>
  );
}
