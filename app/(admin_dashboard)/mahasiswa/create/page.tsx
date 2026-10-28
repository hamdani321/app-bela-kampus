export default function CreateMahasiswaPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Breadcrumb */}
        {/* <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <a href="/dashboard" className="transition hover:text-indigo-600">
            Dashboard
          </a>
          <span>/</span>
          <a href="/mahasiswa" className="transition hover:text-indigo-600">
            Data Mahasiswa
          </a>
          <span>/</span>
          <span className="font-medium text-indigo-600">Tambah Mahasiswa</span>
        </nav> */}

        {/* Page Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                />
                <circle cx="10" cy="7" r="4" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 8v6m3-3h-6"
                  transform="translate(-1 -1)"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tambah Mahasiswa
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Tambahkan data mahasiswa ke sistem untuk mendukung pengelolaan
              peserta dan kegiatan Bela Kampus.
            </p>
          </div>

          <a
            href="/mahasiswa"
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali
          </a>
        </div>

        {/* Info Banner */}
        {/* <div className="flex gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11v5m0-8h.01"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-indigo-950">
              Informasi data mahasiswa
            </h3>
            <p className="mt-1 text-sm leading-6 text-indigo-800/80">
              Pastikan nama, NIM, email, kelas, dan program studi sesuai dengan
              data akademik mahasiswa yang terdaftar.
            </p>
          </div>
        </div> */}

        {/* Form */}
        <form className="space-y-6">
          {/* Identitas Mahasiswa */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <circle cx="12" cy="8" r="4" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 21v-2a7 7 0 0114 0v2H5z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-900">
                  Identitas Mahasiswa
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Masukkan informasi identitas utama mahasiswa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              {/* Nama */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="nama"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  maxLength={255}
                  autoComplete="name"
                  placeholder="Masukkan nama lengkap mahasiswa"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
                <p className="mt-2 text-xs text-slate-400">
                  Isi nama sesuai data akademik resmi.
                </p>
              </div>

              {/* NIM */}
              <div>
                <label
                  htmlFor="nim"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nomor Induk Mahasiswa (NIM){" "}
                  <span className="text-rose-500">*</span>
                </label>
                <input
                  id="nim"
                  name="nim"
                  type="text"
                  required
                  maxLength={30}
                  autoComplete="off"
                  placeholder="Contoh: 230101001"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
                <p className="mt-2 text-xs text-slate-400">
                  NIM digunakan sebagai identitas unik mahasiswa.
                </p>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  autoComplete="email"
                  placeholder="mahasiswa@contoh.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Jenis Kelamin */}
              <div className="sm:col-span-2">
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Jenis Kelamin <span className="text-rose-500">*</span>
                </label>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-indigo-300 hover:bg-indigo-50/40 has-[:checked]:border-indigo-500 has-[:checked]:bg-indigo-50/70 has-[:checked]:ring-2 has-[:checked]:ring-indigo-500/10">
                    <input
                      type="radio"
                      name="jenis_kelamin"
                      value="L"
                      required
                      className="h-4 w-4 accent-indigo-600"
                    />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <circle cx="10" cy="14" r="6" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.5 9.5L21 3m-6 0h6v6"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-800">
                        Laki-laki
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        Jenis kelamin laki-laki
                      </span>
                    </div>
                  </label>

                  <label className="group flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-pink-300 hover:bg-pink-50/40 has-[:checked]:border-pink-500 has-[:checked]:bg-pink-50/70 has-[:checked]:ring-2 has-[:checked]:ring-pink-500/10">
                    <input
                      type="radio"
                      name="jenis_kelamin"
                      value="P"
                      required
                      className="h-4 w-4 accent-pink-600"
                    />
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-50 text-pink-600 transition group-hover:bg-pink-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <circle cx="12" cy="8" r="6" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14v8m-4-4h8"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-800">
                        Perempuan
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        Jenis kelamin perempuan
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Informasi Akademik */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12v5c4.5 3 9.5 3 14 0v-5M21 9v6"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Informasi Akademik</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Tentukan kelas dan program studi mahasiswa.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              {/* Kelas */}
              <div>
                <label
                  htmlFor="kelas_id"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Kelas <span className="text-rose-500">*</span>
                </label>
                <select
                  id="kelas_id"
                  name="kelas_id"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Pilih kelas mahasiswa
                  </option>
                  {/* Ganti dengan data kelas dari API */}
                  <option value="1">Kelas A</option>
                  <option value="2">Kelas B</option>
                  <option value="3">Kelas C</option>
                </select>
                <p className="mt-2 text-xs text-slate-400">
                  Pilih kelas sesuai penempatan akademik mahasiswa.
                </p>
              </div>

              {/* Prodi */}
              <div>
                <label
                  htmlFor="prodi_id"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Program Studi <span className="text-rose-500">*</span>
                </label>
                <select
                  id="prodi_id"
                  name="prodi_id"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Pilih program studi
                  </option>
                  {/* Ganti dengan data prodi dari API */}
                  <option value="1">Teknik Informatika</option>
                  <option value="2">Sistem Informasi</option>
                  <option value="3">Teknik Mesin</option>
                  <option value="4">Teknik Pengolahan Sawit</option>
                </select>
                <p className="mt-2 text-xs text-slate-400">
                  Pilih program studi sesuai data akademik.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="sticky bottom-0 z-10 -mx-4 border-t border-slate-200 bg-white/95 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6 xl:static xl:mx-0 xl:border-0 xl:bg-transparent xl:px-0 xl:py-0 xl:backdrop-blur-none">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                <span className="text-rose-500">*</span> Wajib diisi
              </p>

              <div className="flex flex-col-reverse gap-3 sm:flex-row">
                <a
                  href="/mahasiswa"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Batal
                </a>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.98]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Simpan Mahasiswa
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
