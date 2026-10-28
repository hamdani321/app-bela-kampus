export default function Loading() {
  return (
    <>
      <div className="flex min-h-[calc(100vh-140px)] items-center justify-center">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-10">
          {/* Background decoration */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-indigo-100/70 blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            {/* Logo */}
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-10 w-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.5 11.5v5c3.5 3 7.5 3 11 0v-5M21 10v6"
                />
              </svg>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold tracking-tight text-slate-800">
              Bela Kampus
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Sistem Informasi Manajemen
            </p>

            {/* Loading spinner */}
            <div className="relative my-9 flex h-16 w-16 items-center justify-center">
              <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-100 border-t-blue-600" />
              <div className="h-7 w-7 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />
            </div>

            {/* Loading message */}
            <h3 className="text-lg font-semibold text-slate-800">
              Menyiapkan halaman...
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Mohon tunggu sebentar, kami sedang menyiapkan data untuk Anda.
            </p>

            {/* Progress bar */}
            <div className="mt-8 w-full">
              <div className="mb-2 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-500">
                  Memuat sistem
                </span>
                <span className="animate-pulse font-semibold text-blue-600">
                  Mohon tunggu
                </span>
              </div>

              <div
                className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label="Halaman sedang dimuat"
              >
                <div className="h-full w-2/5 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Bela Kampus · Portal Administrasi
            </div>
          </div>

          {/* <style tsx>{`
            @keyframes loading {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(250%);
              }
            }
          `}</style> */}
        </div>
      </div>
    </>
  );
}
