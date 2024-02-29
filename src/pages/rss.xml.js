import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

const pageToRssPage = (arr, pathPrefix) =>
  arr.map((p) => ({ ...p.data, link: `/${pathPrefix}/${p.slug}` }));
export async function GET(context) {
  const posts = pageToRssPage(await getCollection("projekte"), "projekte");
  const aktuelles = pageToRssPage(
    await getCollection("aktuelles"),
    "aktuelles",
  );
  const events = pageToRssPage(
    await getCollection("veranstaltungen"),
    "veranstaltungen",
  );
  const resources = pageToRssPage(
    await getCollection("resources"),
    "ressourcen",
  );
  const modules = pageToRssPage(await getCollection("module"), "module");
  const about = {
    ...(await getEntry("about", "about")).data,
    link: "/about",
  };
  const contact = {
    ...(await getEntry("kontakt", "kontakt")).data,
    link: "/contact",
  };
  const newsletterArchiv = {
    ...(await getEntry("newsletterArchiv", "newsletterarchiv")).data,
    link: "/aktuelles/archiv",
  };
  const moduleOverview = {
    ...(await getEntry("moduleOverview", "moduleoverview")).data,
    link: "/module",
  };
  const resourcesOverview = {
    ...(await getEntry("resourcesOverview", "resourcesoverview")).data,
    link: "/resources",
  };
  const veranstaltungenOverview = {
    ...(await getEntry("veranstaltungenOverview", "veranstaltungenoverview"))
      .data,
    link: "/veranstaltungen",
  };
  const projectsOverview = {
    ...(await getEntry("projectsOverview", "projectsoverview")).data,
    link: "/projekte",
  };
  const aktuellesOverview = {
    ...(await getEntry("aktuellesOverview", "aktuellesoverview")).data,
    link: "/aktuelles",
  };

  const items = [
    ...posts,
    ...aktuelles,
    ...events,
    ...modules,
    ...resources,
    about,
    contact,
    newsletterArchiv,
    moduleOverview,
    resourcesOverview,
    veranstaltungenOverview,
    projectsOverview,
    aktuellesOverview,
  ]
    .map((item) => ({
      title: item.title,
      description: item.description,
      link: item.link,
      pubDate: item.date || new Date("2018-01-01"),
    }))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
