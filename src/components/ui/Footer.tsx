export function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} - @github/santimat</p>
    </footer>
  );
}
