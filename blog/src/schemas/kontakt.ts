import { z } from "astro:content";

export const kontaktSchema = z.object({
  title: z.string(),
  metaTitle: z.string().optional(),
  description: z.string(),
  metaDescription: z.string().optional(),
  headerImage: z.object({
    src: z.string(),
    alt: z.string(),
  }).optional(),
  links: z.array(
    z.object({
      title: z.string(),
      href: z.string(),
    }),
  ).optional(),
  form: z.object({
    title: z.string().default("Kontktformular"),
    dataTitle: z.string().default("Kontaktdaten"),
    fields: z.object({
      title: z.object({
        label: z.string().default("Anrede"),
        placeholder: z.string().default("–"),
        required: z.boolean().default(false),
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
    topics: z.array(z.object({
      label: z.string(),
      key: z.string(),
    })).default([]),
    textareaTitle: z.string().default("Beschreibung der Anfrage"),
    privacyTitle: z.string().default("Datenschutz"),
    privacyPolicyAgreementText: z.string().default(
      "Ich habe die [Datenschutzbestimmungen](https://www.technologiestiftung-berlin.de/datenschutz) gelesen und erkenne diese ausdrücklich an.*"
    ),
    privacyDataUseAgreementText: z.string().default(
      "Ich bin damit einverstanden, dass meine angegebenen Daten zum Zweck der Kontaktaufnahme und Vorbereitung zum Gespräch gespeichert werden dürfen."
    ),
    requiredLabel: z.string().default("* Angabe notwendig"),
    submitButtonText: z.string().default("Anfrage abschicken"),
  })
})
export type KontaktType = z.infer<typeof kontaktSchema>;
