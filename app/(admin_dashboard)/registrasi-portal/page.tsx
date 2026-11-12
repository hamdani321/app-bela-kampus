"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Download,
  Users,
  UserRound,
  ClipboardList,
  CheckCircle2,
  Clock3,
  XCircle,
  CalendarDays,
  School,
  MapPin,
  Phone,
  Mail,
  Trash2,
  Pencil,
  Eye,
} from "lucide-react";
import { getRegistrasi } from "@/src/modules/registrasi/services/registrasi.service";
import { Registrasi as DataRegistrasi } from "@/src/models/registrasi.models";

import {
  AllCommunityModule,
  ColDef,
  ICellRendererParams,
} from "ag-grid-community";
import { AgGridProvider, AgGridReact } from "ag-grid-react";

const modules = [AllCommunityModule];

export default function RegistrasiPortalPage() {
  const [registrasi, setRegistrasi] = useState<DataRegistrasi[]>([]);

  const stats = [
    {
      label: "Total Registrasi",
      value: 2,
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
      description: "Seluruh pendaftaran",
    },
    {
      label: "Disetujui",
      value: 2,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
      description: "Registrasi diterima",
    },
    {
      label: "Menunggu",
      value: 1,
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
      description: "Perlu ditinjau",
    },
    {
      label: "Ditolak",
      value: 2,
      icon: XCircle,
      color: "bg-rose-50 text-rose-600",
      description: "Registrasi ditolak",
    },
  ];

  async function fetchRegistrasi() {
    const result = await getRegistrasi();

    setRegistrasi(result.data);
  }

  useEffect(() => {
    fetchRegistrasi();
  }, []);

  const defaultColDef = useMemo<ColDef<DataRegistrasi>>(
    () => ({
      sortable: true,
      resizable: true,
    }),
    []
  );

  const columnDefs = useMemo<ColDef<DataRegistrasi>[]>(
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
        field: "mahasiswa.nama",
        headerName: "NIM",
        minWidth: 100,
        filter: true,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const item = params.data;

          return (
            <>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                  {item?.mahasiswa?.nama
                    .split(" ")
                    .slice(0, 2)
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div className="min-w-0">
                  <p className="font-semibold text-gray-900">
                    {item?.mahasiswa?.nama}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    NIM : {item?.mahasiswa?.nim}
                  </p>
                </div>
              </div>
            </>
          );
        },
      },
      {
        headerName: "PORTAL",
        field: "portal",
        minWidth: 240,
        flex: 1.3,
        filter: true,
        sortable: true,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const portal = params.data?.portal;

          if (!portal) {
            return (
              <span className="text-xs italic text-slate-400">
                Tidak ada portal
              </span>
            );
          }

          const isGanjil = portal.tahun_ajaran?.jenis === "Ganjil";

          return (
            <div className="flex h-full items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <CalendarDays size={19} />
              </div>

              <div className="flex min-w-0 flex-col justify-center gap-1.5">
                <span className="truncate text-sm font-bold text-slate-800">
                  {portal.tahun_ajaran?.nama}
                </span>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-medium text-slate-500">
                    {portal.tahun_ajaran?.tahun}
                  </span>

                  <span className="text-slate-300">•</span>

                  <span
                    className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold ${
                      isGanjil
                        ? "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
                        : "bg-sky-50 text-sky-700 ring-1 ring-sky-200"
                    }`}
                  >
                    {portal.tahun_ajaran?.jenis}
                  </span>
                </div>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "INFORMASI SEKOLAH",
        field: "sekolah",
        minWidth: 300,
        flex: 1.8,
        filter: true,
        sortable: true,
        autoHeight: true,
        wrapText: true,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const sekolah = params.data?.sekolah;

          if (!sekolah) {
            return (
              <div className="flex h-full items-center">
                <span className="text-xs italic text-slate-400">
                  Data sekolah tidak tersedia
                </span>
              </div>
            );
          }

          return (
            <div className="flex min-h-[110px] items-start gap-3 py-3">
              {/* School Icon */}
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100">
                <School size={21} />
              </div>

              {/* School Information */}
              <div className="flex min-w-0 flex-1 flex-col gap-2">
                {/* Name & NPSN */}
                <div className="min-w-0 space-y-1">
                  <p
                    className="truncate text-sm font-bold text-slate-800"
                    title={sekolah.nama}
                  >
                    {sekolah.nama}
                  </p>

                  <div className="flex items-center gap-1.5">
                    <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      NPSN
                    </span>

                    <span className="text-xs font-medium tabular-nums text-slate-600">
                      {sekolah.npsn || "-"}
                    </span>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-2">
                  {/* Email */}
                  <div className="flex min-w-0 items-center gap-1.5 text-slate-500">
                    <Mail size={13} className="shrink-0 text-indigo-400" />
                    <span className="truncate text-xs" title={sekolah.email}>
                      {sekolah.email || "Email belum tersedia"}
                    </span>
                  </div>

                  {/* Phone */}
                  <div className="flex min-w-0 items-center gap-1.5 text-slate-500">
                    <Phone size={13} className="shrink-0 text-indigo-400" />
                    <span className="truncate text-xs">
                      {sekolah.telepon || "Telepon belum tersedia"}
                    </span>
                  </div>

                  {/* Address */}
                  <div className="flex min-w-0 items-start gap-1.5 text-slate-500 sm:col-span-2">
                    <MapPin
                      size={13}
                      className="mt-0.5 shrink-0 text-indigo-400"
                    />
                    <span
                      className="line-clamp-2 text-xs leading-relaxed"
                      title={sekolah.alamat}
                    >
                      {sekolah.alamat || "Alamat belum tersedia"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        },
      },
      {
        headerName: "TIPE REGISTRASI",
        field: "tipe",
        minWidth: 170,
        flex: 0.9,
        filter: true,
        sortable: true,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const isKelompok = params.value?.toUpperCase() === "KELOMPOK";

          const totalAnggota = params.data?.registrasi_anggota?.length ?? 0;

          return (
            <div className="flex h-full flex-col items-start justify-center gap-1.5 py-2">
              <span
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold ring-1 ${
                  isKelompok
                    ? "bg-violet-50 text-violet-700 ring-violet-200"
                    : "bg-cyan-50 text-cyan-700 ring-cyan-200"
                }`}
              >
                {isKelompok ? <Users size={14} /> : <UserRound size={14} />}

                {isKelompok ? "Kelompok" : "Individu"}
              </span>

              {isKelompok && (
                <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                  <Users size={12} className="text-slate-400" />
                  {totalAnggota} Anggota
                </span>
              )}
            </div>
          );
        },
      },
      {
        headerName: "STATUS",
        field: "status",
        minWidth: 130,
        maxWidth: 150,
        filter: true,
        sortable: true,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const status = params.data?.status;

          // const statusStyle: Record<string, string> = {
          //   AKTIF: "bg-emerald-50 text-emerald-700 ring-emerald-200",
          //   NONAKTIF: "bg-slate-100 text-slate-600 ring-slate-200",
          //   MENUNGGU: "bg-amber-50 text-amber-700 ring-amber-200",
          //   DITOLAK: "bg-red-50 text-red-700 ring-red-200",
          //   SELESAI: "bg-blue-50 text-blue-700 ring-blue-200",
          // };

          return (
            <div className="flex h-full items-center">
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ring-1 ${
                  status === "Approve"
                    ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
                    : "bg-red-50 text-red-700 ring-red-200"
                }`}
              >
                {status || "TIDAK DIKETAHUI"}
              </span>
            </div>
          );
        },
      },

      {
        headerName: "AKSI",
        field: "id",
        minWidth: 150,
        maxWidth: 150,
        sortable: false,
        filter: false,
        resizable: false,
        cellRenderer: (params: ICellRendererParams<DataRegistrasi>) => {
          const registrasi = params.data;

          if (!registrasi) return null;

          return (
            <div className="flex h-full items-center justify-center gap-2">
              {/* Detail */}
              <button
                type="button"
                title="Lihat detail"
                // onClick={() => handleDetail(registrasi)}
                className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Eye size={15} />
              </button>

              {/* Edit */}
              <button
                type="button"
                title="Edit registrasi"
                // onClick={() => handleEdit(registrasi)}
                className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-amber-200 hover:bg-amber-50 hover:text-amber-600"
              >
                <Pencil size={15} />
              </button>

              {/* Hapus */}
              <button
                type="button"
                title="Hapus registrasi"
                // onClick={() => handleDelete(registrasi)}
                className="flex size-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={15} />
              </button>
            </div>
          );
        },
      },
    ],
    []
  );

  useEffect(() => {
    fetchRegistrasi();
  }, []);

  return (
    <>
      {/* <main className="mx-auto max-w-[1600px] space-y-7 p-4 sm:p-6 xl:p-9"> */}
      {/* Header */}
      <section className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
            <span>Dashboard</span>
            <span>/</span>
            <span className="font-medium text-blue-600">Registrasi Portal</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Manajemen Registrasi Portal
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
            Kelola pendaftaran mahasiswa pada kegiatan Bela Kampus dan pantau
            status registrasi setiap portal.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            // onClick={handleExport}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <Download size={17} />
            Export CSV
          </button>

          {/* <button
            onClick={() =>
              alert("Hubungkan tombol ini ke halaman tambah registrasi.")
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Tambah Registrasi
          </button> */}
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.label}
                  </p>
                  <p className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </div>

                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <Icon size={22} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Table container */}

      {/* Table Registrasi */}
      <section className="mt-3 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div
            style={{
              height: "1000px",
            }}
          >
            <AgGridProvider modules={modules}>
              <AgGridReact<DataRegistrasi>
                rowData={registrasi}
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
        </div>
      </section>

      {/* End Table Registrasi */}

      <div className="flex mt-3 items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
        <div className="rounded-lg bg-white p-2 text-blue-600 shadow-sm">
          <ClipboardList size={19} />
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-900">
            Informasi pengelolaan registrasi
          </p>
          <p className="mt-1 text-sm leading-6 text-blue-800/80">
            Periksa data mahasiswa, portal tujuan, dan anggota kelompok sebelum
            memproses pendaftaran. Pastikan setiap mahasiswa tidak terdaftar
            lebih dari satu kali pada portal yang sama.
          </p>
        </div>
      </div>
    </>
  );
}
