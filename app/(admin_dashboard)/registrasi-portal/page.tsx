"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Filter,
  Download,
  Eye,
  Pencil,
  Trash2,
  Users,
  UserRound,
  ClipboardList,
  CheckCircle2,
  Clock3,
  XCircle,
  ChevronLeft,
  ChevronRight,
  CalendarDays,
  GraduationCap,
  School,
  MoreHorizontal,
} from "lucide-react";

type StatusRegistrasi = "Disetujui" | "Menunggu" | "Ditolak";
type JenisRegistrasi = "Individu" | "Kelompok";

type Registrasi = {
  id: number;
  kode: string;
  nama: string;
  nim: string;
  prodi: string;
  kelas: string;
  sekolah: string;
  portal: string;
  jenis: JenisRegistrasi;
  jumlahAnggota: number;
  tanggal: string;
  status: StatusRegistrasi;
};

const dataRegistrasi: Registrasi[] = [
  {
    id: 1,
    kode: "REG-2026-001",
    nama: "Ahmad Fauzan",
    nim: "202401001",
    prodi: "Teknik Informatika",
    kelas: "TI-2A",
    sekolah: "SMAN 1 Bangkinang",
    portal: "Bela Kampus 2026",
    jenis: "Kelompok",
    jumlahAnggota: 4,
    tanggal: "24 Okt 2026",
    status: "Disetujui",
  },
  {
    id: 2,
    kode: "REG-2026-002",
    nama: "Siti Rahma",
    nim: "202401015",
    prodi: "Sistem Informasi",
    kelas: "SI-2A",
    sekolah: "SMAN 2 Pekanbaru",
    portal: "Bela Kampus 2026",
    jenis: "Individu",
    jumlahAnggota: 1,
    tanggal: "24 Okt 2026",
    status: "Menunggu",
  },
  {
    id: 3,
    kode: "REG-2026-003",
    nama: "Muhammad Rizky",
    nim: "202401023",
    prodi: "Teknik Informatika",
    kelas: "TI-2B",
    sekolah: "SMAN 1 Siak",
    portal: "Promosi Kampus Ganjil",
    jenis: "Kelompok",
    jumlahAnggota: 5,
    tanggal: "23 Okt 2026",
    status: "Disetujui",
  },
  {
    id: 4,
    kode: "REG-2026-004",
    nama: "Putri Amelia",
    nim: "202401034",
    prodi: "Teknik Pengolahan Sawit",
    kelas: "TPS-2A",
    sekolah: "SMKN 1 Tapung",
    portal: "Bela Kampus 2026",
    jenis: "Individu",
    jumlahAnggota: 1,
    tanggal: "22 Okt 2026",
    status: "Ditolak",
  },
  {
    id: 5,
    kode: "REG-2026-005",
    nama: "Dimas Pratama",
    nim: "202401042",
    prodi: "Teknik Informatika",
    kelas: "TI-2A",
    sekolah: "SMAN 1 Kampar",
    portal: "Promosi Kampus Ganjil",
    jenis: "Kelompok",
    jumlahAnggota: 3,
    tanggal: "21 Okt 2026",
    status: "Menunggu",
  },
  {
    id: 6,
    kode: "REG-2026-006",
    nama: "Nur Aisyah",
    nim: "202401056",
    prodi: "Sistem Informasi",
    kelas: "SI-2B",
    sekolah: "SMAN 3 Pekanbaru",
    portal: "Bela Kampus 2026",
    jenis: "Individu",
    jumlahAnggota: 1,
    tanggal: "20 Okt 2026",
    status: "Disetujui",
  },
];

const statusStyle: Record<StatusRegistrasi, string> = {
  Disetujui: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  Menunggu: "bg-amber-50 text-amber-700 ring-amber-600/20",
  Ditolak: "bg-rose-50 text-rose-700 ring-rose-600/20",
};

