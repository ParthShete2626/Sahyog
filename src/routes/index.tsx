import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="home">
      <div className="home__mark" aria-hidden="true">
        <span />
        <span />
      </div>
      <section className="home__content">
        <p className="home__eyebrow">Sahyog · सहयोग</p>
        <h1>Good things take shape when we work together.</h1>
        <p className="home__lede">
          A thoughtful space for people, ideas, and shared progress.
        </p>
      </section>
      <p className="home__note">The next chapter is being prepared.</p>
    </main>
  );
}
