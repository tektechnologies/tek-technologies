import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => (
    <div className="p-2">
      <h3>About TEK Technologies</h3>
      <p>We specialize in IoT solutions for enterprise businesses.</p>
    </div>
  ),
});
