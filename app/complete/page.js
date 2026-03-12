import Link from "next/link";

export default function CompletePage() {
  return (
    <section className="card">
      <h1>Complete</h1>
      <p>Thank you — you’ve reached the end of this prototype flow.</p>
      <nav className="nav">
        <Link className="button" href="/welcome">
          Restart
        </Link>
      </nav>
    </section>
  );
}

