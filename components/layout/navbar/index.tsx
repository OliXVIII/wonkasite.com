import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { LoginButton } from "@/components/profile/login-button";
import Cart from "@/components/store/cart";
import OpenCart from "@/components/store/cart/open-cart";
import LogoSquare from "@/components/store/logo-square";
import { createLink } from "@/lib/create-link";
import { DataType } from "@/server/fetch-data";
import {
  LocaleDetails,
  defaultLocale,
  localesDetails,
} from "@/types/languages";
import { StaticUiContent, staticUiContent } from "@/types/static-ui-content";
import { MenuContent } from "@/types/ui-content";

import { LanguageSelector } from "./language-selector";
import MobileMenu from "./mobile-menu";
import { ThemeSelector } from "./theme-selector/theme-selector-server";

type NavbarProps = {
  data: DataType;
  locale: LocaleDetails;
  slug?: string;
  searchbar?: boolean;
  inceptionLogo?: boolean;
  domain: string;
  staticUiContent: StaticUiContent;
};

export default function Navbar({
  locale,
  data,
  searchbar,
  slug = "",
  inceptionLogo,
  domain,
  staticUiContent,
}: Readonly<NavbarProps>) {
  const { uiContent, storage, features } = data;
  // const menu = await getMenu("next-js-frontend-header-menu");
  const menu = uiContent.navigation;
  const lang = locale.languageCode;
  const nextLocale =
    locale?.nextLanguage && locale.nextLanguage !== locale.path
      ? localesDetails[locale.nextLanguage]
      : null;
  return (
    <>
      <nav
        className={`flex h-16 w-full items-center justify-between py-2 ${features.navbar?.fixed ? " container fixed z-40 mx-auto" : "relative"} ${inceptionLogo ? "max-sm:pl-16" : ""}`}
      >
        <div className="block flex-none md:hidden">
          <MobileMenu menu={menu} searchbar={searchbar} locale={locale} />
        </div>

        <div className="flex w-full items-center justify-end">
          {!inceptionLogo ? (
            <Link
              href="/"
              className={`flex w-full items-center justify-center max-sm:ml-10 md:mx-6 md:w-auto`}
            >
              <LogoSquare storage={storage} />
            </Link>
          ) : (
            <div>
              <a
                className="absolute left-1 top-0 mx-auto mt-1 h-24 w-24 max-sm:h-20 max-sm:w-20 max-sm:animate-spin-slow max-xs:mt-3 sm:hover:animate-spin-slow"
                href={`/`}
              >
                <Image
                  src={storage?.logo?.navbar?.src ?? "/homepage/logo.png"}
                  alt="logo"
                  fill
                  className="dark:invert"
                />
              </a>
            </div>
          )}

          {searchbar ? (
            //SEARCH BAR
            <div className="flex w-full justify-center sm:hidden">
              <div className="justify-center sm:hidden md:flex">
                {/* <Search /> */}
              </div>
            </div>
          ) : (
            <div className="flex w-full justify-center max-md:hidden">
              <div className="justify-center md:flex"></div>
            </div>
          )}

          {/*<div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>*/}
          <div className="flex justify-end pr-3">
            {menu.length > 0 ? (
              <ul
                className={`hidden gap-10 max-sm:p-10 md:flex md:items-center md:px-10 ${features.borderMenuNav ? "border-menu mr-10" : ""}`}
              >
                {menu.map((item: MenuContent) => (
                  <li key={item.title}>
                    <Link
                      href={createLink(item, locale)}
                      className="whitespace-nowrap underline-offset-4"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {nextLocale ? (
              <LanguageSelector nextLocale={nextLocale} slug={slug} />
            ) : null}
            <ThemeSelector menu={menu.length > 0} />
            {searchbar ? (
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            ) : null}
            {features.profile ? (
              <LoginButton
                lang={locale.path}
                staticUiContent={staticUiContent}
                uiContent={uiContent}
                domain={domain}
              />
            ) : null}
          </div>
        </div>
      </nav>
      {features.navbar.fixed ?? <div className="h-16"></div>}
    </>
  );
}
