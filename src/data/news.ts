export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  link?: string;
}

export let draftNews: NewsItem[] = [
  {
    id: 1,
    title: "Sample AI & Crypto Insight",
    summary: "A brief summary of the latest AI & Cryptocurrency update. Replace with live tweet summaries.",
    link: "https://twitter.com/",
  },
  // Additional draft items will be added by the fetcher
];

export let approvedNews: NewsItem[] = [
  {
    id: 1,
    title: "Save 10% on ALL Corporate Microsoft Licenses – Limited Time!",
    summary: "More than 3x the average discount—contact us to claim your savings today.",
  },
];
