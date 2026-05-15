export default function Footer() {
  return (
    <footer className="footer flex items-center p-10 bg-base-300 text-base-content justify-between px-14">
      <nav>
        <h6 className="footer-title pointer-events-none">More</h6>
        <a className="link link-hover" href="mailto:subscriptions.tracker.contact@gmail.com" aria-label="Email contact">Contact</a>
        <a className="link link-hover" href="https://github.com/hamsterK" aria-label="GitHub profile">Author</a>
      </nav>
      <p className="pointer-events-none">2026 - Subscriptions Tracker</p>
    </footer>
  )
}
