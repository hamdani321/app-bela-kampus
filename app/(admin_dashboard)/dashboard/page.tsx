"use client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  GraduationCap,
  School,
  PanelsTopLeft,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  Search,
  Clock3,
  CheckCheck,
} from "lucide-react";
const activities = [
  {
    title: "Registrasi portal baru",
    detail: "SMAN 1 Bangkinang · Ahmad Rizky",
    time: "10 menit lalu",
    icon: ClipboardList,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Portal kegiatan diperbarui",
    detail: "Campus Visit 2026",
    time: "35 menit lalu",
    icon: PanelsTopLeft,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Data sekolah ditambahkan",
    detail: "SMK Negeri 1 Kampar",
    time: "1 jam lalu",
    icon: School,
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Registrasi disetujui",
    detail: "Muhammad Farhan",
    time: "2 jam lalu",
    icon: CheckCheck,
    color: "bg-emerald-100 text-emerald-600",
  },
];

const stats = [
  {
    label: "Total Mahasiswa",
    value: "1.284",
    change: "+12,8%",
    positive: true,
    description: "dibanding bulan lalu",
    icon: GraduationCap,
    color: "bg-indigo-50 text-indigo-600",
    bar: "bg-indigo-500",
    width: "78%",
  },
  {
    label: "Sekolah Terdaftar",
    value: "86",
    change: "+8,2%",
    positive: true,
    description: "dibanding bulan lalu",
    icon: School,
    color: "bg-sky-50 text-sky-600",
    bar: "bg-sky-500",
    width: "63%",
  },
  {
    label: "Portal Aktif",
    value: "12",
    change: "+2",
    positive: true,
    description: "portal baru bulan ini",
    icon: PanelsTopLeft,
    color: "bg-violet-50 text-violet-600",
    bar: "bg-violet-500",
    width: "85%",
  },
  {
    label: "Total Registrasi",
    value: "3.642",
    change: "+18,4%",
    positive: true,
    description: "dibanding bulan lalu",
    icon: ClipboardList,
    color: "bg-emerald-50 text-emerald-600",
    bar: "bg-emerald-500",
    width: "90%",
  },
];

