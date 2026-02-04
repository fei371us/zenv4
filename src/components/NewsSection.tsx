"use client";

import React, { useEffect, useState } from "react";
import { NewsItem } from "@/data/news";

export default function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
        async function fetchNews() {
          try {
            const res = await fetch("/news.txt");
        const data: NewsItem[] = await res.json();
        setNews(data);
      } catch (err) {
        console.error("Error fetching news:", err);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">
          AI & Cryptocurrency Weekly News
        </h2>
        {news.length === 0 ? (
          <p>No news available yet.</p>
        ) : (
          <ul className="space-y-4">
            {news.map((item) => (
              <li key={item.id} className="border-b pb-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground mb-2">
                  {item.summary}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary underline"
                  >
                    Read More
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}