import PersonalInfo from "../Layout/PersonalInfo";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";

export default function Password() {
  const [editButton, setEditButton] = useState<boolean>(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordVisible2, setIsPasswordVisible2] = useState<boolean>(false);
  const [isPasswordVisible3, setIsPasswordVisible3] = useState<boolean>(false);

  type TPasswordForm = {
    user: string;
    password: string;
    newPassword: string;
    confirmPassword: string;
  };

  const { register, handleSubmit, reset } = useForm<TPasswordForm>();

  function saveChanges(e: TPasswordForm) {
    console.log(e);
    setEditButton(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveChanges)}>
        <div className="border-b-[1px] pb-8 flex flex-row justify-between">
          <PersonalInfo subtitle="Atualize sua senha aqui." />
          {editButton ? (
            <span className="flex gap-2">
              <button
                className="bg-white border-[1px] mt-3 px-5 h-10 rounded-sm text-[#505050] text-sm
                font-medium bottom-0 right-0 hover:bg-zinc-100 duration-200"
                onClick={() => {
                  setEditButton(false);
                  reset();
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-cyan-500 mt-3 px-8 h-10 rounded-sm text-white text-sm
                font-medium bottom-0 right-0 hover:bg-cyan-600 duration-200"
              >
                Salvar senha
              </button>
            </span>
          ) : (
            <button
              className="bg-cyan-500 mt-3 px-8 h-10 rounded-sm text-white text-sm
              font-medium bottom-0 right-0 hover:bg-cyan-600 duration-200"
              onClick={() => setEditButton(true)}
            >
              Mudar senha
            </button>
          )}
        </div>

        <div className="mt-8 flex flex-row border-b-[1px] pb-14">
          <span className="text-sm text-[#707070]">Usuário / Senha</span>
          <div className="w-2/4 absolute left-2/4 -translate-x-2/4 flex gap-8">
            <input
              {...register("user")}
              disabled={!editButton}
              type="text"
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm w-2/4"
              placeholder="Usuário"
            />
            <span className="w-2/4">
              <input
                {...register("password")}
                disabled={!editButton}
                placeholder="Senha"
                type={isPasswordVisible ? "name" : "password"}
                className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm pl-12 w-full"
              />
              <Image
                src={`${
                  isPasswordVisible
                    ? "/icons/lockselect.svg"
                    : "/icons/lock.svg"
                }`}
                alt="password"
                width={20}
                height={20}
                className="absolute top-[10px] ml-4 cursor-pointer"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              />
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-row">
          <span className="text-sm text-[#707070]">
            Nova senha / Repetir senha
          </span>
          <div className="w-2/4 absolute left-2/4 -translate-x-2/4 flex gap-8">
            <input
              {...register("newPassword")}
              disabled={!editButton}
              type={isPasswordVisible2 ? "name" : "password"}
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm pl-12 w-full"
              placeholder="Nova senha"
            />
            <Image
              src={`${
                isPasswordVisible2 ? "/icons/lockselect.svg" : "/icons/lock.svg"
              }`}
              alt="password"
              width={20}
              height={20}
              className="absolute top-[10px] ml-4 cursor-pointer"
              onClick={() => setIsPasswordVisible2(!isPasswordVisible2)}
            />
            <input
              {...register("confirmPassword")}
              disabled={!editButton}
              type={isPasswordVisible3 ? "name" : "password"}
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm pl-12 w-full"
              placeholder="Repetir senha"
            />
            <Image
              src={`${
                isPasswordVisible3 ? "/icons/lockselect.svg" : "/icons/lock.svg"
              }`}
              alt="password"
              width={20}
              height={20}
              className="absolute top-[10px] ml-4 right-[331px] cursor-pointer"
              onClick={() => setIsPasswordVisible3(!isPasswordVisible3)}
            />
          </div>
        </div>
      </form>
    </>
  );
}
