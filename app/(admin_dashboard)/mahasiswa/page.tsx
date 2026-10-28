"use client";

import { Mahasiswa } from "@/src/modules/models/mahasiswa.mode";
import { getAllMahasiswa } from "@/src/modules/mahasiswa/services/mahasiswa.service";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { AllCommunityModule, ColDef } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";

const modules = [AllCommunityModule];

export default function MahasiswaPage() {
  const [mahasiswa, setMahasiswa] = useState<Mahasiswa[]>();
  async function fetchMahasiswa() {
    const result = await getAllMahasiswa();
    const listMahasiswa = result.data?.map((item) => new Mahasiswa(item));

    setMahasiswa(listMahasiswa);
  }
  useEffect(() => {
    fetchMahasiswa();
  }, []);

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
        field: "email",
        headerName: "Email",
        minWidth: 220,
        flex: 1,
        filter: true,
      },
      {
        field: "kelas.nama",
        headerName: "Kelas",
        width: 120,
        filter: true,
      },
      {
        field: "kode_prodi",
        headerName: "Program Studi",
        minWidth: 190,
        flex: 1,
        filter: true,
      },
      {
        field: "jenis_kelamin",
        headerName: "Jenis Kelamin",
        minWidth: 160,
        cellRenderer: (params: any) => {
          const value = params.value;

          if (!value) {
            return <span className="text-gray-400">-</span>;
          }

          const isLakiLaki = value === "LAKI_LAKI";

          if (!isLakiLaki && value !== "PEREMPUAN") {
            return <span className="text-gray-600">{value}</span>;
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
    ],
    []
  );

  return (
    <>
      {/* Header */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-medium text-blue-600">Mahasiswa</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Manajemen Mahasiswa
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Kelola data mahasiswa, informasi akademik, dan program studi dalam
            satu tempat.
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
                d="M12 10v6m0 0 3-3m-3 3-3-3M5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1Z"
              />
            </svg>
            Export
          </button>

          <Link
            href={"/mahasiswa/create"}
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
            Tambah Mahasiswa
          </Link>
        </div>
      </section>

      {/* Statistik */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Mahasiswa
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {mahasiswa?.length}
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Seluruh mahasiswa terdaftar
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
                  d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m6-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm10 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
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
                Program Studi
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                6
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Program studi tersedia
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
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
                  d="M12 14 3 9l9-5 9 5-9 5Zm-6-2.5V16l6 3 6-3v-4.5M21 9v6"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[60%] rounded-full bg-violet-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Kelas</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                32
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Kelas aktif terdaftar
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
                  d="M4 5.5A1.5 1.5 0 0 1 5.5 4H20v14H5.5A1.5 1.5 0 0 1 4 16.5v-11ZM4 16.5V19h16M8 8h8M8 11h5"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[65%] rounded-full bg-amber-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Mahasiswa Aktif
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                1.186
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                94,9% dari total mahasiswa
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
                  d="m5 12 4 4L19 6"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[95%] rounded-full bg-emerald-500" />
          </div>
        </div>
      </section>

      {/* Tabel mahasiswa */}
      <section className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Daftar Mahasiswa
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Informasi lengkap mahasiswa yang terdaftar di sistem.
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
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 bg-slate-50/60 p-5 md:grid-cols-3">
          <div className="relative md:col-span-1">
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
              placeholder="Cari nama atau NIM mahasiswa..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <select
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Semua Kelas</option>
            <option value="MI-2A">MI-2A</option>
            <option value="SI-2A">SI-2A</option>
            <option value="TI-2A">TI-2A</option>
          </select>

          <select
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Semua Program Studi</option>
            <option value="mi">Manajemen Informatika</option>
            <option value="si">Sistem Informasi</option>
            <option value="ti">Teknik Informatika</option>
          </select>
        </div>

        {/* Tabel */}
        <div
          // className="overflow-x-auto"
          style={{
            height: "1000px",
          }}
        >
          <AgGridProvider modules={modules}>
            <AgGridReact<Mahasiswa>
              // theme={themeQuartz}

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
          {/* <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-6 py-4 font-semibold">No.</th>
                <th className="px-6 py-4 font-semibold">Mahasiswa</th>
                <th className="px-6 py-4 font-semibold">NIM</th>
                <th className="px-6 py-4 font-semibold">Kelas</th>
                <th className="px-6 py-4 font-semibold">Program Studi</th>
                <th className="px-6 py-4 text-center font-semibold">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {mahasiswa?.map((mhs, index) => {
                return (
                  <tr
                    key={mhs.nim}
                    className="group transition hover:bg-blue-50/40"
                  >
                    <td className="px-6 py-4 text-slate-400">{index + 1}</td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          className="h-10 w-10 shrink-0"
                          src={`/assets/images/default.png`}
                        />
                        <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-bold `}
                          >
                            df
                          </div>
                        <div>
                          <p className="font-semibold text-slate-800">
                            {mhs.nim}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-400">
                            Mahasiswa
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-6 py-4 font-mono text-xs font-medium text-slate-600">
                      {mhs.nim}
                    </td>

                    <td className="px-6 py-4">
                      <span className="inline-flex rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {mhs.kelas_id}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-slate-600">
                      {mhs.kode_prodi}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          type="button"
                          title="Lihat detail"
                          aria-label={`Lihat detail ${mhs.nama}`}
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
                          title="Edit mahasiswa"
                          aria-label={`Edit ${mhs.nama}`}
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
                          title="Hapus mahasiswa"
                          aria-label={`Hapus ${mhs.nama}`}
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
                );
              })}
             
            </tbody>
          </table> */}
        </div>

        {/* Pagination */}
        {/* <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-slate-500">
            Menampilkan{" "}
            <span className="font-semibold text-slate-800">1–5</span> dari{" "}
            <span className="font-semibold text-slate-800">1.248</span>{" "}
            mahasiswa
          </p>

          <div className="flex items-center gap-2">
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
        </div> */}
      </section>
    </>
  );
}
