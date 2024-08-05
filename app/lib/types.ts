export type cards = {
  description: string;
  tech: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.JSX.Element;
}[];
