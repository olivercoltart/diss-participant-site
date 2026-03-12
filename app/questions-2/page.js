import Link from "next/link";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Questions Page 2</h1>

      <div className="question">
        <h3>Question 3 (Placeholder)</h3>
        <div className="options">
          <label>
            <input type="radio" name="q3" /> Option A
          </label>
          <label>
            <input type="radio" name="q3" /> Option B
          </label>
          <label>
            <input type="radio" name="q3" /> Option C
          </label>
        </div>
      </div>

      <div className="question">
        <h3>Question 4 (Placeholder)</h3>
        <div className="options">
          <label>
            <input type="radio" name="q4" /> Option A
          </label>
          <label>
            <input type="radio" name="q4" /> Option B
          </label>
          <label>
            <input type="radio" name="q4" /> Option C
          </label>
        </div>
      </div>

      <nav className="nav">
        <Link className="button" href="/knowledge-post">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
