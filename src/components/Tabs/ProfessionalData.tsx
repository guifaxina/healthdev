import { useState } from "react";
import { useForm } from "react-hook-form";
import PersonalInfo from "../Layout/PersonalInfo";
import { Switch } from "../ui/switch";

export default function ProfessionalData() {
  const [isMemedSync, setIsMemedSync] = useState<boolean>(true);

  const [editButton, setEditButton] = useState<boolean>(false);

  type TProfessionalDataForm = {
    council: string;
    councilState: string;
    councilNumber: string;
    specialty: string;
    rqe: string;
    idUser: string;
  };

  const { register, handleSubmit, reset } = useForm<TProfessionalDataForm>();

  function saveChanges(e: TProfessionalDataForm) {
    console.log({ ...e, memedSync: isMemedSync });
    setEditButton(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveChanges)}>
        <div className="flex flex-row border-b-[1px] pb-8 justify-between">
          <PersonalInfo subtitle="Atualize seus dados profissionais aqui." />
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

        <div className="mt-8 border-b-[1px] pb-14 flex flex-row">
          <span className="text-sm text-[#707070]">
            Conselho / Estado Conselho
          </span>
          <div className="w-2/4 absolute flex gap-8 flex-row left-2/4 -translate-x-2/4">
            <select
              {...register("council")}
              disabled={!editButton}
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[8px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] bg-white"
            >
              <option value="" disabled selected className="text-[#505050]">
                Selecionar
              </option>
              <option value="crm">CRM</option>
              <option value="copon">COPON</option>
            </select>
            <select
              {...register("councilState")}
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
          </div>
        </div>

        <div className="mt-8 border-b-[1px] flex flex-row pb-14">
          <span className="text-sm text-[#707070]">Número do conselho</span>
          <div className="w-2/4 left-2/4 -translate-x-2/4 absolute">
            <input
              {...register("councilNumber")}
              disabled={!editButton}
              placeholder="Número do conselho"
              type="number"
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm w-full"
            />
          </div>
        </div>

        <div className="mt-8 border-b-[1px] flex flex-row pb-14">
          <span className="text-sm text-[#707070]">Especialidade / RQE</span>
          <div className="w-2/4 absolute left-2/4 -translate-x-2/4 flex gap-8">
            <select
              {...register("specialty")}
              disabled={!editButton}
              className="w-2/4 border-[1px] border-zinc-300 h-10 py-[8px] p-4 focus:outline-cyan-100
              text-[13px] text-[#505050] bg-white"
            >
              <option value="" disabled selected className="text-[#505050]">
                Selecionar
              </option>
              <option value="cardiologista">Cardiologista</option>
              <option value="ginecologista">Ginecologista</option>
            </select>
            <input
              {...register("rqe")}
              disabled={!editButton}
              placeholder="RQE"
              type="number"
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm w-2/4"
            />
          </div>
        </div>

        <div className="mt-8 border-b-[1px] pb-28 flex flex-row">
          <span className="text-sm text-[#707070]">
            ID user / Sincronização MEMED
          </span>
          <div className="w-2/4 absolute left-2/4 -translate-x-2/4 flex gap-8">
            <input
              {...register("idUser")}
              disabled={!editButton}
              placeholder="ID user"
              type="number"
              className="h-10 py-[14px] p-4 border-[1px] border-zinc-300 focus:outline-cyan-100 text-[13px] text-[#505050] rounded-sm w-2/4"
            />
            <span className="flex items-center w-2/4">
              <Switch
                checked={isMemedSync}
                onCheckedChange={() => setIsMemedSync(!isMemedSync)}
                disabled={!editButton}
              />
              <label className="text-sm text-[#505050] ml-3">
                {isMemedSync ? "Ativo" : "Inativo"}
              </label>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}
