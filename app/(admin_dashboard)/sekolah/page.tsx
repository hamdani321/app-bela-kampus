"use client";
import Link from "next/link";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import { Sekolah } from "@/src/models/sekolah.models";
import { getSekolah } from "@/src/modules/sekolah/services/sekolah.service";
import { AllCommunityModule, ColDef } from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";
import dynamic from "next/dynamic";
import MapSekolahLoader from "@/src/components/MapSekolahLoader";

// Perbaikan icon marker Leaflet
// const markerIcon = L.icon({
//   iconUrl: "/assets/images/blue-icon.png",
//   // iconRetinaUrl: "/assets/images/blue-icon-2x.png",
//   iconSize: [35, 35],
//   iconAnchor: [12, 41],
//   popupAnchor: [1, -34],
//   shadowSize: [41, 41],
// });
const modules = [AllCommunityModule];
export default function SekolahPage() {
  const [sekolah, setSekolah] = useState<Sekolah[] | null>();
  const fetchSekolah = async () => {
    const sekolahResponse = await getSekolah();
    setSekolah(sekolahResponse.data);
  };

  useEffect(() => {
    fetchSekolah();
  }, []);

  const defaultColDef = useMemo<ColDef<Sekolah>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<Sekolah>[]>(
    () => [
      {
        headerName: "No",
        width: 75,
        maxWidth: 75,
        sortable: false,
        filter: false,
        resizable: false,
        valueGetter: (params: any) =>
          params.node?.rowIndex != null ? params.node.rowIndex + 1 : "",
        cellClass: "text-center text-gray-500 font-medium",
      },
      {
        field: "nama",
        headerName: "Informasi Sekolah",
        minWidth: 250,
        flex: 1.3,
        filter: true,
        cellRenderer: (params: { data?: Sekolah }) => {
          const sekolah = params.data;

          if (!sekolah) return null;

          return (
            <div className="flex h-full items-center gap-3 py-1">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
                  <path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M16 13v.01M16 16v.01M16 19v.01" />
                </svg>
              </div>

              <div className="flex min-w-0 flex-col justify-center">
                <span className="truncate font-semibold text-gray-800">
                  {sekolah.nama}
                </span>
                <span className="truncate text-xs text-gray-400">
                  ID Sekolah: #{sekolah.id}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        field: "email",
        headerName: "Email",
        minWidth: 210,
        flex: 1,
        filter: true,
        cellRenderer: (params: { value?: string }) => {
          const email = params.value;

          return (
            <div className="flex h-full items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>

              <span className="truncate text-sm text-gray-600">
                {email || "-"}
              </span>
            </div>
          );
        },
      },
      {
        field: "telepon",
        headerName: "Nomor Telepon",
        minWidth: 160,
        filter: true,
        cellRenderer: (params: { value?: string }) => {
          return (
            <div className="flex h-full items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-50 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.09 3.18 2 2 0 0 1 4.08 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.06 8.94a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              <span className="text-sm font-medium text-gray-700">
                {params.value || "-"}
              </span>
            </div>
          );
        },
      },
      {
        field: "alamat",
        headerName: "Alamat Sekolah",
        minWidth: 250,
        flex: 1.3,
        filter: true,
        tooltipField: "alamat",
        cellRenderer: (params: { value?: string }) => {
          return (
            <div className="flex h-full items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <span className="truncate text-sm text-gray-600">
                {params.value || "-"}
              </span>
            </div>
          );
        },
      },
      {
        headerName: "Koordinat Lokasi",
        minWidth: 190,
        sortable: false,
        filter: false,
        cellRenderer: (params: { data?: Sekolah }) => {
          const sekolah = params.data;

          if (!sekolah) return null;

          const hasCoordinates = sekolah.latitude && sekolah.longitude;

          return (
            <div className="flex h-full items-center">
              {hasCoordinates ? (
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-medium text-gray-700">
                    {sekolah.latitude}, {sekolah.longitude}
                  </span>

                  <span className="inline-flex w-fit items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Lokasi tersedia
                  </span>
                </div>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500">
                  Belum ditentukan
                </span>
              )}
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
            <span className="font-medium text-blue-600">Sekolah</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Manajemen Data Sekolah
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Kelola informasi sekolah mitra, kontak, alamat, dan koordinat lokasi
            untuk kegiatan promosi kampus.
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
                d="M12 10v6m0 0 3-3m-3 3-3-3M5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14Z"
              />
            </svg>
            Export Data
          </button>

          <Link
            href={"/sekolah/create"}
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
            Tambah Sekolah
          </Link>
        </div>
      </section>

      {/* Statistik */}
      <section className="grid mt-3 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Sekolah
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                156
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Seluruh sekolah terdaftar
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
                  d="M3 21h18M5 21V7l7-4 7 4v14M9 10h1m4 0h1M9 14h1m4 0h1M10 21v-4h4v4"
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
                Lokasi Terdata
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                142
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Memiliki koordinat lokasi
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
                  d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                />
                <circle cx="12" cy="10" r="2.5" strokeWidth="1.8" />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[91%] rounded-full bg-emerald-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">Kontak Email</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                148
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Sekolah dengan email
              </p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  strokeWidth="1.8"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m4 7 8 6 8-6"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[95%] rounded-full bg-violet-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Kontak Telepon
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                151
              </h2>
              <p className="mt-2 text-xs text-slate-500">
                Sekolah dengan nomor HP
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
                  d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm4 14h2"
                />
              </svg>
            </div>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[97%] rounded-full bg-amber-500" />
          </div>
        </div>
      </section>

      {/* Tabel sekolah */}
      <section className="overflow-hidden mt-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Daftar Sekolah</h2>
            <p className="mt-1 text-sm text-slate-500">
              Informasi sekolah mitra untuk mendukung kegiatan promosi kampus.
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
        <div className="grid grid-cols-1 gap-3 border-b border-slate-100 bg-slate-50/60 p-5 md:grid-cols-2">
          <div className="relative">
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
              placeholder="Cari nama sekolah, email, atau nomor HP..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <select
            defaultValue=""
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
          >
            <option value="">Semua Kelengkapan Lokasi</option>
            <option value="lengkap">Koordinat tersedia</option>
            <option value="belum">Koordinat belum tersedia</option>
          </select>
        </div>

        {/* Tabel data */}
        <div className="overflow-x-auto h-[900px]">
          <AgGridProvider modules={modules}>
            <AgGridReact<Sekolah>
              // theme={themeQuartz}

              rowData={sekolah}
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

      <section className="overflow-hidden mt-3 rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* <div className="flex flex-col gap-4 border-b border-slate-100 p-5 sm:p-6 lg:flex-row lg:items-center lg:justify-between"> */}
        {/* <MapSekolah key={0} sekolah={sekolah} /> */}
        <MapSekolahLoader sekolah={sekolah} />
      </section>
    </>
  );
}
