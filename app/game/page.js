"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

async function postGameEvent(eventType) {
  await fetch("/api/game-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ eventType }),
  });
}

export default function GamePage() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("game-page-active");
    document.querySelector("main.container")?.classList.add("game-container-active");

    postGameEvent("started").catch(() => {});

    function handleMessage(event) {
      if (event.data?.type === "GAME_COMPLETE") {
        postGameEvent("completed")
          .catch(() => {})
          .finally(() => {
            router.push("/questions-post");
          });
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.classList.remove("game-page-active");
      document.querySelector("main.container")?.classList.remove("game-container-active");
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <iframe
      src="https://plane-game-pink.vercel.app/plane-game.html"
      title="Game"
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        border: "none",
      }}
    />
  );
}
