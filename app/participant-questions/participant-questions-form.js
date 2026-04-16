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

const SERIOUS_GAMES_OPTIONS = ["Yes", "No", "I don't know"];
const SERIOUS_GAMES_FREQUENCY_OPTIONS = [
  "Every week",
  "Once or twice a month",
  "Once or twice a year",
  "Once or twice ever",
];

export default function ParticipantQuestionsForm({ action }) {
  const [education, setEducation] = useState("");
  const [educationOther, setEducationOther] = useState("");
  const [showEducationWarning, setShowEducationWarning] = useState(false);
  const [seriousGamesExperience, setSeriousGamesExperience] = useState("");
  const [seriousGamesFrequency, setSeriousGamesFrequency] = useState("");
  const [showSeriousGamesFrequencyWarning, setShowSeriousGamesFrequencyWarning] = useState(false);

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

  function handleSeriousGamesExperienceChange(event) {
    const nextValue = event.target.value;
    setSeriousGamesExperience(nextValue);

    if (nextValue !== "Yes") {
      setSeriousGamesFrequency("");
      setShowSeriousGamesFrequencyWarning(false);
    }
  }

  function handleSeriousGamesFrequencyChange(event) {
    setSeriousGamesFrequency(event.target.value);
    setShowSeriousGamesFrequencyWarning(false);
  }

  function handleSubmit(event) {
    let hasError = false;

    if (education === "Other" && !educationOther.trim()) {
      setShowEducationWarning(true);
      hasError = true;
    }

    if (seriousGamesExperience === "Yes" && !seriousGamesFrequency) {
      setShowSeriousGamesFrequencyWarning(true);
      hasError = true;
    }

    if (hasError) {
      event.preventDefault();
    }
  }

  return (
    <form action={action} onSubmit={handleSubmit} className="participant-questions-form">
      <div className="question">
        <h3>1. What is your age?</h3>
        <div className="options">
          {AGE_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="age" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>

      <div className="question">
        <h3>2. What is your gender?</h3>
        <div className="options">
          {GENDER_OPTIONS.map((option) => (
            <label key={option}>
              <input required type="radio" name="gender" value={option} /> {option}
            </label>
          ))}
        </div>
      </div>

      <div className="question">
        <h3>3. What is the highest level of diploma you currently hold? (Not what you are currently studying)</h3>
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

      <div className="question">
        <h3>4. Have you played educational/serious games before?</h3>
        <div className="options">
          {SERIOUS_GAMES_OPTIONS.map((option) => (
            <label key={option}>
              <input
                required
                type="radio"
                name="serious_games_experience"
                value={option}
                checked={seriousGamesExperience === option}
                onChange={handleSeriousGamesExperienceChange}
              />{" "}
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="question">
        <h3>5. If you have played educational/serious games, how often do you play them?</h3>
        <div className="options">
          {SERIOUS_GAMES_FREQUENCY_OPTIONS.map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="serious_games_frequency"
                value={option}
                disabled={seriousGamesExperience !== "Yes"}
                checked={seriousGamesFrequency === option}
                onChange={handleSeriousGamesFrequencyChange}
              />{" "}
              {option}
            </label>
          ))}
        </div>
        {showSeriousGamesFrequencyWarning ? (
          <p className="warning">Select how often you play educational/serious games before continuing.</p>
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
