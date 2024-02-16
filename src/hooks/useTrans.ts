import { useRouter } from "next/router";
import en from "../../public/langs/en.json";
import vi from "../../public/langs/vi.json";

const useTrans = () => {
  const { locale } = useRouter();

  const trans = locale === "vi" ? vi : en;

  return trans;
};

export default useTrans;
