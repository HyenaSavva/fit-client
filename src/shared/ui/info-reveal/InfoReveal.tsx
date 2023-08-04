import { FC, ReactElement, useState } from "react";

interface InfoRevealProps {
  reveal: ReactElement;
  size?: string;
}

export const InfoReveal: FC<InfoRevealProps> = ({
  reveal,
  size = "1.5rem",
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <i
        className="pi pi-eye"
        style={{ fontSize: size }}
        onClick={() => setOpen(!open)}
      />
      {open ? reveal : <div style={{ fontSize: size }}>Reveal info</div>}
    </div>
  );
};
