"use client";
import { TahunAjaran } from "@/src/models/tahun_ajaran.models";
import { getTahunAjaran } from "@/src/modules/tahun_ajaran/services/tahun-ajaran.service";
import { useEffect, useMemo, useState } from "react";

import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import { formatDate } from "@/src/modules/utilities/date-formatter";

const modules = [AllCommunityModule];

export default function TahunAjaranPage() {
  const [tahunAjaran, setTahunAjaran] = useState<TahunAjaran[]>([]);
  async function fetchTahunAjaran() {
    const result = await getTahunAjaran();
    console.log(result);

    setTahunAjaran(result.data);
  }
  useEffect(() => {
    fetchTahunAjaran();
  }, []);

  const defaultColDef = useMemo<ColDef<TahunAjaran>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<TahunAjaran>[]>(
    () => [
      {
        field: "id",
        headerName: "No",
        width: 80,
        sortable: true,
        filter: false,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        valueGetter: (params) => {
          return params.node?.rowIndex != null ? params.node.rowIndex + 1 : "";
        },
        cellClass: "text-center font-medium text-slate-500",
        headerClass: "ag-header-cell-center",
      },
      {
        field: "nama",
        headerName: "Nama Tahun Ajaran",
        minWidth: 220,
        flex: 1,
        filter: true,
        cellRenderer: (params: ICellRendererParams<TahunAjaran>) => {
          return (
            <div className="flex h-full items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-800">
                  {params.value || "-"}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  Tahun ajaran akademik
                </p>
              </div>
            </div>
          );
        },
      },
      {
        field: "tahun",
        headerName: "Tahun",
        width: 150,
        filter: "agNumberColumnFilter",
        wrapText: true,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        cellRenderer: (params: ICellRendererParams<TahunAjaran>) => {
          return (
            <span className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700">
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                />
              </svg>
              {params.value ?? "-"}
            </span>
          );
        },
      },
      {
        field: "jenis",
        headerName: "Semester",
        width: 150,
        filter: true,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        cellRenderer: (params: ICellRendererParams<TahunAjaran>) => {
          const isGanjil = params.value === "Ganjil";

          return (
            <span
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
                isGanjil
                  ? "bg-sky-100 text-sky-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isGanjil ? "bg-sky-500" : "bg-amber-500"
                }`}
              />
              Semester {params.value || "-"}
            </span>
          );
        },
      },
      {
        field: "createdAt",
        headerName: "Dibuat Pada",
        minWidth: 190,
        filter: "agDateColumnFilter",
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        wrapText: true,
        valueFormatter: (params) => {
          return params.value ? formatDate(params.value) : "-";
        },
        cellClass: "text-sm text-slate-500",
      },
      {
        field: "id",
        headerName: "Aksi",
        width: 130,
        sortable: false,
        filter: false,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        // headerClass: "ag-header-cell-center",
        cellRenderer: (params: ICellRendererParams<TahunAjaran>) => {
          return (
            <div className="flex h-full items-center justify-center gap-1">
              <button
                title="Edit"
                onClick={() => console.log("Edit:", params.data)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-amber-50 hover:text-amber-600"
              >
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
                    d="m16 4 4 4M4 20l4-.8L19 8a2.12 2.12 0 00-3-3L5 16l-1 4z"
                  />
                </svg>
              </button>

              <button
                title="Hapus"
                onClick={() => console.log("Hapus:", params.data?.id)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
              >
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
                    d="M3 6h18m-2 0-1 14H6L5 6m3 0V4h8v2m-7 4v6m4-6v6"
                  />
                </svg>
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Breadcrumb */}
        {/* <nav className="flex items-center gap-2 text-sm text-gray-500">
          <span>Dashboard</span>
          <span className="text-gray-300">/</span>
          <span>Master Data</span>
          <span className="text-gray-300">/</span>
          <span className="font-semibold text-indigo-600">Tahun Ajaran</span>
        </nav> */}

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h2M14 14h2M8 17h2" />
              </svg>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Manajemen Tahun Ajaran
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
              Kelola data tahun ajaran dan semester sebagai dasar pengelolaan
              portal kegiatan Bela Kampus.
            </p>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
            Tambah Tahun Ajaran
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {/* Total */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Tahun Ajaran
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                  {tahunAjaran.length}
                </h2>
                <p className="mt-2 text-xs text-gray-500">
                  Seluruh data terdaftar
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                <svg
                  width="24"
                  height="24"
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
            </div>
          </div>

          {/* Ganjil */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Semester Ganjil
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                  {tahunAjaran.filter((item) => item.jenis === "Ganjil").length}
                </h2>
                <p className="mt-2 text-xs text-gray-500">
                  Data semester ganjil
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v18M5 8h14M5 16h14" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
            </div>
          </div>

          {/* Genap */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:col-span-2 xl:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Semester Genap
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                  {tahunAjaran.filter((item) => item.jenis === "Genap").length}
                </h2>
                <p className="mt-2 text-xs text-gray-500">
                  Data semester genap
                </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Table Card */}
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Table Header */}
          <div className="flex flex-col gap-4 border-b border-gray-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Daftar Tahun Ajaran
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Informasi seluruh tahun ajaran yang tersimpan dalam sistem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Search */}
              <div className="relative">
                <svg
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari tahun ajaran..."
                  className="w-full rounded-xl border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:w-64"
                />
              </div>

              {/* Filter Semester */}
              <div className="relative">
                <select
                  defaultValue="SEMUA"
                  aria-label="Filter semester"
                  className="w-full appearance-none rounded-xl border border-gray-300 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 sm:w-44"
                >
                  <option value="SEMUA">Semua Semester</option>
                  <option value="GANJIL">Ganjil</option>
                  <option value="GENAP">Genap</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Responsive Table */}

          <div
            style={{
              height: "1000px",
            }}
          >
            <AgGridProvider modules={modules}>
              <AgGridReact<TahunAjaran>
                // theme={themeQuartz}

                rowData={tahunAjaran}
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
          {/* <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-gray-50/80 text-xs uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">No.</th>
                  <th className="px-6 py-4 font-semibold">Tahun Ajaran</th>
                  <th className="px-6 py-4 font-semibold">Semester</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 text-right font-semibold">Aksi</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
               
                <tr className="transition hover:bg-indigo-50/30">
                  <td className="px-6 py-5 text-gray-500">1</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <rect x="3" y="4" width="18" height="17" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">2026/2027</p>
                        <p className="mt-1 text-xs text-gray-500">
                          Tahun ajaran terbaru
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
                      Ganjil
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Aktif
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Edit tahun ajaran 2026/2027 ganjil"
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Hapus tahun ajaran 2026/2027 ganjil"
                        title="Hapus"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

               
                <tr className="transition hover:bg-indigo-50/30">
                  <td className="px-6 py-5 text-gray-500">2</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <rect x="3" y="4" width="18" height="17" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">2025/2026</p>
                        <p className="mt-1 text-xs text-gray-500">
                          Tahun ajaran sebelumnya
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      Genap
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      Nonaktif
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Edit tahun ajaran 2025/2026 genap"
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Hapus tahun ajaran 2025/2026 genap"
                        title="Hapus"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

               
                <tr className="transition hover:bg-indigo-50/30">
                  <td className="px-6 py-5 text-gray-500">3</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <rect x="3" y="4" width="18" height="17" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">2025/2026</p>
                        <p className="mt-1 text-xs text-gray-500">
                          Tahun ajaran sebelumnya
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-lg bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700 ring-1 ring-inset ring-amber-200">
                      Ganjil
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      Nonaktif
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Edit tahun ajaran 2025/2026 ganjil"
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Hapus tahun ajaran 2025/2026 ganjil"
                        title="Hapus"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

               
                <tr className="transition hover:bg-indigo-50/30">
                  <td className="px-6 py-5 text-gray-500">4</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        >
                          <rect x="3" y="4" width="18" height="17" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">2024/2025</p>
                        <p className="mt-1 text-xs text-gray-500">
                          Arsip tahun ajaran
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
                      Genap
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                      Nonaktif
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        aria-label="Edit tahun ajaran 2024/2025 genap"
                        title="Edit"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 20h9" />
                          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        aria-label="Hapus tahun ajaran 2024/2025 genap"
                        title="Hapus"
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                      >
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18M8 6V4h8v2m3 0-1 14H6L5 6m4 4v6m6-6v6" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div> */}

          {/* Pagination */}
          {/* <div className="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="text-sm text-gray-500">
              Menampilkan{" "}
              <span className="font-semibold text-gray-800">1–4</span> dari{" "}
              <span className="font-semibold text-gray-800">8</span> data
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled
                className="flex h-9 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-400 disabled:cursor-not-allowed"
              >
                Sebelumnya
              </button>
              <button
                type="button"
                aria-current="page"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white"
              >
                1
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
              >
                2
              </button>
              <button
                type="button"
                className="flex h-9 items-center justify-center rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Selanjutnya
              </button>
            </div>
          </div> */}
        </section>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400">
          Sistem Informasi Bela Kampus · Manajemen Tahun Ajaran
        </p>
      </div>
    </>
  );
}
