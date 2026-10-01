import type { TFunction } from "i18next"
import type { IconType } from "react-icons"

import { BiStoreAlt } from "react-icons/bi"
import { CgWebsite } from "react-icons/cg"
import { FiLayout, FiBox, FiSmartphone, FiZap } from "react-icons/fi"
import { MdLocalGroceryStore } from "react-icons/md"
import { TbBrandGoogleAnalytics } from "react-icons/tb"

export interface ServiceCard {
  number: string
  Icon: IconType
  title: string
  description: string
}

export interface WhatsIncluded {
  Icon: IconType
  title: string
  description: string
  number: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface Service {
  id: number
  number: string
  Icon: IconType
  badge: string[]
  title: string
  highlight: string
  description: string
  tags: string[]
  cards: ServiceCard[]
  process: ProcessStep[]
  whatsIncluded: WhatsIncluded[]
}

type TranslatedPair = { title: string; description: string }

// يدمج الترجمة (title/description) مع الأيقونات والأرقام المحلية الثابتة
const mergeCards = (
  translated: TranslatedPair[],
  icons: IconType[]
): ServiceCard[] =>
  translated.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    Icon: icons[index],
    title: item.title,
    description: item.description,
  }))

const mergeProcess = (translated: TranslatedPair[]): ProcessStep[] =>
  translated.map((item, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: item.title,
    description: item.description,
  }))

export const getServices = (t: TFunction): Service[] => {
  const includedIcons = [FiSmartphone, FiLayout, FiBox, FiZap]
  const includedKeys = [
    "responsiveDevelopment",
    "modernUI",
    "reusableComponents",
    "performance",
  ]

  const DEFAULT_INCLUDED: WhatsIncluded[] = includedKeys.map((key, index) => ({
    Icon: includedIcons[index],
    title: t(`services.included.${key}.title`),
    description: t(`services.included.${key}.description`),
    number: String(index + 1).padStart(2, "0"),
  }))

  return [
    {
      id: 1,
      number: "01",
      Icon: BiStoreAlt,
      badge: ["//", t("services.website.badge")],
      title: t("services.website.title"),
      highlight: t("services.website.highlight"),
      description: t("services.website.description"),
      tags: t("services.website.tags", { returnObjects: true }) as string[],
      cards: mergeCards(
        t("services.website.cards", { returnObjects: true }) as TranslatedPair[],
        [FiLayout, BiStoreAlt, CgWebsite, FiBox, FiSmartphone, FiZap]
      ),
      process: mergeProcess(
        t("services.website.process", { returnObjects: true }) as TranslatedPair[]
      ),
      whatsIncluded: DEFAULT_INCLUDED,
    },

    {
      id: 2,
      number: "02",
      Icon: CgWebsite,
      badge: ["//", t("services.landing.badge")],
      title: t("services.landing.title"),
      highlight: t("services.landing.highlight"),
      description: t("services.landing.description"),
      tags: t("services.landing.tags", { returnObjects: true }) as string[],
      cards: mergeCards(
        t("services.landing.cards", { returnObjects: true }) as TranslatedPair[],
        [FiLayout, FiZap, CgWebsite, FiBox, FiSmartphone, FiLayout]
      ),
      process: mergeProcess(
        t("services.landing.process", { returnObjects: true }) as TranslatedPair[]
      ),
      whatsIncluded: DEFAULT_INCLUDED,
    },

    {
      id: 3,
      number: "03",
      Icon: MdLocalGroceryStore,
      badge: ["//", t("services.ecommerce.badge")],
      title: t("services.ecommerce.title"),
      highlight: t("services.ecommerce.highlight"),
      description: t("services.ecommerce.description"),
      tags: t("services.ecommerce.tags", { returnObjects: true }) as string[],
      cards: mergeCards(
        t("services.ecommerce.cards", { returnObjects: true }) as TranslatedPair[],
        [MdLocalGroceryStore, FiBox, FiLayout, FiZap, FiSmartphone, MdLocalGroceryStore]
      ),
      process: mergeProcess(
        t("services.ecommerce.process", { returnObjects: true }) as TranslatedPair[]
      ),
      whatsIncluded: DEFAULT_INCLUDED,
    },

    {
      id: 4,
      number: "04",
      Icon: TbBrandGoogleAnalytics,
      badge: ["//", t("services.dashboard.badge")],
      title: t("services.dashboard.title"),
      highlight: t("services.dashboard.highlight"),
      description: t("services.dashboard.description"),
      tags: t("services.dashboard.tags", { returnObjects: true }) as string[],
      cards: mergeCards(
        t("services.dashboard.cards", { returnObjects: true }) as TranslatedPair[],
        [TbBrandGoogleAnalytics, FiBox, FiLayout, FiZap, FiSmartphone, TbBrandGoogleAnalytics]
      ),
      process: mergeProcess(
        t("services.dashboard.process", { returnObjects: true }) as TranslatedPair[]
      ),
      whatsIncluded: DEFAULT_INCLUDED,
    },
  ]
}