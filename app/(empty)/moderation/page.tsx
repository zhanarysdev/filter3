import dynamic from "next/dynamic";

const Moderation = dynamic(() => import("@/components/moderation"), {
  ssr: false, // Disables SSR for this component
});
export default function ModerationPage() {
  return <Moderation />;
}
