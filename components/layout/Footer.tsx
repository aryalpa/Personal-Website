import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background py-8">
      <Container>
        <div className="text-center tracking-wide text-text-light">
          © {new Date().getFullYear()} Prakash Aryal. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}