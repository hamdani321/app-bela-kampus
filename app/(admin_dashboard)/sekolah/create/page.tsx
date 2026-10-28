export default function CreateSekolahPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <a href="/dashboard" className="transition hover:text-indigo-600">
            Dashboard
          </a>
          <span>/</span>
          <a href="/sekolah" className="transition hover:text-indigo-600">
            Data Sekolah
          </a>
          <span>/</span>
          <span className="font-medium text-indigo-600">Tambah Sekolah</span>
        </nav>

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
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12v5c4.5 3 9.5 3 14 0v-5M21 9v6"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Tambah Sekolah
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Daftarkan sekolah baru sebagai mitra kegiatan promosi dan
              kunjungan mahasiswa Bela Kampus.
            </p>
          </div>

          <a
            href="/sekolah"
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
        <div className="flex gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4 sm:p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
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
                d="M13 16h-1v-4h-1m1-4h.01M12 22a10 10 0 110-20 10 10 0 010 20z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-sm font-bold text-indigo-950">
              Informasi pendaftaran sekolah
            </h3>
            <p className="mt-1 text-sm leading-6 text-indigo-800/80">
              Pastikan nama sekolah, alamat, dan informasi kontak diisi dengan
              benar agar memudahkan koordinasi kegiatan Bela Kampus.
            </p>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Identitas Sekolah */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
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
                    d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01M15 13v.01M15 16v.01M15 19v.01"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Identitas Sekolah</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Informasi utama mengenai sekolah yang akan didaftarkan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              <div className="sm:col-span-2">
                <label
                  htmlFor="nama"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nama Sekolah <span className="text-rose-500">*</span>
                </label>
                <input
                  id="nama"
                  name="nama"
                  type="text"
                  required
                  maxLength={255}
                  placeholder="Contoh: SMA Negeri 1 Bangkinang"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
                <p className="mt-2 text-xs text-slate-400">
                  Gunakan nama resmi sekolah sesuai data administrasi.
                </p>
              </div>

              <div>
                <label
                  htmlFor="jenis"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Jenjang Pendidikan <span className="text-rose-500">*</span>
                </label>
                <select
                  id="jenis"
                  name="jenis"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="" disabled>
                    Pilih jenjang pendidikan
                  </option>
                  <option value="SMA">SMA</option>
                  <option value="SMK">SMK</option>
                  <option value="MA">MA</option>
                  <option value="LAINNYA">Lainnya</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Status Sekolah <span className="text-rose-500">*</span>
                </label>
                <select
                  id="status"
                  name="status"
                  required
                  defaultValue="NEGERI"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                >
                  <option value="NEGERI">Negeri</option>
                  <option value="SWASTA">Swasta</option>
                </select>
              </div>
            </div>
          </section>

          {/* Informasi Alamat */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Alamat dan Lokasi</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Lokasi sekolah untuk pemetaan dan perencanaan kunjungan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              <div className="sm:col-span-2">
                <label
                  htmlFor="alamat"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Alamat Lengkap <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="alamat"
                  name="alamat"
                  required
                  rows={3}
                  placeholder="Masukkan nama jalan, nomor, desa atau kelurahan..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="provinsi"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Provinsi <span className="text-rose-500">*</span>
                </label>
                <input
                  id="provinsi"
                  name="provinsi"
                  type="text"
                  required
                  placeholder="Contoh: Riau"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="kabupaten"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Kabupaten / Kota <span className="text-rose-500">*</span>
                </label>
                <input
                  id="kabupaten"
                  name="kabupaten"
                  type="text"
                  required
                  placeholder="Contoh: Kabupaten Kampar"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="kecamatan"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Kecamatan
                </label>
                <input
                  id="kecamatan"
                  name="kecamatan"
                  type="text"
                  placeholder="Masukkan nama kecamatan"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="kode_pos"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Kode Pos
                </label>
                <input
                  id="kode_pos"
                  name="kode_pos"
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  pattern="[0-9]{5}"
                  placeholder="Contoh: 28412"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="latitude"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Latitude
                </label>
                <input
                  id="latitude"
                  name="latitude"
                  type="number"
                  step="any"
                  min="-90"
                  max="90"
                  placeholder="Contoh: 0.3296148"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="longitude"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Longitude
                </label>
                <input
                  id="longitude"
                  name="longitude"
                  type="number"
                  step="any"
                  min="-180"
                  max="180"
                  placeholder="Contoh: 101.0327029"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div className="sm:col-span-2">
                <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/70 p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-1.5a9 9 0 11-18 0 9 9 0 0118 0zM12 16.5h.01"
                    />
                  </svg>
                  <p className="text-sm leading-6 text-amber-900/80">
                    Koordinat bersifat opsional. Isi latitude dan longitude jika
                    lokasi sekolah akan ditampilkan pada peta. Pastikan keduanya
                    sesuai dengan titik lokasi sekolah yang sebenarnya.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Kontak Sekolah */}
          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
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
                    d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.5 1.93l-2.1 2.1a16 16 0 007.07 7.07l2.1-2.1a2 2 0 011.93-.5l2.8.7A2 2 0 0121 18.46V21a2 2 0 01-2 2h-1C9.16 23 1 14.84 1 5V5a2 2 0 012-2z"
                    transform="translate(1 -1)"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-900">Informasi Kontak</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Kontak yang dapat dihubungi untuk koordinasi kegiatan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:gap-6 sm:p-7">
              <div>
                <label
                  htmlFor="telepon"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nomor Telepon
                </label>
                <input
                  id="telepon"
                  name="telepon"
                  type="tel"
                  maxLength={20}
                  placeholder="Contoh: 0762xxxxxx"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email Sekolah
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="sekolah@contoh.sch.id"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="kepala_sekolah"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nama Kepala Sekolah
                </label>
                <input
                  id="kepala_sekolah"
                  name="kepala_sekolah"
                  type="text"
                  maxLength={255}
                  placeholder="Masukkan nama kepala sekolah"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
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
                  href="/sekolah"
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
                  Simpan Sekolah
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
