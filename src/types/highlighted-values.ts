export type HighlightedValue = {
  icon: any;
  title: string;
  text: string;
  buttonText: string;
  onClick?: () => void;
};

export type ContactInformation = {
  icon: any;
  text: string;
  link?: string;
};

export type ContactLink = {
  icon: any;
  link: string;
};
