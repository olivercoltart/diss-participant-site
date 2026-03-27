"use client";

import { useState } from "react";

const AGE_OPTIONS = [
  "18-24 years old",
  "25-34 years old",
  "35-44 years old",
  "45-54 years old",
  "Over 55 years old",
];

const GENDER_OPTIONS = ["Male", "Female", "Prefer not to say / Other"];

const EDUCATION_OPTIONS = [
  "No formal education",
  "Primary education",
  "Vocational / Technical qualifications",
  "Bachelor's degree",
  "Master's degree",
  "Doctoral degree",
  "Other",
];

export default function ParticipantQuestionsForm({ action }) {
  const [education, setEducation] = useState("");
  const [educationOther, setEducationOther] = useState("");
  const [showEducationWarning, setShowEducationWarning] = useState(false);

  function handleEducationChange(event) {
    const nextEducation = event.target.value;
    setEducation(nextEducation);

    if (nextEducation !== "Other") {
      setShowEducationWarning(false);
    }
  }

  function handleEducationOtherChange(event) {
    const nextValue = event.target.value;
    setEducationOther(nextValue);

    if (nextValue.trim()) {
      setShowEducationWarning(false);
    }
  }

  function handleSubmit(event) {
    if (education === "Other" && !educationOther.trim()) {
      event.preventDefault();
      setShowEducationWarning(true);
    }
  }

  return (
    <form action={action} onSubmit={handleSubmit}>
      <div className="question">
        <label className="checkbox">
          <input required type="checkbox" name="age_confirmation" value="yes" /> I am over the age
          of 18
        </label>
      </div>

      <div className="question">
        <h3>What is your age?</h3>
        <div className="options">
          {AGE_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="age" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>

      <div className="question">
        <h3>What is your gender?</h3>
        <div className="options">
          {GENDER_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="gender" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>

      <div className="question">
        <h3>What is your highest level of education?</h3>
        <div className="options">
          {EDUCATION_OPTIONS.map((option) => (
            <label key={option}>
              <input
                required
                type="radio"
                name="higher_education"
                value={option}
                checked={education === option}
                onChange={handleEducationChange}
              />{" "}
              {option}
            </label>
          ))}
        </div>
        <input
          aria-invalid={showEducationWarning}
          disabled={education !== "Other"}
          name="higher_education_other"
          onChange={handleEducationOtherChange}
          placeholder="Other:"
          type="text"
          value={educationOther}
        />
        {showEducationWarning ? (
          <p className="warning">Enter a response for Other before continuing.</p>
        ) : null}
      </div>

      <nav className="nav">
        <button className="button" type="submit">
          Next Page
        </button>
      </nav>
    </form>
  );
}
