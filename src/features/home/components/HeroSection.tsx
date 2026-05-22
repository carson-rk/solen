import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-start justify-center bg-background text-foreground">
      
      <div className="flex flex-col gap-(--breathe) items-center justify-center">

        <Container>
          <h1 className="heading">you&apos;re here.</h1>
          <p className="text-secondary">that&apos;s enough for now</p>
        </Container>

        <Container>
          <Button asChild variant="secondary">
            <Link href="/reflect">
              continue
            </Link>
          </Button>
        </Container>

      </div>

    </section>
  );
}
