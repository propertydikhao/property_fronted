import React from "react";

function getYouTubeId(url) {
  try {
    const urlObj = new URL(url);

    // Case 1: youtu.be short link
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1); // remove "/"
    }

    // Case 2: youtube.com/watch?v=...
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }

    return null;
  } catch (err) {
    console.error("Invalid YouTube URL", err);
    return null;
  }
}

export default function YouTubePlayer({
  url,
  autoplay = false,
  height = "500",
}) {
  const videoId = getYouTubeId(url);

  if (!videoId) return <p>Invalid YouTube URL</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}${
    autoplay ? "?autoplay=1&mute=1" : ""
  }`;

  return (
    <iframe
      height={height}
      style={{ width: "100%" }}
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
