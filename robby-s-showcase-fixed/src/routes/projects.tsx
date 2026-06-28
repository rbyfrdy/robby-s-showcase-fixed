import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Achmad Robby Ferdyansyah" },
      { name: "description", content: "Proyek akademik dan kompetisi dari Achmad Robby Ferdyansyah." },
      { property: "og:title", content: "Projects — Achmad Robby Ferdyansyah" },
      { property: "og:description", content: "Proyek akademik dan kompetisi." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    title: "SIMPANKU",
    subtitle: "Aplikasi Manajemen Keuangan Pribadi",
    date: "Februari 2026",
    tags: ["React", "Tailwind", "UI/UX", "Team Project"],
    desc:
      "Aplikasi web manajemen keuangan pribadi dengan fitur pencatatan pemasukan, pengeluaran, dan laporan keuangan berkala. Visualisasi grafik & ringkasan statistik untuk memudahkan pengguna memantau kondisinya.",
    emoji: "💰",
  },
  {
    title: "UX UINIC 7.0",
    subtitle: "Kompetisi UI/UX Design Nasional",
    date: "September — Desember 2025",
    tags: ["Figma", "User Research", "Prototyping"],
    desc:
      "Berpartisipasi dalam kompetisi desain UI/UX tingkat nasional. Menerapkan metodologi desain dari ideasi, wireframing, hingga prototipe interaktif berbasis riset pengguna.",
    emoji: "🎨",
  },
  {
    title: "Fasilkom Fest",
    subtitle: "Volunteer BEM Fasilkom — Keamanan & Perizinan",
    date: "Desember 2025",
    tags: ["Event", "Coordination"],
    desc:
      "Mengurus administrasi & perizinan acara kampus, berkoordinasi dengan birokrasi universitas, serta memastikan ketertiban dan keamanan selama acara.",
    emoji: "🎪",
  },
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <header className="mb-12">
        <p className="text-primary font-medium uppercase tracking-wide text-sm">Portofolio</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Projects</h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Kumpulan proyek akademik, kompetisi, dan pengalaman organisasi yang pernah saya kerjakan.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group bg-card border border-border rounded-2xl p-6 hover:border-primary transition-colors"
          >
            <div className="text-4xl mb-4">{p.emoji}</div>
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p className="text-accent font-medium text-sm mt-1">{p.subtitle}</p>
            <p className="text-xs text-muted-foreground mt-1">{p.date}</p>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground border border-border">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}