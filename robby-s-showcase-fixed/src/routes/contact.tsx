import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Achmad Robby Ferdyansyah" },
      { name: "description", content: "Hubungi Achmad Robby Ferdyansyah via email, telepon, Instagram, LinkedIn, atau GitHub." },
      { property: "og:title", content: "Contact — Achmad Robby Ferdyansyah" },
      { property: "og:description", content: "Mari terhubung." },
    ],
  }),
  component: Contact,
});

const contacts = [
  { label: "Email", value: "robyferdy27@gmail.com", href: "mailto:robyferdy27@gmail.com", icon: "✉️" },
  { label: "Telepon", value: "+62 821-3133-6018", href: "tel:+6282131336018", icon: "📱" },
  { label: "Instagram", value: "@rbyfrdy", href: "https://instagram.com/rbyfrdy", icon: "📸" },
  { label: "LinkedIn", value: "Achmad Robby Ferdyansyah", href: "https://www.linkedin.com/in/achmad-robby-ferdyansyah-57a855336", icon: "💼" },
  { label: "GitHub", value: "rbyfrdy", href: "https://github.com/rbyfrdy", icon: "💻" },
  { label: "Lokasi", value: "Sidoarjo, Jawa Timur", href: "https://maps.google.com/?q=Sidoarjo", icon: "📍" },
];

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-12 text-center">
        <p className="text-primary font-medium uppercase tracking-wide text-sm">Kontak</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Mari Terhubung</h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Tertarik berkolaborasi atau sekadar berdiskusi? Hubungi saya melalui kanal berikut.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary hover:bg-secondary transition-all group"
          >
            <div className="text-3xl">{c.icon}</div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{c.label}</p>
              <p className="font-medium truncate group-hover:text-primary transition-colors">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}