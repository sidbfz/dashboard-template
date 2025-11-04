import dashboardLogo from "@/assets/logos/dashboard.png";
import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={dashboardLogo}
      width={150}
      height={40}
      alt="Dashboard Logo"
      className="h-10 w-auto"
    />
  );
}