export default function RegistrasiPortalPage() {
  const [search, setSearch] = useState("");
  const [filterPortal, setFilterPortal] = useState("Semua Portal");
  const [filterStatus, setFilterStatus] = useState("Semua Status");
  const [filterJenis, setFilterJenis] = useState("Semua Jenis");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const filteredData = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return dataRegistrasi.filter((item) => {
      const cocokPencarian =
        item.nama.toLowerCase().includes(keyword) ||
        item.nim.toLowerCase().includes(keyword) ||
        item.kode.toLowerCase().includes(keyword) ||
        item.sekolah.toLowerCase().includes(keyword);

      const cocokPortal =
        filterPortal === "Semua Portal" || item.portal === filterPortal;

      const cocokStatus =
        filterStatus === "Semua Status" || item.status === filterStatus;

      const cocokJenis =
        filterJenis === "Semua Jenis" || item.jenis === filterJenis;

      return cocokPencarian && cocokPortal && cocokStatus && cocokJenis;
    });
  }, [search, filterPortal, filterStatus, filterJenis]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedData = filteredData.slice(
    (safePage - 1) * pageSize,
    safePage * pageSize
  );

  const resetPage = () => setCurrentPage(1);

  const stats = [
    {
      label: "Total Registrasi",
      value: dataRegistrasi.length,
      icon: ClipboardList,
      color: "bg-blue-50 text-blue-600",
      description: "Seluruh pendaftaran",
    },
    {
      label: "Disetujui",
      value: dataRegistrasi.filter((item) => item.status === "Disetujui")
        .length,
      icon: CheckCircle2,
      color: "bg-emerald-50 text-emerald-600",
      description: "Registrasi diterima",
    },
    {
      label: "Menunggu",
      value: dataRegistrasi.filter((item) => item.status === "Menunggu").length,
      icon: Clock3,
      color: "bg-amber-50 text-amber-600",
      description: "Perlu ditinjau",
    },
    {
      label: "Ditolak",
      value: dataRegistrasi.filter((item) => item.status === "Ditolak").length,
      icon: XCircle,
      color: "bg-rose-50 text-rose-600",
      description: "Registrasi ditolak",
    },
  ];

  function handleExport() {
    const headers = [
      "Kode Registrasi",
      "Nama Mahasiswa",
      "NIM",
      "Program Studi",
      "Kelas",
      "Sekolah",
      "Portal",
      "Jenis Registrasi",
      "Jumlah Anggota",
      "Tanggal",
      "Status",
    ];

    const rows = filteredData.map((item) => [
      item.kode,
      item.nama,
      item.nim,
      item.prodi,
      item.kelas,
      item.sekolah,
      item.portal,
      item.jenis,
      item.jumlahAnggota,
      item.tanggal,
      item.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "data-registrasi-portal.csv";
    link.click();
    URL.revokeObjectURL(url);
  }

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
            onClick={handleExport}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <Download size={17} />
            Export CSV
          </button>

          <button
            onClick={() =>
              alert("Hubungkan tombol ini ke halaman tambah registrasi.")
            }
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Plus size={18} />
            Tambah Registrasi
          </button>
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
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Daftar Registrasi
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Data pendaftaran mahasiswa berdasarkan portal kegiatan.
              </p>
            </div>

            <div className="relative w-full xl:max-w-sm">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  resetPage();
                }}
                placeholder="Cari nama, NIM, kode, sekolah..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Filter size={16} />
              Filter:
            </div>

            <select
              value={filterPortal}
              onChange={(e) => {
                setFilterPortal(e.target.value);
                resetPage();
              }}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option>Semua Portal</option>
              <option>Bela Kampus 2026</option>
              <option>Promosi Kampus Ganjil</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => {
                setFilterStatus(e.target.value);
                resetPage();
              }}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option>Semua Status</option>
              <option>Disetujui</option>
              <option>Menunggu</option>
              <option>Ditolak</option>
            </select>

            <select
              value={filterJenis}
              onChange={(e) => {
                setFilterJenis(e.target.value);
                resetPage();
              }}
              className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10"
            >
              <option>Semua Jenis</option>
              <option>Individu</option>
              <option>Kelompok</option>
            </select>

            <div className="sm:ml-auto">
              <span className="rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700">
                {filteredData.length} data ditemukan
              </span>
            </div>
          </div>
        </div>

        {/* Responsive table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1150px] border-collapse text-left">
            <thead>
              <tr className="bg-gray-50/80 text-xs font-semibold uppercase tracking-wider text-gray-500">
                <th className="px-6 py-4">Mahasiswa</th>
                <th className="px-5 py-4">Portal & Sekolah</th>
                <th className="px-5 py-4">Jenis</th>
                <th className="px-5 py-4">Tanggal Daftar</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {paginatedData.map((item) => (
                <tr key={item.id} className="transition hover:bg-blue-50/30">
                  {/* Student */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                        {item.nama
                          .split(" ")
                          .slice(0, 2)
                          .map((word) => word[0])
                          .join("")}
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900">
                          {item.nama}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                          NIM: {item.nim}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {item.prodi} · {item.kelas}
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-blue-600">
                          {item.kode}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Portal */}
                  <td className="px-5 py-4">
                    <div className="flex items-start gap-2.5">
                      <div className="mt-0.5 rounded-lg bg-violet-50 p-2 text-violet-600">
                        <School size={17} />
                      </div>
                      <div>
                        <p className="max-w-[230px] font-semibold text-gray-800">
                          {item.portal}
                        </p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                          <GraduationCap size={14} />
                          {item.sekolah}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Registration type */}
                  <td className="px-5 py-4">
                    {item.jenis === "Kelompok" ? (
                      <div className="inline-flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-semibold text-violet-700">
                        <Users size={15} />
                        Kelompok
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-lg bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700">
                        <UserRound size={15} />
                        Individu
                      </div>
                    )}

                    <p className="mt-2 text-xs text-gray-500">
                      {item.jumlahAnggota}{" "}
                      {item.jumlahAnggota === 1 ? "mahasiswa" : "mahasiswa"}
                    </p>
                  </td>

                  {/* Date */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CalendarDays size={16} className="text-gray-400" />
                      {item.tanggal}
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${
                        statusStyle[item.status]
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          item.status === "Disetujui"
                            ? "bg-emerald-500"
                            : item.status === "Menunggu"
                            ? "bg-amber-500"
                            : "bg-rose-500"
                        }`}
                      />
                      {item.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        title="Lihat detail"
                        onClick={() => alert(`Detail registrasi ${item.kode}`)}
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
                      >
                        <Eye size={17} />
                      </button>
                      <button
                        title="Edit registrasi"
                        onClick={() => alert(`Edit registrasi ${item.kode}`)}
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-amber-50 hover:text-amber-600"
                      >
                        <Pencil size={17} />
                      </button>
                      <button
                        title="Hapus registrasi"
                        onClick={() => alert(`Konfirmasi hapus ${item.kode}`)}
                        className="rounded-lg p-2 text-gray-500 transition hover:bg-rose-50 hover:text-rose-600"
                      >
                        <Trash2 size={17} />
                      </button>
                      <button
                        title="Aksi lainnya"
                        onClick={() => alert(`Aksi lainnya untuk ${item.kode}`)}
                        className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700"
                      >
                        <MoreHorizontal size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {paginatedData.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-16 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                      <ClipboardList size={25} />
                    </div>
                    <p className="mt-4 font-semibold text-gray-800">
                      Data registrasi tidak ditemukan
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Coba ubah kata kunci pencarian atau filter yang digunakan.
                    </p>
                    <button
                      onClick={() => {
                        setSearch("");
                        setFilterPortal("Semua Portal");
                        setFilterStatus("Semua Status");
                        setFilterJenis("Semua Jenis");
                        resetPage();
                      }}
                      className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Reset semua filter
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col justify-between gap-4 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-sm text-gray-500">
            Menampilkan{" "}
            <span className="font-semibold text-gray-800">
              {filteredData.length === 0 ? 0 : (safePage - 1) * pageSize + 1}
              {"–"}
              {Math.min(safePage * pageSize, filteredData.length)}
            </span>{" "}
            dari{" "}
            <span className="font-semibold text-gray-800">
              {filteredData.length}
            </span>{" "}
            registrasi
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={safePage === 1}
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={16} />
              Sebelumnya
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`h-9 w-9 rounded-lg text-sm font-semibold transition ${
                    safePage === page
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              disabled={safePage === totalPages || filteredData.length === 0}
              onClick={() =>
                setCurrentPage((page) => Math.min(totalPages, page + 1))
              }
              className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Selanjutnya
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Information footer */}
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