const chartValues = [38, 55, 44, 68, 49, 76, 61, 86, 67, 94, 72, 82];
const chartLabels = [
  "Nov",
  "Des",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
];
const registrations = [
  {
    initials: "AR",
    name: "Ahmad Rizky",
    nim: "2301010021",
    school: "SMAN 1 Bangkinang",
    portal: "Promosi Gelombang I",
    date: "25 Okt 2026",
    status: "Disetujui",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    initials: "SP",
    name: "Siti Putri Amelia",
    nim: "2301010028",
    school: "SMAN 2 Pekanbaru",
    portal: "Campus Visit 2026",
    date: "24 Okt 2026",
    status: "Menunggu",
    color: "bg-pink-100 text-pink-700",
  },
  {
    initials: "MF",
    name: "Muhammad Farhan",
    nim: "2301010035",
    school: "SMK Negeri 1 Kampar",
    portal: "Promosi Gelombang I",
    date: "24 Okt 2026",
    status: "Disetujui",
    color: "bg-amber-100 text-amber-700",
  },
  {
    initials: "NA",
    name: "Nur Aisyah",
    nim: "2301010042",
    school: "MAN 1 Kampar",
    portal: "Campus Visit 2026",
    date: "23 Okt 2026",
    status: "Ditinjau",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function DashboardPage() {
  const [period, setPeriod] = useState("12 bulan");
  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("Semua status");
  const filteredRegistrations = registrations.filter((item) => {
    const matchesSearch =
      `${item.name} ${item.nim} ${item.school} ${item.portal}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "Semua status" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
              Sistem beroperasi
            </span>
          </div>
          <h2 className="text-[25px] font-extrabold tracking-tight text-slate-900 sm:text-[30px]">
            {/* {activeMenu === "Dashboard"
                  ? "Selamat datang, Admin! "
                  : `Manajemen ${activeMenu}`}
                {activeMenu === "Dashboard" && (
                  <span className="inline-block">👋</span>
                )} */}
            Halaman Dashboard
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            {/* {pageDescriptions[activeMenu]} */}
            Ini halamn dashboard
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm">
            <Calendar size={15} className="text-indigo-500" />
            25 Oktober 2026
          </div>
          {/* <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                <Plus size={16} strokeWidth={2.5} />
                Tambah Data
              </button> */}
        </div>
      </div>

      {/* {activeMenu !== "Dashboard" && (
            <div className="mb-6 flex items-start gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
              <div className="rounded-xl bg-white p-2 text-indigo-600">
                <FileText size={19} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Modul {activeMenu}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">
                  Kamu sedang memilih modul {activeMenu}. Halaman ini masih
                  menggunakan data demo dashboard; hubungkan modul ini ke API
                  untuk menampilkan data sebenarnya.
                </p>
              </div>
            </div>
          )} */}

      {/* Hero banner */}
      <section className="relative mb-7 overflow-hidden rounded-[24px] bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 p-6 text-white shadow-xl shadow-indigo-100 sm:p-8">
        <div className="pointer-events-none absolute -right-8 -top-28 h-72 w-72 rounded-full border-[35px] border-white/[0.07]" />
        <div className="pointer-events-none absolute right-36 top-24 h-36 w-36 rounded-full bg-blue-400/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 right-[32%] h-44 w-44 rounded-full bg-violet-300/10 blur-2xl" />
        <div className="relative z-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-50">
              <Sparkles size={12} />
              Ringkasan kegiatan 2026
            </span>
            <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              Bangun koneksi,
              <br className="hidden sm:block" /> perluas masa depan.
            </h3>
            <p className="mt-3 max-w-md text-xs leading-6 text-indigo-100 sm:text-sm">
              Kelola promosi kampus, koordinasikan kunjungan sekolah, dan pantau
              perkembangan registrasi mahasiswa dalam satu dashboard
              terintegrasi.
            </p>
            <button
              //   onClick={() => setActiveMenu("Registrasi Portal")}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Lihat registrasi
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:min-w-[300px]">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <MapPin size={19} />
              </div>
              <p className="text-2xl font-extrabold">86</p>
              <p className="mt-1 text-[11px] text-indigo-100">
                Sekolah terjangkau
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                <Users size={19} />
              </div>
              <p className="text-2xl font-extrabold">92,6%</p>
              <p className="mt-1 text-[11px] text-indigo-100">
                Target aktivitas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="mb-7">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">
              Ringkasan Statistik
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Gambaran umum aktivitas Bela Kampus
            </p>
          </div>
          <button
            onClick={
              () => {}
              //   notify("Data statistik demo berhasil diperbarui.")
            }
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white hover:text-indigo-600"
            title="Opsi statistik"
          >
            <MoreHorizontal size={21} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg hover:shadow-slate-200/40"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${stat.color}`}
                  >
                    <Icon size={22} strokeWidth={1.9} />
                  </div>
                  <span className="flex items-center gap-1 rounded-lg bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                    {stat.positive ? (
                      <ArrowUpRight size={12} />
                    ) : (
                      <ArrowDownRight size={12} />
                    )}
                    {stat.change}
                  </span>
                </div>
                <p className="mt-5 text-xs font-medium text-slate-500">
                  {stat.label}
                </p>
                <div className="mt-1.5 flex items-end justify-between gap-2">
                  <p className="text-[27px] font-extrabold tracking-tight text-slate-900">
                    {stat.value}
                  </p>
                  <TrendingUp
                    size={18}
                    className="mb-1 text-slate-300 transition group-hover:text-indigo-500"
                  />
                </div>
                <p className="mt-1 text-[10px] text-slate-400">
                  {stat.description}
                </p>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${stat.bar}`}
                    style={{ width: stat.width }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Charts and activity */}
      <section className="mb-7 grid grid-cols-1 gap-5 xl:grid-cols-[1.65fr_1fr]">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Statistik Registrasi
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Pertumbuhan registrasi portal kegiatan
              </p>
            </div>
            <select
              //   value={period}
              //   onChange={(e) => setPeriod(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 outline-none focus:border-indigo-400"
            >
              <option>12 bulan</option>
              <option>6 bulan</option>
              <option>3 bulan</option>
            </select>
          </div>

          <div className="mt-7 flex items-end gap-3">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900">
              3.642
            </span>
            <span className="mb-1 flex items-center gap-1 text-[11px] font-bold text-emerald-600">
              <ArrowUpRight size={14} />
              18,4%
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">
            Total registrasi pada periode terpilih (data demo)
          </p>

          <div className="mt-6 flex h-[205px] gap-3">
            <div className="flex flex-col justify-between pb-6 text-[10px] text-slate-400">
              <span>400</span>
              <span>300</span>
              <span>200</span>
              <span>100</span>
              <span>0</span>
            </div>
            <div className="relative min-w-0 flex-1">
              <div className="absolute inset-0 flex flex-col justify-between pb-6">
                {[0, 1, 2, 3, 4].map((line) => (
                  <div
                    key={line}
                    className="w-full border-t border-dashed border-slate-100"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-end justify-between gap-1.5 pb-6">
                {chartValues
                  .slice(
                    period === "3 bulan" ? 9 : period === "6 bulan" ? 6 : 0
                  )
                  .map((value, i) => (
                    <div
                      key={`${period}-${i}`}
                      className="group relative flex h-full flex-1 items-end justify-center"
                    >
                      <div
                        title={`${chartLabels[i]}: ${value * 4} registrasi`}
                        className={`relative w-full max-w-[28px] rounded-t-md transition-all duration-300 ${
                          i ===
                          chartValues.slice(
                            period === "3 bulan"
                              ? 9
                              : period === "6 bulan"
                              ? 6
                              : 0
                          ).length -
                            1
                            ? "bg-gradient-to-t from-indigo-600 to-indigo-400"
                            : "bg-indigo-100 group-hover:bg-indigo-300"
                        }`}
                        style={{ height: `${value * 0.85}%` }}
                      >
                        <span className="absolute -top-6 left-1/2 hidden -translate-x-1/2 rounded bg-slate-800 px-1.5 py-1 text-[9px] text-white group-hover:block">
                          {value * 4}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 flex justify-between text-[9px] text-slate-400">
                {chartLabels
                  .slice(
                    period === "3 bulan" ? 9 : period === "6 bulan" ? 6 : 0
                  )
                  .map((label) => (
                    <span key={label}>{label}</span>
                  ))}
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
            <span className="h-2.5 w-2.5 rounded-sm bg-indigo-500" />
            <span className="text-[11px] text-slate-500">
              Registrasi portal
            </span>
            <span className="ml-auto text-[10px] text-slate-400">
              Periode: {period}
            </span>
          </div>
        </div>

        {/* Activity timeline */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-slate-900">
                Aktivitas Terbaru
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                Aktivitas sistem terkini
              </p>
            </div>
            <button
              //   onClick={() => setActiveMenu("Registrasi Portal")}
              className="rounded-lg p-2 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="mt-6">
            {activities.map((activity, i) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.title}
                  className="relative flex gap-3 pb-6 last:pb-0"
                >
                  {i !== activities.length - 1 && (
                    <div className="absolute bottom-0 left-[17px] top-10 w-px bg-slate-100" />
                  )}
                  <div
                    className={`relative z-10 flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                  >
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <p className="text-xs font-bold text-slate-800">
                      {activity.title}
                    </p>
                    <p className="mt-1 truncate text-[11px] text-slate-500">
                      {activity.detail}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-400">
                      <Clock3 size={11} />
                      {activity.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={
              () => {}
              //   notify("Riwayat lengkap masih menggunakan data demo.")
            }
            className="mt-6 w-full rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Lihat semua aktivitas
          </button>
        </div>
      </section>

      {/* Registration table */}
      <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-slate-900">
                Registrasi Portal Terbaru
              </h3>
              <span className="rounded-md bg-indigo-50 px-2 py-1 text-[10px] font-bold text-indigo-600">
                {/* {filteredRegistrations.length} data */}
                Data
              </span>
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              Daftar peserta yang mendaftar pada portal kegiatan
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative md:hidden">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                // value={search}
                // onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari registrasi..."
                className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-indigo-400"
              />
            </div>
            <select
              //   value={statusFilter}
              //   onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-600 outline-none focus:border-indigo-400"
            >
              <option>Semua status</option>
              <option>Disetujui</option>
              <option>Menunggu</option>
              <option>Ditinjau</option>
            </select>
            <button
              //   onClick={() => setActiveMenu("Registrasi Portal")}
              className="flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-indigo-700"
            >
              Lihat semua
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left">
            <thead>
              <tr className="bg-slate-50/80 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-4">Mahasiswa</th>
                <th className="px-5 py-4">Sekolah</th>
                <th className="px-5 py-4">Portal Kegiatan</th>
                <th className="px-5 py-4">Tanggal</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRegistrations.map((item) => (
                <tr key={item.nim} className="transition hover:bg-slate-50/70">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xs font-extrabold ${item.color}`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-800">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">
                          {item.nim}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p className="text-xs font-semibold text-slate-700">
                      {item.school}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1.5 text-[10px] font-bold text-indigo-600">
                      {item.portal}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[10px] font-bold ${
                        item.status === "Disetujui"
                          ? "bg-emerald-50 text-emerald-700"
                          : item.status === "Menunggu"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-sky-50 text-sky-700"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {item.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      //   onClick={() => notify(`Detail ${item.name} (demo).`)}
                      className="rounded-lg p-2 text-slate-400 transition hover:bg-indigo-50 hover:text-indigo-600"
                      title="Lihat detail"
                    >
                      <ArrowUpRight size={17} />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredRegistrations.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-slate-400"
                  >
                    Tidak ada registrasi yang sesuai dengan pencarian.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="text-[11px] text-slate-400">
            Menampilkan{" "}
            <span className="font-bold text-slate-600">
              {filteredRegistrations.length}
            </span>{" "}
            dari {registrations.length} data demo
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="rounded-lg border border-slate-200 p-2 text-slate-300 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={15} />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
              1
            </button>
            <button
              //   onClick={() =>
              //     notify("Pagination halaman berikutnya belum dihubungkan.")
              //   }
              className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100"
            >
              2
            </button>
            <button
              //   onClick={() =>
              //     notify("Pagination halaman berikutnya belum dihubungkan.")
              //   }
              className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
