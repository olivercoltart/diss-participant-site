"use client";

import { useState } from "react";

export default function ConsentForm({ action }) {
  const [consentResponse, setConsentResponse] = useState("");

  return (
    <form action={action}>
      <div className="question">
        <div className="options">
          <label>
            <input
              required
              type="radio"
              name="consent_response"
              value="agree"
              checked={consentResponse === "agree"}
              onChange={(event) => setConsentResponse(event.target.value)}
            />{" "}
            I agree to voluntarily take part in this study (continue)
          </label>
          <label>
            <input
              required
              type="radio"
              name="consent_response"
              value="disagree"
              checked={consentResponse === "disagree"}
              onChange={(event) => setConsentResponse(event.target.value)}
            />{" "}
            I do not agree to this consent form (exit survey)
          </label>
        </div>
        {consentResponse === "disagree" ? (
          <p className="warning">If you do not agree to take part you can close this tab</p>
        ) : null}
      </div>

      <nav className="nav">
        <button className="button" type="submit">
          Continue
        </button>
      </nav>
    </form>
  );
}
