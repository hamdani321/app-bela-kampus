"use client";
import Alert from "@/src/components/ui/Alert";
import { Portal } from "@/src/models/portal.models";
import { Registrasi, RegistrasiAnggota } from "@/src/models/registrasi.models";
import { getActivePortal } from "@/src/modules/portal/services/portal.service";
import { formatDate } from "@/src/modules/utilities/date-formatter";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PortalRegistrasiPage() {
  const [dataPortal, setDataPortal] = useState<Portal | null>(null);
  const [registrasi, setRegistrasi] = useState<Registrasi | null>(null);
  const [registrasiAnggota, setRegistrasiAnggota] =
    useState<RegistrasiAnggota | null>(null);

  async function fetchdataPortal() {
    try {
      const result = await getActivePortal();

      console.log(result);
      setDataPortal(result.data.portal);
      setRegistrasi(result.data.registrasi);
      setRegistrasiAnggota(result.data.registrasi_anggota);
    } catch (error) {}
  }

  useEffect(() => {
    fetchdataPortal();
  }, []);

  return (
    <>
      {/* Page Header */}
      <div>
        <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
          <span>Dashboard</span>
          <span>/</span>
          <span className="font-medium text-indigo-600">Portal Registrasi</span>
        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Portal Registrasi Bela Kampus
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          Temukan portal registrasi yang sedang dibuka dan daftarkan kelompokmu
          untuk mengikuti kegiatan Bela Kampus.
        </p>
      </div>

      {/* Portal Available */}
      {dataPortal ? (
        <div className="space-y-6">
          {/* Featured Portal */}
          <section className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-6 shadow-xl shadow-indigo-900/10 sm:p-9">
            {/* Decorative Background */}
            <div className="pointer-events-none absolute -right-16 -top-24 -z-10 h-80 w-80 rounded-full border-[40px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-32 right-1/4 -z-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-100">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                  Portal Sedang Dibuka
                </div>

                <p className="mb-3 text-sm font-medium tracking-widest text-indigo-200 uppercase">
                  Pendaftaran Bela Kampus
                </p>

                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {dataPortal.tahun_ajaran?.nama}
                  {/* nama */}
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-indigo-100 sm:text-base">
                  {dataPortal.tahun_ajaran?.jenis}{" "}
                  {dataPortal.tahun_ajaran?.tahun}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs text-indigo-200">Tahun Ajaran</p>
                    <p className="mt-1 font-bold text-white">
                      {dataPortal.tahun_ajaran?.nama}
                      {/* taun ajaran */}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-sm">
                    <p className="text-xs text-indigo-200">Semester</p>
                    <p className="mt-1 font-bold text-white">
                      {dataPortal.tahun_ajaran?.jenis}
                    </p>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="hidden shrink-0 items-center justify-center lg:flex">
                <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm">
                  <div className="absolute inset-5 rounded-full border border-dashed border-white/20" />
                  <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-indigo-950/20 rotate-[-8deg]">
                    <svg
                      className="h-20 w-20 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                      />
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9 16 2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute -right-2 top-8 rounded-xl bg-emerald-400 p-3 text-white shadow-lg">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 12 4 4L19 6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Alert */}

          {registrasi != null || registrasiAnggota != null ? (
            <>
              <Alert title="Sukses!" dismissible type="success" key={"Alert"}>
                Sudah melakukan registrasi
              </Alert>
            </>
          ) : null}

          {/* <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
           
          </section> */}
          {/* End Alert */}

          {/* Portal Information */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Registration Period */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Periode Registrasi
                  </h3>
                  <p className="text-xs text-slate-500">
                    Jadwal pelaksanaan pendaftaran
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-xs font-medium text-slate-500">
                    Tanggal Dibuka
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-800">
                    {formatDate(dataPortal.waktu_mulai)}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Mulai registrasi
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-xs font-medium text-slate-500">
                    Batas Akhir
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-800">
                    {formatDate(dataPortal.waktu_selesai)}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-600">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Batas akhir registrasi
                  </div>
                </div>
              </div>
            </section>

            {/* Registration Action */}
            <section className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2m6-10a4 4 0 100-8 4 4 0 000 8zm10-2v6m3-3h-6"
                    />
                  </svg>
                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Siap Mendaftar?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Segera daftarkan kelompokmu sebelum periode registrasi
                  berakhir.
                </p>
              </div>

              <Link
                href={`/portal/registrasi/${dataPortal.id}`}
                // onClick={() => console.log("Menu registrasi", dataPortal.id)}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
              >
                Mulai Registrasi
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6 6 6-6 6"
                  />
                </svg>
              </Link>
            </section>
          </div>

          {/* Important Information */}
          <div className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-4m0-4h.01M22 12a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-900">
                Informasi Penting
              </h4>
              <p className="mt-1 text-sm leading-6 text-blue-800/80">
                Pastikan kamu sudah memiliki kelompok sebelum melakukan
                registrasi. Jika bertindak sebagai ketua kelompok, kamu dapat
                mendaftarkan anggota kelompok sekaligus.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State: No Active Portal */
        <section className="flex min-h-[480px] flex-col items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
          <div className="relative mb-8">
            <div className="absolute inset-0 scale-150 rounded-full bg-indigo-50 blur-2xl" />

            <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-indigo-50 to-violet-100">
              <svg
                className="h-20 w-20 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="16"
                  rx="2"
                  strokeWidth="1.5"
                />
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  d="M8 3v4m8-4v4M4 10h16m-8 4v4m-2-2h4"
                />
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  d="m17 14 3 3m0-3-3 3"
                />
              </svg>
            </div>

            <div className="absolute -right-2 top-1 rounded-full border-4 border-white bg-amber-100 p-2 text-amber-600">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 8v4l2 2m-2-11a9 9 0 100 18 9 9 0 000-18z"
                />
              </svg>
            </div>
          </div>

          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Belum Ada Portal Aktif
          </span>

          <h2 className="max-w-lg text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Belum Ada Portal Registrasi yang Dibuka
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
            Saat ini belum tersedia portal registrasi Bela Kampus yang sedang
            dibuka. Silakan kembali lagi nanti untuk melihat informasi
            pendaftaran terbaru.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7v5h-5M4 17v-5h5m11-5a8 8 0 00-14.9-2M4 17a8 8 0 0014.9 2"
                />
              </svg>
              Muat Ulang Halaman
            </button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-slate-400">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Informasi portal akan diperbarui oleh administrator.
          </div>
        </section>
      )}
    </>
  );
}
