// OC Vote Info App with Hero, Alert, and Footer Navigation
import React, { useState } from "react";
import './App.css';

const links = [
  {
    title: "Polling Place Locator",
    description: "Find where you vote on election day.",
    url: "https://ocvote.gov/voting/polling-place-locator",
  },
  {
    title: "Drop Box Locator",
    description: "Find a vote-by-mail drop box near you.",
    url: "https://ocvote.gov/voting/vote-by-mail/drop-box-locator",
  },
  {
    title: "Accessibility",
    description: "Accessibility info for all voters.",
    url: "https://ocvote.gov/voting/accessibility",
  },
  {
    title: "Language Access",
    description: "Voting information in your language.",
    url: "https://ocvote.gov/voting/language-access",
  },
  {
    title: "Community Outreach",
    description: "Learn about voter education efforts.",
    url: "https://ocvote.gov/community",
  },
];

export default function App() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <main className="container">
      <header className="header">
        <img src="/favicon.ico" alt="logo" className="logo" />
        <h1>Orange County Voting Info</h1>
        <p className="disclaimer"><em>Unofficial companion app – data from <a href="https://ocvote.gov">ocvote.gov</a></em></p>
      </header>

      {!dismissed && (
        <div className="alert">
          🗳️ Early voting starts soon! Make sure your registration is up to date.
          <button className="close" onClick={() => setDismissed(true)}>×</button>
        </div>
      )}

      <div className="hero">
        <h2>Your vote matters in Orange County</h2>
        <p>Access up-to-date voting information for the upcoming election.</p>
      </div>

      <section className="card-grid">
        {links.map((item) => (
          <div className="card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Visit Page →
            </a>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>Need help? Contact the <a href="https://ocvote.gov/contact">OC Registrar of Voters</a></p>
        <p><em>This site is not affiliated with any government agency.</em></p>
      </footer>
    </main>
  );
}
