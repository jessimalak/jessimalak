interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
}

export default function Icon({ name, size, color }: IconProps) {
    return (
      //@ts-ignore
    <ion-icon name={name} style={{ ...(size ? { fontSize: size } : "") }} />
  );
}
