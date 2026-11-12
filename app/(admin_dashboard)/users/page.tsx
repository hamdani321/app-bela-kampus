"use client";

import { User } from "@/src/models/user.models";
import { getUsers } from "@/src/modules/users/services/users.service";
import { useEffect, useMemo, useState } from "react";
import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";

const modules = [AllCommunityModule];

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  async function fetchUsers() {
    const result = await getUsers();
    console.log(result);

    setUsers(result.data);
  }
  const colors: string[] = useMemo(
    () => [
      "bg-sky-100 text-sky-700",
      "bg-indigo-100 text-indigo-700",
      "bg-emerald-100 text-emerald-700",
      "bg-amber-100 text-amber-700",
      "bg-rose-100 text-rose-700",
      "bg-violet-100 text-violet-700",
      "bg-cyan-100 text-cyan-700",
      "bg-orange-100 text-orange-700",
      "bg-pink-100 text-pink-700",
      "bg-teal-100 text-teal-700",

      "bg-lime-100 text-lime-700",
      "bg-purple-100 text-purple-700",
      "bg-blue-100 text-blue-700",
      "bg-red-100 text-red-700",
      "bg-fuchsia-100 text-fuchsia-700",
      "bg-slate-100 text-slate-700",
      "bg-gray-100 text-gray-700",
      "bg-zinc-100 text-zinc-700",
      "bg-neutral-100 text-neutral-700",
      "bg-stone-100 text-stone-700",

      "bg-sky-200 text-sky-800",
      "bg-indigo-200 text-indigo-800",
      "bg-emerald-200 text-emerald-800",
      "bg-amber-200 text-amber-800",
      "bg-rose-200 text-rose-800",
      "bg-violet-200 text-violet-800",
      "bg-cyan-200 text-cyan-800",
      "bg-orange-200 text-orange-800",
      "bg-pink-200 text-pink-800",
      "bg-teal-200 text-teal-800",

      "bg-lime-200 text-lime-800",
      "bg-purple-200 text-purple-800",
      "bg-blue-200 text-blue-800",
      "bg-red-200 text-red-800",
      "bg-fuchsia-200 text-fuchsia-800",
      "bg-slate-200 text-slate-800",
      "bg-gray-200 text-gray-800",
      "bg-zinc-200 text-zinc-800",
      "bg-neutral-200 text-neutral-800",
      "bg-stone-200 text-stone-800",

      "bg-sky-50 text-sky-600",
      "bg-indigo-50 text-indigo-600",
      "bg-emerald-50 text-emerald-600",
      "bg-amber-50 text-amber-600",
      "bg-rose-50 text-rose-600",
      "bg-violet-50 text-violet-600",
      "bg-cyan-50 text-cyan-600",
      "bg-orange-50 text-orange-600",
      "bg-pink-50 text-pink-600",
      "bg-teal-50 text-teal-600",
    ],
    []
  );

  const defaultColDef = useMemo<ColDef<User>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<User>[]>(
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
        field: "name",
        headerName: "Nama",
        minWidth: 250,
        flex: 1,
        filter: true,
        cellRenderer: (params: { data?: User }) => {
          const user = params.data;

          if (!user) return null;

          return (
            <div className="flex items-center gap-3">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                  colors[Math.floor(Math.random() * colors.length)]
                }`}
              >
                {user.name
                  .trim()
                  .split(/\s+/)
                  .slice(0, 2)
                  .map((word) => word.charAt(0).toUpperCase())
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  {user.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  ID: USR-{String(user.id).padStart(4, "0")}
                </p>
              </div>
            </div>
          );
        },
      },
      {
        field: "email",
        headerName: "Email",
        minWidth: 250,
        flex: 1,
        filter: true,
        cellRenderer: (params: any) => (
          <div className="flex h-full items-center gap-2.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-slate-700">
                {params.value || "-"}
              </p>
              <p className="text-[11px] text-slate-400">Email pengguna</p>
            </div>
          </div>
        ),
      },
      {
        field: "id",
        headerName: "Aksi",
        width: 150,
        sortable: false,
        filter: false,
        cellStyle: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        headerClass: "ag-header-cell-center",
        cellRenderer: (params: ICellRendererParams) => {
          return (
            <div className="flex h-full items-center justify-center gap-2">
              {/* Detail */}
              <button
                title="Detail"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600"
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
                    d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
                  />
                  <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
                </svg>
              </button>

              {/* Edit */}
              <button
                title="Edit"
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

              {/* Hapus */}
              <button
                title="Hapus"
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

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-indigo-600 font-medium">Manajemen User</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Manajemen User
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Kelola informasi, akun, dan akses pengguna aplikasi.
          </p>
        </div>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 hover:-translate-y-0.5">
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
          Tambah User
        </button>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Total User</p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">1.248</h3>
              <p className="mt-2 text-xs text-emerald-600 font-medium">
                Total akun terdaftar
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
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
                  d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H2v-2a4 4 0 017.75-1.35M15 20v-2a6 6 0 00-12 0v2m12-10a4 4 0 11-8 0 4 4 0 018 0zm6-3a4 4 0 01-3 3.87"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">User Aktif</p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">1.120</h3>
              <p className="mt-2 text-xs text-emerald-600 font-medium">
                89,7% dari total user
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
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                User Nonaktif
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">128</h3>
              <p className="mt-2 text-xs text-slate-500 font-medium">
                10,3% dari total user
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
                  strokeWidth="2"
                  d="M12 9v4m0 4h.01M10.3 3.86L1.82 18a2 2 0 001.7 3h16.96a2 2 0 001.7-3L13.7 3.86a2 2 0 00-3.4 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* User Table */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Table Header */}
        <div className="border-b border-slate-100 p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Daftar Pengguna
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Berikut adalah daftar pengguna yang terdaftar dalam sistem.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="2" />
                  <path strokeWidth="2" strokeLinecap="round" d="m16 16 4 4" />
                </svg>
                <input
                  type="text"
                  placeholder="Cari nama atau email..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 sm:w-72"
                />
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
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
                    d="M4 6h16M7 12h10m-7 6h4"
                  />
                </svg>
                Filter
              </button>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div
          style={{
            height: "1000px",
          }}
        >
          <AgGridProvider modules={modules}>
            <AgGridReact<User>
              // theme={themeQuartz}

              rowData={users}
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
          <table className="w-full min-w-[750px] text-left">
            <thead className="bg-slate-50/80">
              <tr className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="px-6 py-4">Pengguna</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="group transition hover:bg-slate-50/80"
                >
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          colors[Math.floor(Math.random() * colors.length)]
                        }`}
                      >
                        IN
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">
                          {user.name}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-400">
                          ID: USR-{String(user.id).padStart(4, "0")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="text-sm text-slate-600">{user.email}</span>
                  </td>

                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        title="Detail"
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600"
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
                            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"
                          />
                          <circle cx="12" cy="12" r="3" strokeWidth="1.8" />
                        </svg>
                      </button>
                      <button
                        title="Edit"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

        {/* Pagination */}
        <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-sm text-slate-500">
            Menampilkan{" "}
            <span className="font-semibold text-slate-800">1-5</span> dari{" "}
            <span className="font-semibold text-slate-800">1.248</span> pengguna
          </p>

          <div className="flex items-center gap-1">
            <button
              disabled
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-400 disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button className="rounded-lg bg-indigo-600 px-3.5 py-2 text-sm font-semibold text-white">
              1
            </button>
            <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-600 hover:bg-slate-50">
              2
            </button>
            <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-600 hover:bg-slate-50">
              3
            </button>
            <span className="px-1 text-slate-400">...</span>
            <button className="rounded-lg border border-slate-200 px-3.5 py-2 text-sm text-slate-600 hover:bg-slate-50">
              10
            </button>
            <button className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-600 hover:bg-slate-50">
              Selanjutnya
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
