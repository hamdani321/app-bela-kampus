export default function CreatePortalPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <span className="text-gray-300">/</span>
          <span>Portal</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-indigo-600">Tambah Portal</span>
        </nav> */}

        {/* Page Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M12 14v4M10 16h4" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Tambah Portal Baru
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Buat portal Bela Kampus untuk mengatur periode kegiatan promosi
              kampus dan pendaftaran mahasiswa.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Portal Baru
          </div>
        </div>

        {/* Form Card */}
        <form className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-white px-6 py-6 sm:px-8">
            <h2 className="text-lg font-bold text-gray-900">
              Informasi Portal
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Lengkapi informasi periode dan status portal di bawah ini.
            </p>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            {/* Tahun Ajaran */}
            <div>
              <label
                htmlFor="tahun_ajaran_id"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Tahun Ajaran <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <select
                  id="tahun_ajaran_id"
                  name="tahun_ajaran_id"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-11 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Pilih tahun ajaran
                  </option>
                  {/* Ganti dengan data dari API */}
                  <option value="1">2026/2027 - Ganjil</option>
                  <option value="2">2026/2027 - Genap</option>
                </select>

                <svg
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Pilih tahun ajaran yang menjadi periode kegiatan portal.
              </p>
            </div>

            {/* Periode Portal */}
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Periode Portal
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Tentukan kapan portal mulai berlaku dan berakhir.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Waktu Mulai */}
                <div className="rounded-2xl border border-gray-200 p-5 transition hover:border-indigo-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Waktu Mulai
                      </p>
                      <p className="text-xs text-gray-500">
                        Awal periode portal
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="waktu_mulai"
                    className="mb-2 block text-xs font-medium text-gray-600"
                  >
                    Tanggal dan waktu <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="waktu_mulai"
                    name="waktu_mulai"
                    type="datetime-local"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-300 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                {/* Waktu Selesai */}
                <div className="rounded-2xl border border-gray-200 p-5 transition hover:border-indigo-200">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                        <path d="m16 16 2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Waktu Selesai
                      </p>
                      <p className="text-xs text-gray-500">
                        Akhir periode portal
                      </p>
                    </div>
                  </div>

                  <label
                    htmlFor="waktu_selesai"
                    className="mb-2 block text-xs font-medium text-gray-600"
                  >
                    Tanggal dan waktu <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="waktu_selesai"
                    name="waktu_selesai"
                    type="datetime-local"
                    required
                    className="w-full min-w-0 rounded-xl border border-gray-300 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Status Portal <span className="text-red-500">*</span>
              </label>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Aktif */}
                <label className="group relative flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 p-4 transition has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/60 hover:border-emerald-300">
                  <input
                    type="radio"
                    name="status"
                    value="AKTIF"
                    className="mt-1 h-4 w-4 accent-emerald-600"
                    required
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                      <span className="text-sm font-semibold text-gray-900">
                        Aktif
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-gray-500">
                      Portal dapat digunakan sesuai periode dan aturan
                      pendaftaran yang berlaku.
                    </p>
                  </div>
                </label>

                {/* Nonaktif */}
                <label className="group relative flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-200 p-4 transition has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50 hover:border-gray-300">
                  <input
                    type="radio"
                    name="status"
                    value="NONAKTIF"
                    className="mt-1 h-4 w-4 accent-gray-600"
                    required
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-gray-400" />
                      <span className="text-sm font-semibold text-gray-900">
                        Nonaktif
                      </span>
                    </div>
                    <p className="mt-1.5 text-xs leading-5 text-gray-500">
                      Portal dinonaktifkan dan tidak tersedia untuk pendaftaran
                      baru.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Information Notice */}
            <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
              <svg
                className="mt-0.5 shrink-0 text-blue-600"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-900">
                  Perhatikan periode portal
                </p>
                <p className="mt-1 text-sm leading-6 text-blue-800/80">
                  Pastikan waktu selesai lebih besar daripada waktu mulai.
                  Status aktif tidak menggantikan validasi periode portal pada
                  backend.
                </p>
              </div>
            </div>
          </div>

          {/* Form Footer */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 bg-gray-50/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-xs text-gray-500">
              <span className="text-red-500">*</span> Wajib diisi
            </p>

            <div className="flex flex-col-reverse gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
              >
                Batal
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
                  <path d="M17 21v-8H7v8M7 3v5h8" />
                </svg>
                Simpan Portal
              </button>
            </div>
          </div>
        </form>

        {/* Bottom Helper */}
        <p className="text-center text-xs text-gray-400">
          Sistem Informasi Bela Kampus · Manajemen Portal
        </p>
      </div>
    </>
  );
}
