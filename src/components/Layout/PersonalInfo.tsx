type TProps = {
  subtitle: string
}

export default function PersonalInfo(props: TProps) {
  return (
    <div>
      <h1 className="text-lg font-medium text-[#505050] mb-2">
        Informações pessoais
      </h1>
      <h2 className="text-sm text-[#909090]">
        {props.subtitle}
      </h2>
    </div>
  );
}
