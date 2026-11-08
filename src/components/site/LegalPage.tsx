import type { ReactNode } from "react";
import { PageHero } from "./PageHero";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p>Last updated: November 2026</p>
      </PageHero>
      <div className="container-site max-w-3xl py-14">
        <div className="mb-8 rounded-xl border border-leaf/40 bg-accent p-4 text-sm text-accent-foreground">
          This page is a general template and should be reviewed by a qualified Nigerian legal practitioner before relying on it.
        </div>
        <article className="prose-article">{children}</article>
      </div>
    </>
  );
}
