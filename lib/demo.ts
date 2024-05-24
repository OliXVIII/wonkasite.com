import { Language } from "@/types/languages";
import { StorageType } from "@/types/storage";
import { UiContent } from "@/types/ui-content";

export const demoUIContent: Record<Language, UiContent> = {
  // English
  en: {
    compagnyName: "Demo Inc.",
    siteName: "Demo",
    mission: "My Mission for this demo site is to show how to use i18n",
    description: "My Description: This is a demo site to show how to use i18n",
    navigation: [
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
  },
  // French
  fr: {
    compagnyName: "Demo Inc.",
    siteName: "Demo",
    mission:
      "Ma mission pour ce site de démonstration est de montrer comment utiliser i18n",
    description:
      "Ma description: Ceci est un site de démonstration pour montrer comment utiliser i18n",
    navigation: [
      { title: "À propos", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
  },
};

export const storageDemo: StorageType = {
  logo: {
    navbar: {
      src: "https://firebasestorage.googleapis.com/v0/b/wonkasite-d43b5.appspot.com/o/demo%2Flogo-wonka-nobg.png?alt=media&token=2be47095-7c85-4f47-94e3-c26e873de0b3",
      aspectRatio: 1,
    },
  },
};