import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
};

export default function AppButton({
  href,
  children,
  variant = "secondary",
  download = false,
}: Props) {
  const variantClass =
    variant === "primary" ? "app-button--primary" : "app-button--secondary";

  return (
    <a
      href={href}
      {...(download ? { download: true } : {})}
      className={["app-button", variantClass].join(" ")}
    >
      {children}
    </a>
  );
}
