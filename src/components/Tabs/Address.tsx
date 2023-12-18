import { useState } from "react";
import PersonalInfo from "../Layout/PersonalInfo";
import { useForm } from "react-hook-form";

export default function Address() {
  const [editButton, setEditButton] = useState<boolean>(false);

  const { register, handleSubmit, reset } = useForm<TAddressForm>();

  type Tl10nInputs = {
    value: string;
    placeholder: string;
    name: "address" | "number" | "neighbourhood";
  }[];

  const l10nInputs: Tl10nInputs = [
    { value: "text", placeholder: "Logradouro", name: "address" },
    { value: "number", placeholder: "Número", name: "number" },
    { value: "text", placeholder: "Bairro", name: "neighbourhood" },
  ];

  type TAddressForm = {
    uf: string;
    city: string;
    address: string;
    number: number;
    neighbourhood: string;
    complement: string;
  };

  function saveChanges(e: TAddressForm) {
    console.log(e);
    setEditButton(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveChanges)}>
        <div className="flex flex-row justify-between">
          <PersonalInfo
            subtitle="Atualize seu endereço aqui."
            className="border-b-[1px] pb-8"
          />
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
        <div className="mt-8 flex flex-row border-b-[1px] pb-14">
          <span className="text-sm text-[#707070]">
            UF / Municipio de residência
          </span>
          <div className="w-2/4 flex gap-8 absolute left-2/4 -translate-x-1/2">
            <select
              {...register("uf")}
              disabled={!editButton}
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[8px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] bg-white"
            >
              <option value="" disabled selected className="text-[#505050]">
                Selecionar
              </option>
              <option value="ce">CE</option>
              <option value="rj">RJ</option>
            </select>
            <select
              {...register("city")}
              disabled={!editButton}
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[8px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] bg-white"
            >
              <option value="" disabled selected className="text-[#505050]">
                Selecionar
              </option>
              <option value="caucaia">Caucaia</option>
              <option value="fortaleza">Fortaleza</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex flex-row border-b-[1px] pb-14">
          <span className="text-sm text-[#707070]">
            Logradouro / Número / Bairro
          </span>
          <div className="w-2/4 flex absolute left-2/4 -translate-x-1/2">
            <span className="w-full relative flex items-center gap-8">
              {l10nInputs.map((input) => {
                return (
                  <input
                    {...register(input.name)}
                    disabled={!editButton}
                    key={input.placeholder}
                    placeholder={input.placeholder}
                    type={input.value}
                    className="w-full border-[1px] border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
                    text-[13px] text-[#505050]"
                  />
                );
              })}
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-row">
          <span className="text-sm text-[#707070]">Complemento</span>
          <div className="w-2/4 absolute left-2/4 -translate-x-1/2">
            <input
              {...register("complement")}
              disabled={!editButton}
              type="text"
              placeholder="Complemento"
              className="w-full border-[1px] border-zinc-300 h-10 py-[14px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050]"
            />
          </div>
        </div>
      </form>
    </>
  );
}
