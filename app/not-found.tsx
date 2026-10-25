import { InteriorLayout } from "@/components/layout/InteriorLayout";
import { ButtonLink } from "@/components/ui/button";
export default function NotFound() {
  return <InteriorLayout><p className="eyebrow">404 / Page not found</p><h1 className="section-title mt-4">Let&apos;s find your next workshop.</h1><p className="section-description mt-5">That page isn&apos;t available. The workshop collection is a good place to start.</p><ButtonLink href="/workshops" className="mt-8">Browse workshops</ButtonLink></InteriorLayout>;
}
