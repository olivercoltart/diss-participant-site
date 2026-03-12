import Link from "next/link";

export default function QuestionsTwoPage() {
  return (
    <section className="card">
      <h1>Pre-Study Questions</h1>
      <h3>Baseline Knowledge</h3>

      <div className="question">
        <h3>1. What is the capital city of France?</h3>
        <div className="options">
          <label>
            <input type="radio" name="q1" value="Lyon" /> Lyon
          </label>
          <label>
            <input type="radio" name="q1" value="Marseille" /> Marseille
          </label>
          <label>
            <input type="radio" name="q1" value="Paris" /> Paris
          </label>
          <label>
            <input type="radio" name="q1" value="Nice" /> Nice
          </label>
        </div>
      </div>

      <div className="question">
        <h3>2. Bratislava is the capital of which European country?</h3>
        <div className="options">
          <label>
            <input type="radio" name="q2" value="Slovakia" /> Slovakia
          </label>
          <label>
            <input type="radio" name="q2" value="North Macedonia" /> North Macedonia
          </label>
          <label>
            <input type="radio" name="q2" value="Serbia" /> Serbia
          </label>
          <label>
            <input type="radio" name="q2" value="Slovenia" /> Slovenia
          </label>
        </div>
      </div>

      <div className="question">
        <h3>3. What is the capital of Latvia?</h3>
        <div className="options">
          <label>
            <input type="radio" name="q3" value="Daugavpils" /> Daugavpils
          </label>
          <label>
            <input type="radio" name="q3" value="Liepaja" /> Liepaja
          </label>
          <label>
            <input type="radio" name="q3" value="Riga" /> Riga
          </label>
          <label>
            <input type="radio" name="q3" value="Jelgava" /> Jelgava
          </label>
        </div>
      </div>

      <div className="question">
        <h3>4. Zagreb is the capital of which European country?</h3>
        <div className="options">
          <label>
            <input type="radio" name="q4" value="Bosnia and Herzegovina" /> Bosnia and Herzegovina
          </label>
          <label>
            <input type="radio" name="q4" value="Croatia" /> Croatia
          </label>
          <label>
            <input type="radio" name="q4" value="Bulgaria" /> Bulgaria
          </label>
          <label>
            <input type="radio" name="q4" value="Romania" /> Romania
          </label>
        </div>
      </div>

      <nav className="nav">
        <Link className="button" href="/game">
          Next Page
        </Link>
      </nav>
    </section>
  );
}
