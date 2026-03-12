import Link from "next/link";

export default function GamePage() {
  return (
    <section className="card">
      <h1>Game Page</h1>
      <p>The iframe below is a placeholder for your game.</p>
      <iframe
        src="https://example.com"
        title="Game iframe placeholder"
        loading="lazy"
      />
      <nav className="nav">
        <Link className="button" href="/questions-2">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
