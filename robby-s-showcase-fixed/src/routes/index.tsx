import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import profileImageUrl from "@/assets/Robby.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Achmad Robby Ferdyansyah — Frontend & AI Developer" },
      { name: "description", content: "Mahasiswa Sistem Informasi UPN Veteran Jawa Timur, fokus pada Frontend Development & UI/UX." },
      { property: "og:title", content: "Achmad Robby Ferdyansyah — Frontend & AI Developer" },
      { property: "og:description", content: "Portfolio resmi — proyek, keahlian, dan pengalaman." },
    ],
  }),
  component: Index,
});

function Index() {
  const skills = [
    "HTML5","CSS3","JavaScript","React.js","Next.js","Tailwind CSS",
    "Bootstrap","Git & GitHub","Figma","REST API","VS Code","npm / Yarn",
  ];
  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Hero */}
      <section className="grid md:grid-cols-[1fr_auto] gap-10 items-center py-16 md:py-24">
        <div>
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Halo, saya</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Achmad Robby<br/>Ferdyansyah
          </h1>
          <p className="mt-4 text-xl text-accent font-medium">Frontend & AI Developer</p>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Mahasiswa Sistem Informasi semester 4 di Universitas Pembangunan Nasional Veteran
            Jawa Timur. Berfokus membangun antarmuka web yang responsif, interaktif, dan
            berorientasi pada pengalaman pengguna.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link to="/projects" className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
              Lihat Projects
            </Link>
            <Link to="/contact" className="px-5 py-3 rounded-lg border border-border hover:bg-secondary transition">
              Hubungi Saya
            </Link>
          </div>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary via-accent to-primary blur-xl opacity-40" />
          <img
            src={profileImageUrl}
            alt="Foto Achmad Robby Ferdyansyah"
            className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-card shadow-2xl"
          />
        </div>
      </section>

      {/* About */}
      <section className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          Memiliki kemampuan analitis yang kuat dalam merancang dan mengimplementasikan
          aplikasi web. Berdedikasi mempelajari teknologi terkini, didukung dasar akademik
          dalam sistem informasi, pemrograman, dan desain UI/UX. Berkomitmen untuk terus
          berkembang dan berkontribusi dalam tim yang dinamis dan inovatif.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">🎓 Pendidikan</h3>
            <p className="font-medium">UPN Veteran Jawa Timur</p>
            <p className="text-sm text-muted-foreground">Sistem Informasi · IPK 3.58 / 4.00</p>
            <p className="text-xs text-muted-foreground mt-1">2024 — Sekarang</p>
            <hr className="my-3 border-border" />
            <p className="font-medium">SMAN 1 Waru</p>
            <p className="text-sm text-muted-foreground">Jurusan IPA · 2021 — 2024</p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">🤝 Organisasi</h3>
            <p className="font-medium">Volunteer — Fasilkom Fest (BEM)</p>
            <p className="text-sm text-muted-foreground">Divisi Keamanan & Perizinan · Desember 2025</p>
            <p className="text-sm text-muted-foreground mt-2">
              Mengurus administrasi & perizinan kegiatan kampus serta menjaga ketertiban acara.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 border-t border-border">
        <h2 className="text-3xl font-bold mb-6">Keahlian</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {skills.map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm border border-border font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default text-center">
              {s}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">🌐</span> Bahasa
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">Indonesia</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Aktif</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-medium">Inggris</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Aktif</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">🧠</span> Soft Skill
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Problem Solving", "Critical Thinking", "Public Speaking", "Teamwork", "Time Management"].map((ss) => (
                <span key={ss} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm border border-border">
                  {ss}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
