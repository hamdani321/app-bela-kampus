export default function CreateTahunAjaranPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl space-y-7">
        {/* Breadcrumb */}
        {/* <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <span className="text-gray-300">/</span>
          <span>Master Data</span>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500">Tahun Ajaran</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-indigo-600">
            Tambah Tahun Ajaran
          </span>
        </nav> */}

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <svg
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
              Tambah Tahun Ajaran
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Tambahkan data tahun ajaran baru untuk mendukung pengelolaan
              periode kegiatan Bela Kampus.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Data Baru
          </div>
        </div>

        {/* Form */}
        <form className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-gray-100 bg-gradient-to-r from-indigo-50 via-white to-white px-6 py-6 sm:px-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm ring-1 ring-indigo-100">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Informasi Tahun Ajaran
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Isi periode tahun akademik dan pilih semester yang sesuai.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8">
            {/* Tahun Akademik */}
            <section>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Periode Akademik
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Tentukan rentang tahun akademik yang akan didaftarkan.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Tahun Mulai */}
                <div>
                  <label
                    htmlFor="tahun_mulai"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Tahun Mulai <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <input
                      id="tahun_mulai"
                      name="tahun_mulai"
                      type="datetime-local"
                      required
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    Tahun awal periode akademik.
                  </p>
                </div>

                {/* Tahun Akhir */}
                <div>
                  <label
                    htmlFor="tahun_akhir"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Tahun Akhir <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="tahun_akhir"
                    name="tahun_akhir"
                    type="date"
                    placeholder="Contoh: 2027"
                    required
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 hover:border-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                  <p className="mt-2 text-xs text-gray-500">
                    Tahun akhir periode akademik.
                  </p>
                </div>
              </div>
            </section>

            {/* Preview */}
            <section className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Format Tahun Ajaran
                    </p>
                    <p className="mt-1 text-xl font-bold text-gray-900">
                      2026/2027
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Contoh format penamaan tahun ajaran.
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-white px-3 py-1.5 text-xs font-medium text-indigo-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Preview
                </span>
              </div>
            </section>

            {/* Semester */}
            <section>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900">
                  Semester Akademik
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Pilih semester untuk tahun ajaran ini.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Ganjil */}
                <label className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-amber-300 has-[:checked]:border-amber-400 has-[:checked]:bg-amber-50/60">
                  <input
                    type="radio"
                    name="semester"
                    value="GANJIL"
                    required
                    className="mt-1 h-4 w-4 accent-amber-500"
                  />

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v10M8 10h8" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Semester Ganjil
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Periode semester pertama dalam tahun akademik.
                    </p>
                    <span className="mt-3 inline-flex rounded-lg bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
                      Ganjil
                    </span>
                  </div>
                </label>

                {/* Genap */}
                <label className="group flex cursor-pointer items-start gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-300 has-[:checked]:border-emerald-400 has-[:checked]:bg-emerald-50/60">
                  <input
                    type="radio"
                    name="semester"
                    value="GENAP"
                    required
                    className="mt-1 h-4 w-4 accent-emerald-600"
                  />

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 9h8M8 15h8" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-gray-900">
                      Semester Genap
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Periode semester kedua dalam tahun akademik.
                    </p>
                    <span className="mt-3 inline-flex rounded-lg bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Genap
                    </span>
                  </div>
                </label>
              </div>
            </section>

            {/* Notice */}
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
                  Informasi penting
                </p>
                <p className="mt-1 text-sm leading-6 text-blue-800/80">
                  Pastikan tahun akhir lebih besar satu tahun dari tahun mulai.
                  Kombinasi tahun ajaran dan semester juga perlu diperiksa agar
                  tidak terjadi data duplikat.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
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
                Simpan Tahun Ajaran
              </button>
            </div>
          </div>
        </form>

        {/* Footer Info */}
        <p className="text-center text-xs text-gray-400">
          Sistem Informasi Bela Kampus · Manajemen Tahun Ajaran
        </p>
      </div>
    </>
  );
}
