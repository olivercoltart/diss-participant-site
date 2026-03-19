const GENDER_OPTIONS = [
  "Female",
  "Male",
  "Non-binary",
  "Prefer to self-describe:",
  "Prefer not to say",
];

const HIGHER_EDUCATION_OPTIONS = ["Yes", "No", "Prefer not to say"];

export default function ParticipantQuestionsForm({ action }) {
  return (
    <form action={action}>
      <div className="question">
        <label className="checkbox">
          <input required type="checkbox" name="age_confirmation" value="yes" /> I am over the age
          of 18
        </label>
      </div>

      <div className="question">
        <h3>What is your age?</h3>
        <input min="18" name="age" type="number" />
        <label className="checkbox">
          <input type="checkbox" name="age_prefer_not_to_say" value="yes" />
          Prefer not to say
        </label>
        <p className="warning">If you enter an age, it must be 18 or older.</p>
      </div>

      <div className="question">
        <h3>Which of the following best represents your gender identity?</h3>
        <div className="options">
          {GENDER_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="gender" value={option} />{" "}
              {option}
            </label>
          ))}
        </div>
        <input name="gender_self_describe" type="text" />
      </div>

      <div className="question">
        <h3>
          Have you completed a higher education degree? (e.g. Bachelors, Masters, PhD, etc.)
        </h3>
        <div className="options">
          {HIGHER_EDUCATION_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="higher_education" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>

      <nav className="nav">
        <button className="button" type="submit">
          Next Page
        </button>
      </nav>
    </form>
  );
}
