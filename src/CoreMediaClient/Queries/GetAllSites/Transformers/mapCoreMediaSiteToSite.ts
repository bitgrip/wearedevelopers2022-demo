import { Site } from "../../../../Types/Site/Site";
import { GetAllSites_content_sites } from "../__generated__/GetAllSites";

/**
 * Maps a CoreMedia Site type (generated) into a Site entity type.
 * @param site GetAllSites_content_sites
 * @returns Site
 */
export const mapCoreMediaSiteToSite = (
  site: GetAllSites_content_sites
): Site => {
  if (!site.root?.segment) {
    throw new Error(
      "Type mapping error: given Coremedia site record does not contain a segment."
    );
  }
  return {
    id: site.id,
    name: site.name,
    slug: site.root?.segment,
    locale: site.locale,
  };
};
