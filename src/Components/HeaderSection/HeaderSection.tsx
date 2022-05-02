import Link from "next/link";
import { FC } from "react";
import { Navigation } from "../../Types/Navigation/Navigation";

export interface HeaderSectionProps {
  navigation: Navigation;
}
export const HeaderSection: FC<HeaderSectionProps> = ({ navigation }) => {
  // TODO: The header rerenders on every page request due to the fact, that the static props deliver the navigation. With some kind of memorization, this maybe can be avoided.

  return (
    <header className="bg-gray-200 h-24">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a key="root">
                <span className="sr-only">Bitgrip</span>
                <img
                  className="h-10 w-auto"
                  src=""
                  alt="Bitgrip Logo"
                />
              </a>
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation?.children?.map((link) => (
                <a
                  key={link.id}
                  href={link.slug}
                  className="text-base font-medium text-black hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.children.map((link) => (
            <a
              key={link.id}
              href={link.slug}
              className="text-base font-medium text-black hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
