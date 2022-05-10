import { FC } from "react";

export interface FooterProps {}

export const Footer: FC<FooterProps> = ({  }) => {

  return (
    <footer className="main-footer">
      <div className="footer__content-wrapper">
        <div className="footer__logo" id="w-node-_91c399b5-680d-5813-1f5e-e49ce1938230-305c517e">
          <img src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/62050e0955927fbca3336f58_Logo_Full_Colored_-_Plain_-_For_Website.svg" loading="lazy" width="180" alt="" className="footer__logo-image" />
        </div>
        <div className="footer-address" id="w-node-_91c399b5-680d-5813-1f5e-e49ce1938240-305c517e">
          <div className="footer-address__wrapper">
            <ol role="list" className="footer-address__counter">
              <li className="nav-address__counter-item">1</li>
              <li className="nav-address__counter-item">2</li>
              <li className="nav-address__counter-item">3</li>
              <li className="nav-address__counter-item">4</li>
              <li className="nav-address__counter-item">5</li>
              <li className="nav-address__counter-item">6</li>
              <li className="nav-address__counter-item">7</li>
            </ol>
            <div className="footer-address__contact">
              <div className="footer-address__bracket">bitgrip.address</div>
              <div className="footer-address__content">
                <ul role="list" className="footer-address__list--value">
                  <li className="footer-address__value">Bitgrip GmbH,</li>
                  <li className="footer-address__value">Kurfürstendamm 170,</li>
                  <li className="footer-address__value">10707 Berlin,</li>
                  <li className="footer-address__value">
                    <a href="tel:+49(0)3028443399" className="footer-address__link">+49 (0) 30 28 44 33 99</a>,
                  </li>
                  <li className="footer-address__value">
                    <a href="mailto:berlin@bitgrip.de?subject=Hello%20Bitgrip" className="footer-address__link">berlin@bitgrip.de</a>
                  </li>
                </ul>
              </div>
              <div className="footer-address__bracket"></div>
            </div>
          </div>
        </div>
        <div className="footer__sitemap" id="w-node-_91c399b5-680d-5813-1f5e-e49ce1938271-305c517e">
          <div className="sitemap-nav__wrapper">
            <div className="col-1-3">
              <nav>
                <ul role="list" className="sitemap-nav__list">
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/de/bitgrip" className="meta-nav__link">Why us?</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/bitgrip/code" className="meta-nav__link">Code</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/bitgrip/consult" className="meta-nav__link">Consult</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/bitgrip/create" className="meta-nav__link">Create</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/bitgrip/culture" className="meta-nav__link">Culture</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="w-node-_91c399b5-680d-5813-1f5e-e49ce1938284-305c517e" className="col-1-3">
              <nav>
                <ul role="list" className="sitemap-nav__list">
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/technologien" className="meta-nav__link">Technologien</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/technologien/coremedia-content-cloud-dxp-enterprise-level" className="meta-nav__link">Coremedia</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/technologien/magnolia-composable-dxp-b2b-brands" className="meta-nav__link">Magnolia</a>
                  </li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/technologien/contentsquare-analytics-tools-ux-champions" className="meta-nav__link">Contentsquare</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div id="w-node-_91c399b5-680d-5813-1f5e-e49ce1938295-305c517e" className="col-1-3">
              <nav>
                <ul role="list" className="sitemap-nav__list">
                  <li className="meta-nav__list-item">
                  <a href="https://www.bitgrip.com/de/kontakt" className="meta-nav__link">Kontakt</a></li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/impressum" className="meta-nav__link">Impressum</a></li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/datenschutz" className="meta-nav__link">Datenschutz</a></li>
                  <li className="meta-nav__list-item">
                    <a href="https://www.bitgrip.com/de/agbs" className="meta-nav__link">AGB</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div id="w-node-_91c399b5-680d-5813-1f5e-e49ce19382b7-305c517e" className="footer__social">
          <a href="https://www.linkedin.com/company/bitgrip-gmbh/" className="footer-social__item w-inline-block">
            <img src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/61c996358b12337d2211f597_LinkedIn.svg" loading="lazy" alt="Zum Bitgrip-LinkedIn-Profil" className="image-2" />
              <div aria-hidden="true" className="sr-only">Hier geht es zum LinkedIn-Profil von Bitgrip</div>
          </a>
          <a href="https://www.xing.com/pages/bitgripgmbh" className="footer-social__item w-inline-block">
            <img src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/620ec8deb0b95feb78326220_Xing%20Logo.svg" loading="lazy" alt="Unser Bitgrip-Medium-Blog" />
              <div aria-hidden="true" className="sr-only">Zur Bitgrip Xing Seite</div></a><a href="https://www.kununu.com/de/bitgrip1" className="footer-social__item w-inline-block">
            <img src="https://uploads-ssl.webflow.com/61c07e84c073699429d75cbe/620ec8b92c6ce33920a780fd_Kununu%20Logo.svg" loading="lazy" alt="Back to our Homepage" />
              <div aria-hidden="true" className="sr-only">Unser Unternehmen bei Kununu</div>
          </a>
        </div>
        <div className="footer__copyright" id="w-node-_91c399b5-680d-5813-1f5e-e49ce19382ca-305c517e">
          <div>Bitgrip 2022</div>
        </div>
      </div>
    </footer>
  );
};
