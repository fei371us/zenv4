"use client";

import React, { useEffect, useState } from "react";
import { NewsItem } from "@/data/news";

export default function AdminNewsPage() {
  const [drafts, setDrafts] = useState<NewsItem[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [link, setLink] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchDrafts = async () => {
    try {
      const res = await fetch("/api/news/drafts");
      const data: NewsItem[] = await res.json();
      setDrafts(data);
    } catch (err) {
      console.error("Error fetching drafts:", err);
    }
  };

  const approveItem = async (id: number) => {
    setLoadingId(id);
    try {
      await fetch("/api/news/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      await fetchDrafts();
    } catch (err) {
      console.error("Error approving item:", err);
    } finally {
      setLoadingId(null);
    }
  };

  const addDraft = async () => {
    if (!title || !summary) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/news/drafts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, summary, link }),
      });
      if (res.ok) {
        setTitle("");
        setSummary("");
        setLink("");
        await fetchDrafts();
      } else {
        console.error("Failed to add draft");
      }
    } catch (err) {
      console.error("Error adding draft:", err);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchDrafts();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Draft News Manager</h1>

      {/* Add Draft Form */}
      <div className="mb-8 border rounded p-4 bg-white">
        <h2 className="font-semibold mb-4">Add New Draft</h2>
        <div className="flex flex-col space-y-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border px-3 py-2 rounded"
          />
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Link (optional)"
            className="border px-3 py-2 rounded"
          />
          <button
            onClick={addDraft}
            disabled={submitting}
            className="mt-2 px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          >
            {submitting ? "Adding..." : "Add Draft"}
          </button>
        </div>
      </div>

      {/* Draft List */}
      {drafts.length === 0 ? (
        <p>No draft news available.</p>
      ) : (
        <ul className="space-y-4">
          {drafts.map((item) => (
            <li key={item.id} className="border rounded p-4 bg-white">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-muted-foreground mb-2">{item.summary}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  View Source
                </a>
              )}
              <button
                onClick={() => approveItem(item.id)}
                disabled={loadingId === item.id}
                className="ml-4 px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
              >
                {loadingId === item.id ? "Approving..." : "Approve"}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}