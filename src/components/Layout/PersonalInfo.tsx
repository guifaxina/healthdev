type TProps = {
  subtitle: string
  className?: string
}

export default function PersonalInfo({subtitle, className}: TProps) {
  return (
    <div className={className}>
      <h1 className="text-lg font-medium text-[#505050] mb-2">
        Informações pessoais
      </h1>
      <h2 className="text-sm text-[#909090]">
        {subtitle}
      </h2>
    </div>
  );
}
