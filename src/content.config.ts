import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

// ---------------------------------------------------------------------------
// "Know Your Kidney" educational articles.
// Stored as src/content/articles/<category-slug>/<article-slug>.md
// The category is the first path segment of each entry's id (e.g. "ckd/anemia").
// ---------------------------------------------------------------------------
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional().default(""),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

// ---------------------------------------------------------------------------
// Emergency Contacts — one entry per category (Nephrology Doctors, Hospitals, ...).
// Content stays as rich freeform text (name / chamber / phone all in one block)
// exactly as BKPA published it, rather than force-parsed into per-doctor
// records — automated parsing risked mis-splitting real phone numbers.
// ---------------------------------------------------------------------------
const emergencyContacts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/emergency-contacts" }),
  schema: z.object({
    title: z.string(),
    order: z.number().default(0),
  }),
});

// ---------------------------------------------------------------------------
// Executive Body / team members.
// ---------------------------------------------------------------------------
const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    order: z.number().default(99),
    name: z.string(),
    role: z.string().optional().default(""),
    image: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    address: z.string().optional(),
  }),
});

// ---------------------------------------------------------------------------
// Homepage activity gallery.
// ---------------------------------------------------------------------------
const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: z.object({
    order: z.number().default(99),
    caption: z.string().optional().default(""),
    image: z.string(),
  }),
});

// ---------------------------------------------------------------------------
// Singleton site pages (home banners/notice, about, FAQ, contact) — each
// stored as its own small JSON file (a one-entry map) so Sitepins renders
// them as structured forms.
// ---------------------------------------------------------------------------
const siteHome = defineCollection({
  loader: file("./src/content/site/home.json"),
  schema: z.object({
    banners: z.array(
      z.object({
        title: z.string(),
        image: z.string().optional(),
        content: z.string(),
      }),
    ),
    notice: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
    }),
  }),
});

const siteAbout = defineCollection({
  loader: file("./src/content/site/about.json"),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(""),
  }),
});

const siteFaq = defineCollection({
  loader: file("./src/content/site/faq.json"),
  schema: z.object({
    title: z.string(),
    items: z.array(z.object({ question: z.string(), answer: z.string() })),
  }),
});

const siteContact = defineCollection({
  loader: file("./src/content/site/contact.json"),
  schema: z.object({
    title: z.string(),
    items: z.array(z.object({ name: z.string(), content: z.string() })),
  }),
});

export const collections = { articles, emergencyContacts, team, gallery, siteHome, siteAbout, siteFaq, siteContact };
