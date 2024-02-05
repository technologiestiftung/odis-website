import { z, defineCollection, reference } from "astro:content";

const aktuelles = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      visible: z.boolean().default(true),
      date: z.coerce.date(),
      tags: z.array(z.string()).default(["news"]),
      urlText: z.string().default("Zum Blogbeitrag"),
      author: z.string().optional(),
      readingTime: z.union([z.string(), z.number()]).optional(),
      link: z.string().optional(),
    }),
});

const projekte = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      visible: z.boolean().default(true),
      date: z.coerce.date(),
      tags: z.array(z.string()).default(["projekte"]),
      blogLinkTitle: z.string().optional().nullable(),
      blogLink: z.string().optional().nullable(),
      finishDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      mobileImage: image().optional(),
      showImageInMockup: z.boolean().default(true),
      projectUrlWithoutProtocol: z.string().optional(),
      datasetDescription: z.string().optional(),
      datasetLinkText: z.string().optional(),
      datasetLink: z.string().optional(),
      gitHubLink: z.string().optional(),
      type: z.string().optional(),
      status: z.string().optional(),
      period: z.string().optional(),
      datasets: z
        .array(
          z.object({
            linkText: z.string(),
            link: z.string().url(),
          }),
        )
        .optional(),
      partners: z
        .array(
          z.object({
            name: z.string(),
            url: z.string(),
            logoPath: z
              .union([image(), z.string().startsWith("https://")])
              .optional(),
          }),
        )
        .optional(),
    }),
});

const module = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      backButtonText: z.string(),
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      visible: z.boolean().default(true),
      tags: z.array(z.string()).default(["module"]),
      date: z.coerce.date().optional(),
      number: z.number(),
      icon: image(),
      methodsTitle: z.string(),
      methodsText: z.string(),
      methods: z.array(reference("resources")),
      furtherLinksTitle: z.string().default("Weiterführende Links"),
      furtherLinksText: z
        .string()
        .default(
          "Wir haben für Sie eine Linksammlung zusammengestellt. Die Links beziehen sich sowohl auf unsere ODIS-eigenen Inhalte als auch auf externe Angebote. Viel Erfolg beim Stöbern!",
        ),
      furtherLinks: z.array(
        z.object({
          title: z.string(),
          link: z.string().url(),
        }),
      ),
      nextStationTitle: z.string(),
      allModulesButtonText: z.string(),
    }),
});

const veranstaltungen = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      visible: z.boolean().default(true),
      date: z.coerce.date(),
      tags: z.array(z.string()).default(["event"]),
      time: z.string(),
      web: z.string().url().optional().nullable(),
      mail: z.string().email().optional().nullable(),
      adresse: z.string(),
    }),
});

const about = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      mission: z.object({
        title: z.string(),
        description: z.string(),
        imagePath: image(),
        imageAlt: z.string(),
        expertiseTitle: z.string(),
        expertiseFields: z.array(
          z.object({
            iconPath: image(),
            iconAlt: z.string(),
            text: z.string(),
          }),
        ),
      }),
      team: z.object({
        title: z.string(),
        members: z.array(
          z.object({
            name: z.string(),
            imagePath: image(),
            imageAlt: z.string(),
            role: z.string().max(50),
            email: z.string().email().optional(),
            phoneNumber: z
              .string()
              .regex(/^\+49 \(0\)30 \d{3} \d{2} \d{2} \d{2}$/)
              .optional(),
          }),
        ),
        disclaimer: z.string(),
      }),
    }),
});

