"use client";
import { Portal } from "@/src/models/portal.models";
import { getDetailPortal } from "@/src/modules/portal/services/portal.service";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { Registrasi } from "@/src/models/registrasi.models";
import { Eye, Pencil, Trash2, UserRound, Users } from "lucide-react";

const modules = [AllCommunityModule];
export default function DetailDataPortal() {
  const [portal, setPortal] = useState<Portal | null>(null);
  const { id } = useParams();
  async function fetchDetailPortal() {
    const result = await getDetailPortal(Number(id));
    console.log(result);
    setPortal(result.data);
  }
  useEffect(() => {
    fetchDetailPortal();
  }, []);

  const defaultColDef = useMemo<ColDef<Registrasi>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<Registrasi>[]>(
    () => [
      // 1. Data Mahasiswa
      {
        headerName: "MAHASISWA",
        field: "nim_mahasiswa",
        minWidth: 100,
        flex: 1.5,
        cellRenderer: (params: ICellRendererParams<Registrasi>) => {
          return (
            <div className="flex h-full items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 text-sm font-bold text-white shadow-sm">
                {String("Hamdani")
                  .split(" ")
                  .slice(0, 2)
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </div>

              <div className="min-w-0 space-y-1">
                <p className="truncate text-sm font-bold text-slate-800">
                  {/* {params.value.mahasiswa.nama} */}
                  {params.data?.mahasiswa?.nama}
                  {/* nama */}
                </p>

                <p className="text-xs text-slate-500">
                  {/* NIM: {data.mahasiswa.nim} */}
                  NIM: {params.data?.nim_mahasiswa}
                </p>
              </div>
            </div>
          );
        },
      },
      // 2. Data Portal
      {
        headerName: "Portal",
        field: "portal_id",
        minWidth: 200,
        flex: 1.2,
        cellRenderer: (params: ICellRendererParams<Registrasi>) => (
          <div className="flex h-full flex-col justify-center gap-1.5">
            <p className="line-clamp-2 text-sm font-semibold text-slate-700">
              {portal?.tahun_ajaran?.nama}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              {portal?.tahun_ajaran?.tahun}
            </div>
          </div>
        ),
      },

      // 3. Jenis Kelompok

      {
        headerName: "Jenis",
        field: "tipe",
        minWidth: 100,
        flex: 1,
        cellRenderer: (params: ICellRendererParams<Registrasi>) => {
          const isGroup = params.value === "KELOMPOK";
          const totalAnggota = params.data?.registrasi_anggota?.length ?? 0;

          return (
            <div className="flex h-full items-center gap-2">
              <span
                className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${
                  isGroup
                    ? "bg-violet-50 text-violet-700 ring-violet-200"
                    : "bg-cyan-50 text-cyan-700 ring-cyan-200"
                }`}
              >
                {isGroup ? <Users size={14} /> : <UserRound size={14} />}
                {isGroup ? "KELOMPOK" : "INDIVIDU"}
              </span>

              {isGroup && (
                <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                  <Users size={12} />
                  {totalAnggota} Anggota
                </span>
              )}
            </div>
          );
        },
      },

      // 4. Status
      {
        headerName: "STATUS",
        field: "status",
        minWidth: 100,
        flex: 0.8,
        cellRenderer: ({ value }: { value: Registrasi["status"] }) => {
          return (
            <div className="flex h-full items-center">
              <span
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ring-1 ${
                  value == "Approve"
                    ? `bg-emerald-50 text-emerald-700 ring-emerald-100`
                    : `bg-amber-50 text-amber-700 ring-amber-100`
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />

                {value}
              </span>
            </div>
          );
        },
      },

      // 5. Aksi
      {
        headerName: "AKSI",
        colId: "aksi",
        minWidth: 100,
        maxWidth: 160,
        pinned: "right",
        sortable: false,
        filter: false,
        cellRenderer: ({ data }: { data: Registrasi }) => (
          <div className="flex h-full items-center justify-center gap-1.5">
            <button
              type="button"
              title="Lihat detail"
              //   onClick={() => onDetail(data.id)}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
            >
              <Eye size={17} />
            </button>

            {/* <button
              type="button"
              title="Edit registrasi"
              //   onClick={() => onEdit(data.id)}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-amber-50 hover:text-amber-600"
            >
              <Pencil size={17} />
            </button> */}

            {/* <button
              type="button"
              title="Hapus registrasi"
              //   onClick={() => onDelete(data.id)}
              className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={17} />
            </button> */}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      {/* Header Portal */}
      <section className="mt-4 relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-700 via-blue-700 to-indigo-800 p-6 text-white shadow-lg sm:p-8">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              PORTAL AKTIF
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium">
              Tahun Ajaran 2026/2027
            </span>
          </div>

          <div className="mt-7">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Portal Bela Kampus 2026
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              Portal kegiatan promosi Politeknik Kampar kepada siswa SMA/SMK
              sederajat melalui kegiatan kunjungan mahasiswa.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-blue-700 shadow transition hover:bg-blue-50">
              Edit Portal
            </button>
            <button className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/20">
              Export Data
            </button>
          </div>
        </div>
      </section>

      {/* Portal Information Cards */}
      <section className="mt-4 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Card Informasi Portal */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Informasi Portal
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Informasi umum dan konfigurasi portal
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
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
                  d="M8 7V3m8 4v-4M4 11h16M5 5h14a1 1 0 011 1v14H4V6a1 1 0 011-1z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Tahun Ajaran
              </p>
              <p className="mt-2 text-base font-bold text-slate-800">
                2026/2027
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Semester
              </p>
              <p className="mt-2 text-base font-bold text-slate-800">Ganjil</p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Kelompok
              </p>
              <p className="mt-2 text-base font-bold text-slate-800">
                Kelompok A
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Status Portal
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-base font-bold text-emerald-700">
                  Aktif
                </span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Periode Portal
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-700">
                <span className="rounded-lg border border-slate-200 px-3 py-2">
                  01 September 2026
                </span>
                <span className="text-slate-400">sampai</span>
                <span className="rounded-lg border border-slate-200 px-3 py-2">
                  31 Desember 2026
                </span>
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Deskripsi
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Program kegiatan Bela Kampus merupakan kegiatan promosi
                Politeknik Kampar yang melibatkan mahasiswa untuk memperkenalkan
                kampus kepada siswa SMA/SMK sederajat melalui kunjungan langsung
                ke sekolah.
              </p>
            </div>
          </div>
        </div>

        {/* Card Statistik */}
        <div className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
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
                    d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m18 0v-2a4 4 0 00-3-3.87M9 11a4 4 0 100-8 4 4 0 000 8zm9-4a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-blue-600">
                Terdaftar
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500">Total Registrasi</p>
            <h3 className="mt-1 text-3xl font-extrabold text-slate-800">
              {portal?.registrasi?.length}
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              Total mahasiswa yang terdaftar
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-emerald-600">
                65.3%
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500">Sudah Melaksanakan</p>
            <h3 className="mt-1 text-3xl font-extrabold text-slate-800">
              {
                portal?.registrasi?.filter((item) => item.status == "Approve")
                  .length
              }
            </h3>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[65.3%] rounded-full bg-emerald-500" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
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
                    d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-amber-600">
                34.7%
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-500">Belum Melaksanakan</p>
            <h3 className="mt-1 text-3xl font-extrabold text-slate-800">86</h3>
            <p className="mt-2 text-xs text-slate-400">
              Mahasiswa belum menyelesaikan kegiatan
            </p>
          </div>
        </div>
      </section>

      {/* Table Registrasi */}
      <section className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              Data Registrasi Mahasiswa
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Daftar mahasiswa yang mengikuti portal Bela Kampus
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:from-cyan-700 hover:to-blue-800">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Tambah Registrasi
          </button>
        </div>

        {/* Filter */}
        <div className="flex flex-col gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <svg
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="2" />
              <path strokeWidth="2" strokeLinecap="round" d="m16 16 4 4" />
            </svg>
            <input
              type="text"
              placeholder="Cari nama atau NIM mahasiswa..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-400">
              <option>Semua Kelompok</option>
              <option>Kelompok A</option>
              <option>Kelompok B</option>
            </select>

            <select className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-blue-400">
              <option>Semua Status</option>
              <option>Sudah Melaksanakan</option>
              <option>Belum Melaksanakan</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div
          style={{
            height: "1000px",
          }}
        >
          <AgGridProvider modules={modules}>
            <AgGridReact<Registrasi>
              // theme={themeQuartz}

              rowData={portal?.registrasi}
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
      </section>
    </>
  );
}
