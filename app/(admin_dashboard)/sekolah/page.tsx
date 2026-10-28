import Link from "next/link";

export default function SekolahPage() {
  return (
    <>
      {/* Header */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-medium text-blue-600">Sekolah</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Manajemen Data Sekolah
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Kelola informasi sekolah mitra, kontak, alamat, dan koordinat lokasi
            untuk kegiatan promosi kampus.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
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
                d="M12 10v6m0 0 3-3m-3 3-3-3M5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z"
              />
            </svg>
            Export Data
          </button>

          <Link
            href={"/sekolah/create"}
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
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
            Tambah Sekolah
          </Link>
        </div>
      </section>

      {/* Statistik */}
      <section className="grid mt-3 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Sekolah
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                156
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Seluruh sekolah terdaftar
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[78%] rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Lokasi Terdata
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                142
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Memiliki koordinat lokasi
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                />
                <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[91%] rounded-full bg-emerald-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Kontak Email</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                148
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Sekolah dengan email
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
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
                  height="14"
                  rx="2"
                  strokeWidth="1.8"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m4 7 8 6 8-6"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[95%] rounded-full bg-violet-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Kontak Telepon
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                151
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Sekolah dengan nomor HP
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
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
                  d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 14h2"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[97%] rounded-full bg-amber-500" />
          </div>
        </div>
      </section>

      {/* Tabel sekolah */}
      <section className="overflow-hidden mt-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Daftar Sekolah</h2>
            <p className="mt-1 text-sm text-slate-500">
              Informasi sekolah mitra untuk mendukung kegiatan promosi kampus.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 lg:self-auto"
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
                d="M4 7h16M7 12h10m-7 5h4"
              />
            </svg>
            Filter
          </button>
        </div>

        {/* Pencarian */}
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 bg-slate-50/60 p-5 md:grid-cols-2">
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
              placeholder="Cari nama sekolah, email, atau nomor HP..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <select
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Semua Kelengkapan Lokasi</option>
            <option value="lengkap">Koordinat tersedia</option>
            <option value="belum">Koordinat belum tersedia</option>
          </select>
        </div>

        {/* Tabel data */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1250px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-4 font-semibold">No.</th>
                <th className="px-5 py-4 font-semibold">Nama Sekolah</th>
                <th className="px-5 py-4 font-semibold">Nomor HP</th>
                <th className="px-5 py-4 font-semibold">Email</th>
                <th className="px-5 py-4 font-semibold">Alamat</th>
                <th className="px-5 py-4 font-semibold">Latitude</th>
                <th className="px-5 py-4 font-semibold">Longitude</th>
                <th className="px-5 py-4 text-center font-semibold">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {[
                {
                  no: 1,
                  nama: "SMAN 1 Bangkinang",
                  hp: "0812-3456-7890",
                  email: "sman1bangkinang@example.com",
                  alamat: "Jl. Jenderal Sudirman, Bangkinang",
                  latitude: "0.329615",
                  longitude: "101.032703",
                  inisial: "S1",
                  warna: "bg-blue-100 text-blue-700",
                },
                {
                  no: 2,
                  nama: "SMAN 2 Bangkinang",
                  hp: "0813-4567-8901",
                  email: "sman2bangkinang@example.com",
                  alamat: "Jl. Olahraga, Bangkinang",
                  latitude: "0.337210",
                  longitude: "101.018420",
                  inisial: "S2",
                  warna: "bg-violet-100 text-violet-700",
                },
                {
                  no: 3,
                  nama: "SMKN 1 Bangkinang",
                  hp: "0821-5678-9012",
                  email: "smkn1bangkinang@example.com",
                  alamat: "Jl. M. Yamin, Bangkinang",
                  latitude: "0.341520",
                  longitude: "101.025610",
                  inisial: "SK",
                  warna: "bg-emerald-100 text-emerald-700",
                },
                {
                  no: 4,
                  nama: "SMAS Muhammadiyah",
                  hp: "0852-6789-0123",
                  email: "smasmuh@example.com",
                  alamat: "Jl. Ahmad Yani, Bangkinang",
                  latitude: "—",
                  longitude: "—",
                  inisial: "SM",
                  warna: "bg-amber-100 text-amber-700",
                },
                {
                  no: 5,
                  nama: "SMAN 1 Tapung",
                  hp: "0812-7890-1234",
                  email: "sman1tapung@example.com",
                  alamat: "Jl. Raya Petapahan, Tapung",
                  latitude: "0.567820",
                  longitude: "101.112340",
                  inisial: "ST",
                  warna: "bg-pink-100 text-pink-700",
                },
              ].map((sekolah) => (
                <tr
                  key={sekolah.no}
                  className="group transition hover:bg-blue-50/40"
                >
                  <td className="px-5 py-4 text-slate-400">{sekolah.no}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${sekolah.warna}`}
                      >
                        {sekolah.inisial}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">
                          {sekolah.nama}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          Institusi pendidikan
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <a
                      href={`tel:${sekolah.hp.replaceAll("-", "")}`}
                      className="whitespace-nowrap font-medium text-slate-600 transition hover:text-blue-600"
                    >
                      {sekolah.hp}
                    </a>
                  </td>

                  <td className="px-5 py-4">
                    <a
                      href={`mailto:${sekolah.email}`}
                      className="text-slate-600 transition hover:text-blue-600"
                    >
                      {sekolah.email}
                    </a>
                  </td>

                  <td className="max-w-[240px] px-5 py-4">
                    <p className="line-clamp-2 leading-5 text-slate-600">
                      {sekolah.alamat}
                    </p>
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-slate-600">
                    {sekolah.latitude}
                  </td>

                  <td className="px-5 py-4 font-mono text-xs text-slate-600">
                    {sekolah.longitude}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        type="button"
                        title="Lihat lokasi"
                        //   aria-label={`Lihat lokasi ${sekolah.nama}`}
                        disabled={sekolah.latitude === "—"}
                        //   onClick={() =>
                        //     window.open(
                        //       `https://www.google.com/maps?q=${sekolah.latitude},${sekolah.longitude}`,
                        //       "_blank",
                        //       "noopener,noreferrer"
                        //     )
                        //   }
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-emerald-100 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-30"
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
                            d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                          />
                          <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
                        </svg>
                      </button>

                      <button
                        type="button"
                        title="Lihat detail"
                        //   aria-label={`Lihat detail ${sekolah.nama}`}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-100 hover:text-blue-700"
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
                      </button>

                      <button
                        type="button"
                        title="Edit sekolah"
                        //   aria-label={`Edit ${sekolah.nama}`}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-amber-100 hover:text-amber-700"
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
                        title="Hapus sekolah"
                        //   aria-label={`Hapus ${sekolah.nama}`}
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-red-100 hover:text-red-600"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-slate-500">
            Menampilkan{" "}
            <span className="font-semibold text-slate-800">1–5</span> dari{" "}
            <span className="font-semibold text-slate-800">156</span> sekolah
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-400 disabled:cursor-not-allowed"
            >
              Sebelumnya
            </button>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm"
            >
              1
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              2
            </button>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              3
            </button>

            <span className="px-1 text-slate-400">...</span>

            <button
              type="button"
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
