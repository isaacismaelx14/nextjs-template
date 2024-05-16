import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Locale, i18n } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
  params: { lang: Locale };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  const metadata = dictionary.default.metadata;

  return {
    title: metadata.title,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
