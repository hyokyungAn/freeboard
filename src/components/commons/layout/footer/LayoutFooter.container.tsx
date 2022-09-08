import { useRouter } from "next/router";
import LayoutFooterUI from "./LayoutFooter.presenter";

export default function LayoutFooter() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <LayoutFooterUI
      onClickLogo={onClickLogo}
    />
  );
}
