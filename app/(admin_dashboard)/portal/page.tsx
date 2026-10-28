export default function PortalPage() {
  return (
    <>
      {/* Header */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-medium text-blue-600">
              Portal Bela Kampus
            </span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Manajemen Portal
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Kelola portal kegiatan Bela Kampus, periode pendaftaran, dan status
            pelaksanaan promosi kampus.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m-7-7h14"
            />
          </svg>
          Buat Portal Baru
        </button>
      </section>

      {/* Statistik */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "Total Portal",
            value: "12",
            description: "Seluruh portal terdaftar",
            icon: "grid",
            color: "blue",
          },
          {
            label: "Portal Aktif",
            value: "3",
            description: "Sedang dibuka untuk kegiatan",
            icon: "check",
            color: "emerald",
          },
          {
            label: "Akan Datang",
            value: "4",
            description: "Periode belum dimulai",
            icon: "calendar",
            color: "violet",
          },
          {
            label: "Selesai",
            value: "5",
            description: "Periode telah berakhir",
            icon: "clock",
            color: "amber",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </h2>
                <p className="mt-2 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                  item.color === "blue"
                    ? "bg-blue-50 text-blue-600"
                    : item.color === "emerald"
                    ? "bg-emerald-50 text-emerald-600"
                    : item.color === "violet"
                    ? "bg-violet-50 text-violet-600"
                    : "bg-amber-50 text-amber-600"
                }`}
              >
                {item.icon === "grid" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="3"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="3"
                      y="14"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                    <rect
                      x="14"
                      y="14"
                      width="7"
                      height="7"
                      rx="1.5"
                      strokeWidth="1.8"
                    />
                  </svg>
                )}
                {item.icon === "check" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 12 4 4L19 6"
                    />
                  </svg>
                )}
                {item.icon === "calendar" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="16"
                      rx="2"
                      strokeWidth="1.8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeWidth="1.8"
                      d="M16 3v4M8 3v4M3 10h18"
                    />
                  </svg>
                )}
                {item.icon === "clock" && (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M12 7v5l3 2"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Toolbar */}
      <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Daftar Portal</h2>
          <p className="mt-1 text-sm text-slate-500">
            Pilih portal untuk melihat dan mengelola informasi kegiatannya.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <svg
              className="absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="1.8" />
              <path strokeLinecap="round" strokeWidth="1.8" d="m16 16 4 4" />
            </svg>
            <input
              type="text"
              placeholder="Cari nama portal..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 sm:w-64"
            />
          </div>

          <select
            defaultValue=""
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Semua Status</option>
            <option value="AKTIF">Aktif</option>
            <option value="AKAN_DATANG">Akan Datang</option>
            <option value="SELESAI">Selesai</option>
          </select>
        </div>
      </section>

      {/* Grid Card Portal */}
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[
          {
            id: 1,
            nama: "Bela Kampus 2026/2027 Ganjil",
            tahunAjaran: "2026/2027",
            semester: "Ganjil",
            mulai: "01 Nov 2026",
            selesai: "31 Jan 2027",
            status: "AKAN DATANG",
            deskripsi:
              "Portal pendaftaran dan pengelolaan kegiatan promosi kampus semester ganjil.",
            gradient: "from-blue-600 to-indigo-700",
            iconBg: "bg-blue-500/20",
          },
          {
            id: 2,
            nama: "Bela Kampus 2026/2027 Genap",
            tahunAjaran: "2026/2027",
            semester: "Genap",
            mulai: "01 Feb 2027",
            selesai: "30 Jun 2027",
            status: "AKAN DATANG",
            deskripsi:
              "Persiapan kegiatan kunjungan promosi kampus untuk semester genap.",
            gradient: "from-violet-600 to-purple-700",
            iconBg: "bg-white/15",
          },
          {
            id: 3,
            nama: "Bela Kampus 2025/2026 Genap",
            tahunAjaran: "2025/2026",
            semester: "Genap",
            mulai: "01 Feb 2026",
            selesai: "30 Jun 2026",
            status: "SELESAI",
            deskripsi:
              "Arsip kegiatan promosi kampus dan kunjungan mahasiswa ke sekolah.",
            gradient: "from-slate-600 to-slate-800",
            iconBg: "bg-white/15",
          },
          {
            id: 4,
            nama: "Bela Kampus Khusus 2026",
            tahunAjaran: "2026/2027",
            semester: "Ganjil",
            mulai: "01 Okt 2026",
            selesai: "31 Des 2026",
            status: "AKTIF",
            deskripsi:
              "Portal kegiatan promosi khusus untuk program kunjungan sekolah mitra.",
            gradient: "from-emerald-600 to-teal-700",
            iconBg: "bg-white/15",
          },
          {
            id: 5,
            nama: "Bela Kampus 2025/2026 Ganjil",
            tahunAjaran: "2025/2026",
            semester: "Ganjil",
            mulai: "01 Agu 2025",
            selesai: "31 Jan 2026",
            status: "SELESAI",
            deskripsi:
              "Data historis pelaksanaan Bela Kampus semester ganjil sebelumnya.",
            gradient: "from-orange-500 to-amber-600",
            iconBg: "bg-white/15",
          },
          {
            id: 6,
            nama: "Bela Kampus Gelombang Khusus",
            tahunAjaran: "2026/2027",
            semester: "Ganjil",
            mulai: "01 Des 2026",
            selesai: "31 Des 2026",
            status: "AKAN DATANG",
            deskripsi:
              "Periode tambahan untuk mengatur kegiatan promosi dan kunjungan sekolah.",
            gradient: "from-cyan-600 to-blue-700",
            iconBg: "bg-white/15",
          },
        ].map((portal) => (
          <article
            key={portal.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
          >
            {/* Card Banner */}
            <div
              className={`relative overflow-hidden bg-gradient-to-br ${portal.gradient} p-5 text-white`}
            >
              <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border-[20px] border-white/10" />
              <div className="absolute -bottom-14 right-20 h-28 w-28 rounded-full bg-white/5" />

              <div className="relative flex items-start justify-between gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${portal.iconBg} ring-1 ring-white/20`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1m4 0h1M9 14h1m4 0h1M10 21v-4h4v4"
                    />
                  </svg>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                    portal.status === "AKTIF"
                      ? "bg-emerald-400/20 text-white ring-emerald-200/30"
                      : portal.status === "AKAN DATANG"
                      ? "bg-white/15 text-white ring-white/20"
                      : "bg-slate-900/20 text-white/90 ring-white/15"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      portal.status === "AKTIF"
                        ? "bg-emerald-300"
                        : portal.status === "AKAN DATANG"
                        ? "bg-amber-300"
                        : "bg-slate-300"
                    }`}
                  />
                  {portal.status === "AKTIF"
                    ? "Aktif"
                    : portal.status === "AKAN DATANG"
                    ? "Akan Datang"
                    : "Selesai"}
                </span>
              </div>

              <div className="relative mt-5">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                  Portal Bela Kampus
                </p>
                <h3 className="mt-2 min-h-[3.5rem] text-lg font-bold leading-7">
                  {portal.nama}
                </h3>
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-5 p-5">
              <p className="min-h-[3rem] text-sm leading-6 text-slate-500">
                {portal.deskripsi}
              </p>

              {/* Tahun ajaran */}
              <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="m12 14 9-5-9-5-9 5 9 5Zm-6-2.5V16l6 3 6-3v-4.5M21 9v6"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Tahun Ajaran</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-800">
                      {portal.tahunAjaran}
                    </p>
                  </div>
                </div>

                <span className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600">
                  {portal.semester}
                </span>
              </div>

              {/* Periode */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Periode Pelaksanaan
                </p>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                        strokeWidth="1.8"
                      />
                      <path
                        strokeLinecap="round"
                        strokeWidth="1.8"
                        d="M16 3v4M8 3v4M3 10h18"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-800">
                      {portal.mulai}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">Tanggal mulai</p>
                  </div>

                  <div className="flex shrink-0 flex-col items-center gap-1">
                    <div className="h-px w-7 bg-slate-300" />
                    <svg
                      className="h-4 w-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-sm font-semibold text-slate-800">
                      {portal.selesai}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Tanggal selesai
                    </p>
                  </div>
                </div>
              </div>

              {/* Aksi */}
              <div className="flex items-center gap-2 border-t border-slate-100 pt-4">
                <button
                  type="button"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
                    />
                    <circle cx="12" cy="12" r="2.5" strokeWidth="1.8" />
                  </svg>
                  Detail Portal
                </button>

                <button
                  type="button"
                  title="Edit portal"
                  aria-label={`Edit ${portal.nama}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="m14 5 5 5M4 20l4.5-1 10-10a2.12 2.12 0 0 0-3-3l-10 10L4 20Z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  title="Hapus portal"
                  aria-label={`Hapus ${portal.nama}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M4 7h16M10 11v6m4-6v6M5 7l1 13h12l1-13M9 7V4h6v3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Footer */}
      <div className="flex flex-col gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4 sm:flex-row sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="9" strokeWidth="1.8" />
            <path
              strokeLinecap="round"
              strokeWidth="1.8"
              d="M12 11v5m0-8h.01"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">
            Informasi pengelolaan portal
          </p>
          <p className="mt-1 text-sm leading-5 text-slate-600">
            Pastikan periode portal sesuai dengan tahun ajaran. Status portal
            sebaiknya ditentukan berdasarkan status administrasi dan tanggal
            pelaksanaan yang berlaku.
          </p>
        </div>
      </div>
    </>
  );
}
