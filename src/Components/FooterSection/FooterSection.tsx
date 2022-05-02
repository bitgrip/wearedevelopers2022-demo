import { FC } from "react";
import { Footer } from "../../Types/elements/Footer";

export interface FooterSectionProps {
  footer: Footer;
}
export const FooterSection: FC<FooterSectionProps> = ({ footer }) => {
  // TODO: The header rerenders on every page request due to the fact, that the static props deliver the navigation. With some kind of memorization, this maybe can be avoided.

  return (
    <footer className="bg-gray-200 w-full h-36 bottom-0 items-center pt-8 ">
      <div className="m-auto max-w-7xl mx-auto  px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {footer.children.map((item) => (
            <div key={item.slug} className="px-5 py-2">
              <a
                href={item.slug}
                className="text-base text-gray-500 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; {footer.copyright}
        </p>
      </div>
    </footer>
  );
};
