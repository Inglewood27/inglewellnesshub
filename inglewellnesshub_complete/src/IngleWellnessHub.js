import React from "react";
import { Instagram, Twitter } from "lucide-react";

export default function IngleWellnessHub() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Ingle Wellness Hub</h1>
        <p className="text-xl mb-6 italic text-green-400">
          Built for the Hustle. Rooted in Health. DEMAND HEALTH.
        </p>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-xl mb-6 p-6">
          <p className="text-lg mb-4">
            Welcome to Ingle Wellness Hub — your faceless source for health insights, natural supplements, and daily motivation. Our mission is to empower hustlers and dreamers to take control of their wellness and demand better health.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-xl">
            Shop Sugar Defender
          </button>
        </div>

        <div className="flex space-x-4 mt-8">
          <a
            href="https://www.tiktok.com/@inglewellnesshub1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            <Instagram /> TikTok
          </a>
          <a
            href="https://twitter.com/inglewellnesshub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            <Twitter /> Twitter
          </a>
        </div>
      </div>
    </div>
  );
}