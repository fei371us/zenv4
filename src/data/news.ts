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
  Approved items moved here after admin approval
];