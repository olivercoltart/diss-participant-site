"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const router = useRouter();

  useEffect(() => {
    document.body.classList.add("game-page-active");
    document
      .querySelector("main.container")
      ?.classList.add("game-container-active");

    function handleMessage(event) {
      if (event.data?.type === "GAME_COMPLETE") {
        router.push("/questions-2");
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.classList.remove("game-page-active");
      document
        .querySelector("main.container")
        ?.classList.remove("game-container-active");

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
        border: "none"
      }}
    />
  );
}
