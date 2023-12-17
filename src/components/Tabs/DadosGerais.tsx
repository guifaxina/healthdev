import { useForm } from "react-hook-form";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Input } from "../ui/input";
import Image from "next/image";
import InputMask from "react-input-mask";
import { ChangeEvent, useState } from "react";

export default function DadosGerais() {
  const [file, setFile] = useState<File>();

  const [preUploadImage, setPreUploadImage] = useState<string>();

  const [editButton, setEditButton] = useState(false);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setPreUploadImage(URL.createObjectURL(e.target.files[0]));
    }
  }

  type idInputValue = {
    value: "cpf" | "rg" | "cns";
  }[];

  const idInputs: idInputValue = [
    { value: "cpf" },
    { value: "rg" },
    { value: "cns" },
  ];

  type TDadosGeraisForm = {
    name: string;
    birthdate: string;
    sex: "masculino" | "feminino";
    email: string;
    phone: string;
    rg: string;
    cpf: string;
    cns: string;
  };

  const { register, handleSubmit } = useForm<TDadosGeraisForm>();

  function saveChanges(e: TDadosGeraisForm) {
    console.log(e);
  }

  return (
    <>
      <div className="flex flex-row justify-between border-b-[1px] pb-8">
        <div>
          <h1 className="text-lg font-medium text-[#505050] mb-2">
            Informações pessoais
          </h1>
          <h2 className="text-sm text-[#909090]">
            Atualize sua foto e dados pessoais aqui.
          </h2>
        </div>
        {editButton ? (
          <span className="flex gap-2">
            <button
              className="bg-white border-[1px] mt-3 px-5 h-10 rounded-sm text-[#505050] text-sm 
              font-medium bottom-0 right-0 hover:bg-zinc-100 duration-200"
              onClick={() => setEditButton(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-cyan-500 mt-3 px-8 h-10 rounded-sm text-white text-sm 
              font-medium bottom-0 right-0 hover:bg-cyan-600 duration-200"
              onClick={() => setEditButton(false)}
            >
              Salvar
            </button>
          </span>
        ) : (
          <button
            className="bg-cyan-500 mt-3 px-8 h-10 rounded-sm text-white text-sm 
            font-medium bottom-0 right-0 hover:bg-cyan-600 duration-200"
            onClick={() => setEditButton(true)}
          >
            Editar
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(saveChanges)}>
        <div className="mt-8 border-b-[1px] pb-14">
          <span className="text-sm text-[#707070]">Nome / Sobrenome</span>
          <input
            {...register("name")}
            className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100
            text-[13px] text-[#505050] rounded-sm w-2/4 absolute left-2/4 -translate-x-1/2 placeholder:text-[#505050]"
            placeholder="Guilherme da Silva Faxina"
          />
        </div>

        <div className="mt-8 flex flex-row border-b-[1px] pb-14">
          <span className="text-sm text-[#707070]">Nascimento / Sexo</span>
          <div className="w-2/4 flex gap-8 absolute left-2/4 -translate-x-1/2">
            <InputMask
              {...register("birthdate")}
              mask="99 / 99 / 9999"
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] placeholder:text-[#505050]"
              placeholder="01 / 01 / 1995"
            />
            <select
              {...register("sex")}
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[8px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] bg-white"
            >
              <option value="" disabled className="text-[#505050]">
                Selecione uma opção
              </option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-row border-b-[1px] pb-[132px]">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#707070] font-medium">Sua foto</span>
            <span className="text-sm text-[#909090] ">
              Isso será exibido no seu perfil.
            </span>
          </div>
          <div className="w-2/4 absolute left-2/4 -translate-x-1/2 flex flex-row gap-10">
            <Avatar className="w-20 h-20 border-[1px] border-[#D3D3D3]">
              <AvatarImage src={preUploadImage} className="object-cover" />
              <AvatarFallback className="text-[#707070]">Foto</AvatarFallback>
            </Avatar>
            <Input
              type="file"
              id="files"
              className="hidden"
              accept="image/png, image/jpeg, image/svg"
              onChange={handleFileChange}
            />
            <label
              htmlFor="files"
              className="h-[140px] border-[1px] w-full flex flex-col justify-center items-center gap-3"
            >
              <Image
                src="/icons/upload.svg"
                alt="upload"
                height={40}
                width={40}
              />
              <span className="text-sm w-[300px] text-center">
                <span className="text-cyan-600">Clique para fazer upload </span>
                <span className="text-[#505050]">
                  ou arraste e solte SVG, PNG ou JPG (máximo de 800x800)
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="mt-8 pb-14 flex flex-row border-b-[1px]">
          <span className="text-sm text-[#707070]">Email / Telefone</span>
          <div className="w-2/4 flex gap-8 absolute left-2/4 -translate-x-1/2">
            <span className="w-full relative flex items-center">
              <input
                {...register("email")}
                className="w-full border-[1px] border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
                text-[13px] text-[#505050] pl-12 placeholder:text-[#505050]"
                placeholder="email@teste.com"
              />
              <Image
                src="/icons/email.svg"
                alt=""
                width={20}
                height={20}
                className="absolute left-4"
              />
            </span>

            <span className="w-full relative flex items-center">
              <InputMask
                {...register("phone")}
                className="w-full border-[1px] border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
                text-[13px] text-[#505050] pl-12 placeholder:text-[#505050]"
                placeholder="(85) 95555-4444"
                mask="(99) 99999-9999"
              />
              <Image
                src="/icons/telephone.svg"
                alt=""
                width={20}
                height={20}
                className="absolute left-4"
              />
            </span>
          </div>
        </div>

        <div className="mt-8 pb-32 flex flex-row">
          <span className="text-sm text-[#707070]">RG / CPF / CNS</span>
          <div className="w-2/4 left-2/4 -translate-x-1/2 flex flex-row absolute gap-8">
            {idInputs.map(({ value }) => {
              return (
                <input
                  {...register(value)}
                  key={value}
                  className="border-[1px] w-full border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
                  text-[13px] text-[#505050] placeholder:text-[#505050]"
                  placeholder="000000000"
                />
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
}
