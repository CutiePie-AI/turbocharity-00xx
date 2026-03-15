import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 sm:py-32 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-dark">
        From Idea to{" "}
        <span className="text-primary">501(c)(3)</span>{" "}
        in Days, Not Months
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        TurboCharity is the AI-powered platform that helps you incorporate,
        generate bylaws, and auto-fill IRS Form 1023-EZ&nbsp;&mdash;&nbsp;without
        expensive lawyers.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Button href="/start" variant="primary" size="lg">
          Start Your Nonprofit
        </Button>
        <Button href="/how-it-works" variant="outline" size="lg">
          See How It Works
        </Button>
      </div>
    </Container>
  );
}
