'use client'

export default function GamePage() {
  return (
    <section style={{ width: "100vw", height: "100vh", margin: 0 }}>
      <iframe
        src="https://plane-game-pink.vercel.app/plane-game.html"
        title="Game"
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        allow="fullscreen"
      />
    </section>
  );
}
