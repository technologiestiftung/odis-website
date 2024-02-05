import rss from "@astrojs/rss";
import { getCollection, getEntry } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const posts = (await getCollection("projekte")).map((p) => ({
    ...p.data,
    link: `/projekte/${p.slug}`,
  }));
  const aktuelles = (await getCollection("aktuelles")).map((p) => ({
    ...p.data,
    link: `/aktuelles/${p.slug}`,
  }));
  const events = (await getCollection("veranstaltungen")).map((p) => ({
    ...p.data,
    link: `/veranstaltungen/${p.slug}`,
  }));
  const resources = (await getCollection("resources")).map((p) => ({
    ...p.data,
    link: `/module/${p.slug}`,
  }));
  const modules = (await getCollection("module")).map((p) => ({
    ...p.data,
    link: `/module/${p.slug}`,
  }));
  let about = await getEntry("about", "about");
  about = { ...about.data, link: "/about" };
  let kontakt = await getEntry("kontakt", "kontakt");
  kontakt = { ...kontakt.data, link: "/contact" };
  let newsletterArchiv = await getEntry("newsletterArchiv", "newsletterarchiv");
  newsletterArchiv = { ...newsletterArchiv.data, link: "/aktuelles/archiv" };
  let moduleOverview = await getEntry("moduleOverview", "moduleoverview");
  moduleOverview = { ...moduleOverview.data, link: "/module" };
  let resourcesOverview = await getEntry(
    "resourcesOverview",
    "resourcesoverview",
  );
  resourcesOverview = { ...resourcesOverview.data, link: "/ressourcen" };
  let veranstaltungenOverview = await getEntry(
    "veranstaltungenOverview",
    "veranstaltungenoverview",
  );
  veranstaltungenOverview = {
    ...veranstaltungenOverview.data,
    link: "/veranstaltungen",
  };
  let projectsOverview = await getEntry("projectsOverview", "projectsoverview");
  projectsOverview = { ...projectsOverview.data, link: "/projekte" };
  let aktuellesOverview = await getEntry(
    "aktuellesOverview",
    "aktuellesoverview",
  );
  aktuellesOverview = { ...aktuellesOverview.data, link: "/aktuelles" };

  const items = [
    ...posts,
    ...aktuelles,
    ...events,
    ...modules,
    ...resources,
    about,
    kontakt,
    newsletterArchiv,
    moduleOverview,
    resourcesOverview,
    veranstaltungenOverview,
    projectsOverview,
    aktuellesOverview,
  ].map((item) => ({
    title: item.title,
    description: item.description,
    link: item.link,
    pubDate: item.date || new Date(),
  }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
