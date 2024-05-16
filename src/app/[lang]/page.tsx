import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: { lang: Locale };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  const tHome = dictionary.home;

  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center mt-10">{tHome.title}</h1>
    </main>
  );
}