const aktuellesOverview = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const kontakt = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      links: z
        .array(
          z.object({
            title: z.string(),
            href: z.string(),
          }),
        )
        .optional(),
      form: z.object({
        title: z.string().default("Kontktformular"),
        dataTitle: z.string().default("Kontaktdaten"),
        fields: z.object({
          title: z.object({
            label: z.string().default("Anrede"),
            placeholder: z.string().default("–"),
            required: z.boolean().default(false),
            options: z.array(z.string()),
          }),
          name: z.object({
            label: z.string().default("Name"),
            placeholder: z.string().default("Vor- und Nachname"),
            required: z.boolean().default(true),
          }),
          organisation: z.object({
            label: z.string().default("Organisation/Abteilung"),
            placeholder: z.string().default("Organisation und ggf. Abteilung"),
            required: z.boolean().default(false),
          }),
          email: z.object({
            label: z.string().default("E-Mail-Adresse"),
            placeholder: z.string().default("E-Mail-Adresse"),
            required: z.boolean().default(true),
          }),
        }),
        topicsTitle: z.string().default("Thema der Anfrage"),
        topicsHelpText: z.string().default("Mehrfachauswahl möglich"),
        topics: z
          .array(
            z.object({
              label: z.string(),
              key: z.string(),
            }),
          )
          .default([]),
        textareaTitle: z.string().default("Beschreibung der Anfrage"),
        privacyTitle: z.string().default("Datenschutz"),
        privacyPolicyAgreementText: z
          .string()
          .default(
            "Ich habe die [Datenschutzbestimmungen](https://www.technologiestiftung-berlin.de/datenschutz) gelesen und erkenne diese ausdrücklich an.*",
          ),
        privacyDataUseAgreementText: z
          .string()
          .default(
            "Ich bin damit einverstanden, dass meine angegebenen Daten zum Zweck der Kontaktaufnahme und Vorbereitung zum Gespräch gespeichert werden dürfen.",
          ),
        requiredLabel: z.string().default("* Angabe notwendig"),
        submitButtonText: z.string().default("Anfrage abschicken"),
      }),
    }),
});

const moduleOverview = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const newsletterArchiv = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      newsletters: z.array(
        z.object({
          month: z.number().min(1).max(12),
          year: z.number().min(2018).max(new Date().getFullYear()),
          url: z.string(),
        }),
      ),
    }),
});

const projectsOverview = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const veranstaltungenOverview = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const resources = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      visible: z.boolean().default(true),
      date: z.date().default(new Date()),
      tags: z.array(z.string()).default(["resource"]),
      link: z.string().optional(),
      question: z.string().optional().nullable(),
      media: z.object({
        thumbnail: image(),
        type: z
          .enum(["video", "pdf", "blog", "table", "project", "other"])
          .default("other"),
        readingOrPlayingTime: z.string().optional().nullable(),
        size: z.string().optional().nullable(),
        link: z.string().optional().nullable(),
      }),
    }),
});

const resourcesOverview = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      headerImage: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
    }),
});

const homepage = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      intro: z.object({
        title: z.string(),
        text: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
      }),
      openData: z.object({
        subtitle: z.string(),
        title: z.string(),
        textPrefix: z.string().optional().nullable(),
        benefits: z.array(z.string()).default([]),
        textSuffix: z.string().optional().nullable(),
        image: image(),
        imageAltText: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
      }),
      aboutOdis: z.object({
        subtitle: z.string().optional().nullable(),
        title: z.string(),
        textPrefix: z.string().optional().nullable(),
        benefits: z.array(z.string()).default([]),
        textSuffix: z.string().optional().nullable(),
        image: image(),
        imageAltText: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
      }),
      journey: z.object({
        title: z.string(),
        lead: z.string().nullable().optional(),
        text: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
        seeModuleButtonText: z.string(),
      }),
      projects: z.object({
        title: z.string(),
        text: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
        seeProjectButtonText: z.string(),
      }),
      resources: z.object({
        title: z.string(),
        text: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
      }),
      aktuelles: z.object({
        title: z.string(),
        text: z.string(),
        buttons: z
          .array(
            z.object({
              text: z.string(),
              link: z.string(),
              variant: z.enum(["primary", "secondary"]).default("primary"),
            }),
          )
          .default([]),
      }),
    }),
});

export const collections = {
  veranstaltungen,
  module,
  aktuelles,
  projekte,
  about,
  kontakt,
  aktuellesOverview,
  moduleOverview,
  newsletterArchiv,
  projectsOverview,
  veranstaltungenOverview,
  resources,
  resourcesOverview,
  homepage,
};
