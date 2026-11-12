"use client";
import { Mahasiswa } from "@/src/models/mahasiswa.models";
import { Portal } from "@/src/models/portal.models";
import { RegistrasiPortalRequest } from "@/src/models/registrasi.models";
import { Sekolah } from "@/src/models/sekolah.models";
import {
  getDataFormRegistrasiPortal,
  registrasiPortal,
} from "@/src/modules/portal/services/portal.service";
import { formatDate } from "@/src/modules/utilities/date-formatter";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import Link from "next/link";
import Swal from "sweetalert2";

const modules = [AllCommunityModule];

export default function FormRegistrasiPortal() {
  const [tipeRegistrasi, setTipeRegistrasi] = useState<string>("INDIVIDU");
  const [sekolahId, setSekolahId] = useState<string>();
  const [registrasiAnggota, setRegistrasiAnggota] = useState<Mahasiswa[]>([]);
  const [sekolah, setSekolah] = useState<Sekolah[] | null>([]);
  const [portal, setPortal] = useState<Portal | null>(null);
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa[]>([]);
  const router = useRouter();
  const { idPortal } = useParams();
  async function fetchDataFormRegistrasiPortal() {
    const result = await getDataFormRegistrasiPortal(Number(idPortal));
    console.log(result);
    setMahasiswa(result.data.mahasiswa);
    setPortal(result.data.portal);
    setSekolah(result.data.sekolah);
  }
  useEffect(() => {
    fetchDataFormRegistrasiPortal();
  }, []);

  const users = [
    {
      id: 1,
      nama: "Ahmad Fauzan",
      nim: "202301001",
      email: "ahmad.fauzan@gmail.com",
    },
    {
      id: 2,
      nama: "Siti Rahmawati",
      nim: "202301002",
      email: "siti.rahmawati@gmail.com",
    },
    {
      id: 3,
      nama: "Muhammad Rizky",
      nim: "202301003",
      email: "muhammad.rizky@gmail.com",
    },
  ];

  const defaultColDef = useMemo<ColDef<Mahasiswa>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<Mahasiswa>[]>(
    () => [
      {
        headerName: "No",
        valueGetter: (params) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : "",
        width: 80,
        sortable: false,
        filter: false,
      },
      {
        field: "nama",
        headerName: "Nama Mahasiswa",
        minWidth: 250,
        flex: 1,
        filter: true,
        cellRenderer: (params: { data?: Mahasiswa }) => {
          const mahasiswa = params.data;

          if (!mahasiswa) return null;

          return (
            <div className="flex h-full items-center gap-3">
              <img
                src={`/assets/images/default.png`}
                alt={mahasiswa.nama}
                className="h-9 w-9 rounded-full border border-gray-200 object-cover"
              />

              <div className="flex min-w-0 flex-col justify-center">
                <span className="truncate font-medium text-gray-800">
                  {mahasiswa.nama}
                </span>
                <span className="truncate text-xs text-gray-500">
                  {mahasiswa.nim}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        field: "nim",
        headerName: "NIM",
        minWidth: 130,
        filter: true,
      },

      {
        field: "jenis_kelamin",
        headerName: "Jenis Kelamin",
        minWidth: 160,
        cellRenderer: (params: ICellRendererParams<Mahasiswa>) => {
          const value = params.data;

          if (!value) {
            return <span className="text-gray-400">-</span>;
          }

          const isLakiLaki = value.jenis_kelamin === "LAKI_LAKI";

          if (!isLakiLaki && value.jenis_kelamin !== "PEREMPUAN") {
            return <span className="text-gray-600">{value.jenis_kelamin}</span>;
          }

          return (
            <div className="flex h-full items-center">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                  isLakiLaki
                    ? "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200"
                    : "bg-pink-50 text-pink-700 ring-1 ring-inset ring-pink-200"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isLakiLaki ? "bg-blue-500" : "bg-pink-500"
                  }`}
                />
                {isLakiLaki ? "Laki-laki" : "Perempuan"}
              </span>
            </div>
          );
        },
      },
      {
        headerName: "Aksi",
        field: "id",
        width: 150,
        sortable: false,
        filter: false,
        resizable: false,
        cellRenderer: (params: ICellRendererParams<Mahasiswa>) => {
          const mahasiswa = params.data;

          if (!mahasiswa) return null;

          return (
            <div className="flex h-full items-center justify-center gap-2">
              {/* Detail */}
              <button
                type="button"
                onClick={() => {
                  const nim = String(mahasiswa.nim).trim();

                  setRegistrasiAnggota((prevState) => {
                    const isAlreadyRegistered = prevState.some(
                      (item) => String(item.nim).trim() === nim
                    );

                    if (isAlreadyRegistered) {
                      return prevState;
                    }

                    return [...prevState, mahasiswa];
                  });
                }}
                className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Tambah
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const registasiPayload: RegistrasiPortalRequest = {
        portal_id: Number(idPortal),
        sekolah_id: Number(sekolahId),
        tipe: tipeRegistrasi,
        registrasi_anggota: registrasiAnggota.map((item) => ({
          nim: item.nim,
        })),
      };
      const result = await registrasiPortal(registasiPayload);
      Swal.fire({
        title: "Sukses!",
        text: result.message,
        icon: "success",
      }).then(() => {
        router.push("/portal");
      });
    } catch (error) {}
  };

  return (
    <>
      {/* <main className="mx-auto max-w-[1600px] p-4 sm:p-6 xl:p-9"> */}
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span>Dashboard</span>
          <span className="text-slate-300">/</span>
          <span>Portal Bela Kampus</span>
          <span className="text-slate-300">/</span>
          <span className="font-semibold text-indigo-600">Detail Portal</span>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-indigo-600 to-violet-700 p-6 text-white shadow-xl shadow-indigo-200 sm:p-9">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-32 right-40 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                PORTAL AKTIF
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-100">
                Tahun Akademik 2026/2027
              </span>
            </div>

            <div className="mt-7 max-w-2xl">
              <p className="text-sm font-medium text-indigo-200">
                SISTEM INFORMASI BELA KAMPUS
              </p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Portal Bela Kampus
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base">
                Informasi periode pelaksanaan kegiatan Bela Kampus. Pastikan
                kamu melakukan registrasi selama portal masih aktif.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-indigo-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-indigo-200">
                    Periode
                  </p>
                  <p className="text-sm font-semibold">
                    {portal?.tahun_ajaran?.nama}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <svg
                  className="h-5 w-5 text-indigo-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-indigo-200">
                    Jenis Semester
                  </p>
                  <p className="text-sm font-semibold">
                    {portal?.tahun_ajaran?.jenis}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Information */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Informasi Portal
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Rincian informasi akademik dan periode pelaksanaan portal.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Portal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10l9-7 9 7v10a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1V10z"
                    />
                  </svg>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                  Aktif
                </span>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Nama Portal
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-800">
                Bela Kampus
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Portal kegiatan mahasiswa
              </p>
            </div>

            {/* Tahun Ajaran */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Tahun Ajaran
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-800">
                {portal?.tahun_ajaran?.nama}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Tahun akademik berjalan
              </p>
            </div>

            {/* Jenis Tahun Ajaran */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5L12 3z"
                  />
                </svg>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Jenis Tahun Ajaran
              </p>
              <h3 className="mt-1 text-lg font-bold text-slate-800">
                {portal?.tahun_ajaran?.jenis}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Semester {portal?.tahun_ajaran?.jenis}
              </p>
            </div>

            {/* Status */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="mt-5 text-xs font-medium uppercase tracking-wider text-slate-400">
                Status Registrasi
              </p>
              <h3 className="mt-1 text-lg font-bold text-emerald-600">
                {portal?.status}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Pendaftaran tersedia
              </p>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-bold text-slate-800">
                  Periode Pelaksanaan
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Jadwal dimulainya dan berakhirnya registrasi.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-6 sm:grid-cols-2">
            {/* Waktu Mulai */}
            <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-emerald-100/60" />
              <div className="relative">
                <div className="flex items-center gap-2 text-emerald-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">Waktu Mulai</span>
                </div>
                <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-800">
                  {/* 01 Agustus 2026 */}
                  {formatDate(portal?.waktu_mulai)}
                </p>
                {/* <p className="mt-1 text-sm text-slate-500">Pukul 08.00 WIB</p> */}
                <div className="mt-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Tanggal pembukaan
                </div>
              </div>
            </div>

            {/* Waktu Selesai */}
            <div className="relative overflow-hidden rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-rose-100/60" />
              <div className="relative">
                <div className="flex items-center gap-2 text-rose-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6l4 2"
                      />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold">Waktu Selesai</span>
                </div>
                <p className="mt-5 text-2xl font-extrabold tracking-tight text-slate-800">
                  {/* 30 September 2026 */}
                  {formatDate(portal?.waktu_selesai)}
                </p>
                <p className="mt-1 text-sm text-slate-500">Pukul 23.59 WIB</p>
                <div className="mt-4 inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700">
                  Batas akhir registrasi
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
              <span>Periode registrasi</span>
              <span>01 Agustus - 30 September 2026</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Ilustrasi progres periode, bukan perhitungan waktu aktual.
            </p>
          </div>
        </section>

        {/* Reminder */}
        <section className="flex flex-col gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v4m0 4h.01M10.3 3.8L2.8 17.5A2 2 0 004.5 20h15a2 2 0 001.7-2.5L13.7 3.8a2 2 0 00-3.4 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-indigo-900">
                Perhatikan batas waktu registrasi!
              </h3>
              <p className="mt-1 text-xs leading-5 text-indigo-700">
                Pastikan seluruh kegiatan Bela Kampus didaftarkan sebelum
                periode portal berakhir. Registrasi di luar periode tidak dapat
                dilakukan.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="shrink-0 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-95"
          >
            Kembali ke Dashboard
          </button>
        </section>

        <p className="pb-3 text-center text-xs text-slate-400">
          Sistem Informasi Bela Kampus · Politeknik Kampar
        </p>
      </div>
      {/* </main> */}

      <div className="mx-auto max-w-8xl space-y-6">
        {/* Header */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>
            <span>/</span>
            <span>Registrasi Portal</span>
            <span>/</span>
            <span className="font-medium text-indigo-600">Tambah</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-800">
            Registrasi Portal Bela Kampus
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Lengkapi formulir berikut untuk mendaftarkan kegiatan Bela Kampus.
          </p>
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-slate-100 bg-slate-50/70 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-slate-800">
                  Informasi Registrasi
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Masukkan informasi sekolah dan tipe kegiatan.
                </p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            {/* Sekolah */}
            <div className="space-y-2">
              <label
                htmlFor="sekolah"
                className="block text-sm font-semibold text-slate-700"
              >
                Sekolah
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="sekolah"
                name="sekolah"
                value={sekolahId}
                onChange={(event) => {
                  setSekolahId(event.target.value);
                }}
                defaultValue=""
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              >
                <option>Pilih sekolah tujuan</option>
                {sekolah?.map((item, index) => (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                ))}
              </select>

              <p className="text-xs text-slate-400">
                Pilih sekolah yang menjadi tujuan kegiatan Bela Kampus.
              </p>
            </div>

            {/* Tipe */}
            <div className="space-y-2">
              <label
                htmlFor="tipe"
                className="block text-sm font-semibold text-slate-700"
              >
                Tipe Registrasi
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="tipe"
                value={tipeRegistrasi}
                onChange={(event) => setTipeRegistrasi(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              >
                <option value="" disabled>
                  Pilih tipe registrasi
                </option>
                <option value="INDIVIDU">Individu</option>
                <option value="KELOMPOK">Kelompok</option>
              </select>

              <p className="text-xs text-slate-400">
                Tentukan apakah registrasi dilakukan secara individu atau
                kelompok.
              </p>
            </div>

            {/* Table Mahasiswa */}

            {tipeRegistrasi == "INDIVIDU" ? null : (
              <>
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  {/* Header */}
                  <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-slate-800">
                        Data Pengguna
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        Daftar seluruh pengguna yang terdaftar dalam sistem.
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      {registrasiAnggota.length} Pengguna
                    </span>
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-left text-sm">
                      <thead>
                        <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
                          <th className="px-6 py-4 font-semibold">Nama</th>
                          <th className="px-6 py-4 font-semibold">NIM</th>
                          <th className="px-6 py-4 font-semibold">Email</th>
                          <th className="px-6 py-4 text-center font-semibold">
                            Aksi
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-100">
                        {registrasiAnggota.map((mahasiswa) => (
                          <tr
                            key={mahasiswa.id}
                            className="transition-colors hover:bg-slate-50/80"
                          >
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                                  {mahasiswa.nama
                                    .split(" ")
                                    .map((word) => word[0])
                                    .slice(0, 2)
                                    .join("")}
                                </div>
                                <span className="font-semibold text-slate-800">
                                  {mahasiswa.nama}
                                </span>
                              </div>
                            </td>

                            <td className="px-6 py-4 font-medium text-slate-600">
                              {mahasiswa.nim}
                            </td>

                            <td className="px-6 py-4 text-slate-500">
                              {mahasiswa.email}
                            </td>

                            <td className="px-6 py-4">
                              <div className="flex items-center justify-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setRegistrasiAnggota((prev) => {
                                      const newRegistrasiAnggota = prev.filter(
                                        (item) => item.nim !== mahasiswa.nim
                                      );
                                      return newRegistrasiAnggota;
                                    });
                                  }}
                                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-600 transition hover:bg-red-100"
                                >
                                  Hapus
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50/50 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-slate-500">
                      Menampilkan {users.length} data pengguna
                    </p>
                    <span className="text-xs font-medium text-slate-500">
                      Total: {users.length} pengguna
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    height: "500px",
                  }}
                >
                  {/* Tabel Anggota */}

                  {/* Tabel Anggota */}
                  <AgGridProvider modules={modules}>
                    <AgGridReact<Mahasiswa>
                      rowData={mahasiswa}
                      columnDefs={columnDefs}
                      defaultColDef={defaultColDef}
                      getRowId={(params) => String(params.data.id)}
                      pagination={true}
                      paginationPageSize={10}
                      paginationPageSizeSelector={[10, 20, 50]}
                      animateRows={true}
                      rowHeight={100}
                    />
                  </AgGridProvider>
                </div>
              </>
            )}

            {/* End Table Mahasiswa */}

            {/* Info */}
            <div className="flex gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
              <svg
                className="mt-0.5 h-5 w-5 shrink-0 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-4m0-4h.01"
                />
              </svg>
              <div>
                <p className="text-sm font-semibold text-blue-800">
                  Informasi Registrasi
                </p>
                <p className="mt-1 text-xs leading-relaxed text-blue-700">
                  Pastikan sekolah dan tipe registrasi sudah sesuai sebelum
                  melanjutkan proses pendaftaran kegiatan Bela Kampus.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <Link
                href={"/portal"}
                className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Batal
              </Link>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 12 4 4L19 6"
                  />
                </svg>
                Daftar Sekarang
              </button>
            </div>
          </form>
        </div>

        <p className="text-center text-xs text-slate-400">
          Sistem Informasi Bela Kampus · Politeknik Kampar
        </p>
      </div>
    </>
  );
}
