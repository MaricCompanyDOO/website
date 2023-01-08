import {
  faMedal,
  faPenRuler,
  faHandsHelping,
  faMapLocation,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { ContactInformation, HighlightedValue } from "src/types/highlighted-values";

export const SECTIONS: string[] = [
  "o nama",
  "zašto izabrati nas?",
  "galerija",
  "kontakt",
];

export const HIGHLIGHTED_VALUES: HighlightedValue[] = [
  {
    icon: faMedal,
    title: "Vrhunski kvalitet",
    text: "Svih ovih godina našeg rada, trudimo se da održimo visok kvalitet naših proizvoda. Glavna misija nam je da naši klijenti budu zadovoljni.",
    buttonText: "Naši Proizvode"
  },
  {
    icon: faPenRuler,
    title: "Proizvodnja po narudžbi",
    text: "Proizvodnju prilagođavamo Vama, zato naše proizvode uglavnom radimo po narudžbi klijenta.",
    buttonText: "Naši Proizvode"
  },
  {
    icon: faHandsHelping,
    title: "Zadovoljstvo klijenata",
    text: "Stalo nam je do naših klijenata i sa ponosom možemo reći da nikada nismo imali reklamaciju na robu koju smo isporučili.",
    buttonText: "Naši Proizvode"
  }
];

export const ABOUT_PARAGRAPHS: string[] = [
  "Sirovinu za proizvodnju rezane građe najviše nabavljamo od preduzeća JPŠ „Šume Republike Srpske“. Naša proizvodnja se najviše bazira na smrči i jelu.",
  "Za proizvodnju rezane građe koristimo glavnu pilanu kao i više mašina u prozvodnji drveta.",
  "Svoje proizvode transportujemo do kupca, angažujući firme koje se bave poslom transporta.",
];

export const CONTACT_INFORMATIONS: ContactInformation[] = [
  {
    icon: faMapLocation,
    text: "Bosna i Hercegovina, RS Kneževo-Imljani, ulica BB",
  },
  {
    icon: faPhone,
    text: "065 169 194",
    link: "tel:+38765169194",
  },
  {
    icon: faPhone,
    text: "065 521 156",
    link: "tel:+38765521156",
  },
  {
    icon: faInstagram,
    text: "@maric.company",
    link: "https://www.instagram.com/maric.company/",
  },
  {
    icon: faFacebook,
    text: "Maric Company",
    link: "https://www.facebook.com/profile.php?id=100063733950526&mibextid=ZbWKwL",
  },
  {
    icon: faEnvelope,
    text: "maric.kompany3@gmail.com",
    link: "mailto:maric.kompany3@gmail.com",
  },
  {
    icon: faClock,
    text: "07 - 17h",
  },
];
