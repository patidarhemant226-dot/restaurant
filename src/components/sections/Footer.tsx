import { Arrow } from "../ui/Arrow";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><a className="wordmark" href="#top">Mediterra<span>®</span></a><p>Many cuisines.<br />One warm welcome.</p><a className="footer-reserve" href="#reserve">Reserve your table <Arrow /></a></div>
      <div className="footer-column"><p className="footer-label">Explore</p><a href="#menu">Signature dishes</a><a href="#cuisines">Cuisines</a><a href="#our-story">Our story</a><a href="#gallery">Gallery</a></div>
      <div className="footer-column"><p className="footer-label">Visit us</p><p>14 Olive Street, Fort<br />Mumbai, Maharashtra 400001</p><a href="https://maps.google.com/?q=Fort,Mumbai" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div>
      <div className="footer-column"><p className="footer-label">Opening hours</p><p>Mon–Thu · 11am–11pm<br />Fri–Sun · 11am–12am</p><p className="footer-label footer-label-spaced">Say hello</p><a href="mailto:hello@mediterra.example">hello@mediterra.example</a><a href="tel:+912245678900">+91 22 4567 8900</a></div>
      <div className="footer-bottom"><span>© 2026 Mediterra. All rights reserved.</span><span><a href="#gallery">Instagram</a><i>·</i><a href="#gallery">Facebook</a><i>·</i><a href="#gallery">YouTube</a></span></div>
    </footer>
  );
}
