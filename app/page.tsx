"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  GraduationCap,
  School,
  PanelsTopLeft,
  CalendarDays,
  ClipboardList,
  Users,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  MessageSquare,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Menu,
  X,
  Check,
  Clock3,
  MapPin,
  Calendar,
  Settings,
  LogOut,
  UserRound,
  CheckCheck,
  Send,
  FileText,
  CircleHelp,
  Sparkles,
  TrendingUp,
} from "lucide-react";

type MenuItem = {
  label: string;
  icon: typeof LayoutDashboard;
};

const navigation: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU UTAMA",
    items: [
      { label: "Dashboard", icon: LayoutDashboard },
      { label: "Mahasiswa", icon: GraduationCap },
      { label: "Sekolah", icon: School },
    ],
  },
  {
    title: "MANAJEMEN KEGIATAN",
    items: [
      { label: "Portal", icon: PanelsTopLeft },
      { label: "Tahun Ajaran", icon: CalendarDays },
      { label: "Registrasi Portal", icon: ClipboardList },
    ],
  },
  {
    title: "PENGATURAN",
    items: [{ label: "User", icon: Users }],
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

export default function DashboardPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState("");
  const [period, setPeriod] = useState("12 bulan");
  const [statusFilter, setStatusFilter] = useState("Semua status");
  const [notificationsRead, setNotificationsRead] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Admin Akademik",
      text: "Mohon cek data registrasi terbaru.",
      time: "09:42",
      unread: true,
      initials: "AA",
    },
    {
      name: "Koordinator PMB",
      text: "Jadwal promosi minggu depan sudah siap.",
      time: "09:15",
      unread: true,
      initials: "KP",
    },
    {
      name: "Operator Kampus",
      text: "Data sekolah berhasil diperbarui.",
      time: "Kemarin",
      unread: false,
      initials: "OK",
    },
  ]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "Mahasiswa",
  });

  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 3000);
  };

  const filteredRegistrations = registrations.filter((item) => {
    const matchesSearch =
      `${item.name} ${item.nim} ${item.school} ${item.portal}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "Semua status" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const pageDescriptions: Record<string, string> = {
    Dashboard: "Pantau aktivitas dan perkembangan Bela Kampus.",
    Mahasiswa: "Kelola data mahasiswa yang mengikuti kegiatan.",
    Sekolah: "Kelola sekolah tujuan promosi kampus.",
    Portal: "Atur portal dan kegiatan promosi kampus.",
    "Tahun Ajaran": "Kelola periode akademik dan tahun ajaran.",
    "Registrasi Portal": "Pantau dan verifikasi pendaftaran kegiatan.",
    User: "Kelola akun pengguna dan hak akses sistem.",
  };

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowModal(false);
    notify(`Data ${form.category.toLowerCase()} berhasil disimpan (demo).`);
    setForm({ name: "", email: "", category: "Mahasiswa" });
  }

  const panelOpen = showNotifications || showMessages || showProfile;

  function closePanels() {
    setShowNotifications(false);
    setShowMessages(false);
    setShowProfile(false);
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-800">
      {/* Mobile overlay */}
      {mobileSidebar && (
        <button
          aria-label="Tutup sidebar"
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileSidebar(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-200/80 bg-white transition-all duration-300 ${
          mobileSidebar
            ? "translate-x-0 w-[270px]"
            : "-translate-x-full lg:translate-x-0"
        } ${sidebarOpen ? "lg:w-[260px]" : "lg:w-[82px]"}`}
      >
        <div className="flex h-[82px] shrink-0 items-center gap-3 border-b border-slate-100 px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-lg shadow-indigo-200">
            <GraduationCap size={25} strokeWidth={2.2} />
          </div>
          {(sidebarOpen || mobileSidebar) && (
            <div className="min-w-0 flex-1">
              <p className="text-[17px] font-extrabold tracking-tight text-slate-900">
                Bela Kampus
              </p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
                Management System
              </p>
            </div>
          )}
          <button
            onClick={() => setMobileSidebar(false)}
            className="ml-auto rounded-lg p-1 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {(sidebarOpen || mobileSidebar) && (
          <div className="mx-4 mt-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-3.5 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
              <Sparkles size={20} />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold">Politeknik Kampar</p>
              <p className="mt-1 text-[10px] text-indigo-100">
                Sistem Informasi Internal
              </p>
            </div>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto px-3 pb-5 pt-6">
          {navigation.map((group) => (
            <div key={group.title} className="mb-7">
              {(sidebarOpen || mobileSidebar) && (
                <p className="mb-3 px-3 text-[10px] font-bold tracking-[0.15em] text-slate-400">
                  {group.title}
                </p>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = activeMenu === item.label;

                  return (
                    <button
                      key={item.label}
                      title={!sidebarOpen ? item.label : undefined}
                      onClick={() => {
                        setActiveMenu(item.label);
                        setMobileSidebar(false);
                        closePanels();
                      }}
                      className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-[13px] font-semibold transition-all ${
                        active
                          ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                          : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
                      }`}
                    >
                      {active && (
                        <span className="absolute -left-3 top-2 h-8 w-1 rounded-r-full bg-indigo-600" />
                      )}
                      <Icon
                        size={19}
                        className="shrink-0"
                        strokeWidth={active ? 2.3 : 1.8}
                      />
                      {(sidebarOpen || mobileSidebar) && (
                        <>
                          <span className="flex-1">{item.label}</span>
                          {item.label === "Registrasi Portal" && (
                            <span
                              className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                                active
                                  ? "bg-white/20 text-white"
                                  : "bg-indigo-50 text-indigo-600"
                              }`}
                            >
                              8
                            </span>
                          )}
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {(sidebarOpen || mobileSidebar) && (
          <div className="mx-4 mb-4 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4">
            <div className="mb-2 flex items-center gap-2">
              <CircleHelp size={17} className="text-indigo-600" />
              <span className="text-xs font-bold text-slate-800">
                Butuh bantuan?
              </span>
            </div>
            <p className="mb-3 text-[11px] leading-relaxed text-slate-500">
              Hubungi tim administrator jika mengalami kendala.
            </p>
            <button
              onClick={() => notify("Silakan hubungi administrator kampus.")}
              className="w-full rounded-lg bg-white px-3 py-2 text-xs font-bold text-indigo-600 shadow-sm hover:bg-indigo-100"
            >
              Pusat Bantuan
            </button>
          </div>
        )}

        <div className="flex h-[66px] shrink-0 items-center border-t border-slate-100 px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="hidden w-full items-center justify-center gap-3 rounded-xl p-2.5 text-slate-400 transition hover:bg-slate-50 hover:text-indigo-600 lg:flex"
          >
            {sidebarOpen ? (
              <>
                <ChevronLeft size={19} />
                <span className="text-xs font-semibold">Tutup sidebar</span>
              </>
            ) : (
              <ChevronRight size={19} />
            )}
          </button>
          <p className="w-full text-center text-[10px] text-slate-400 lg:hidden">
            Bela Kampus v1.0
          </p>
        </div>
      </aside>

      {/* Main area */}
      <div
        className={`min-h-screen transition-[margin] duration-300 ${
          sidebarOpen ? "lg:ml-[260px]" : "lg:ml-[82px]"
        }`}
      >
        {/* Topbar */}
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
          <div className="flex h-[82px] items-center justify-between gap-3 px-4 sm:px-6 xl:px-9">
            <div className="flex min-w-0 items-center gap-3">
              <button
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setMobileSidebar(true);
                  } else {
                    setSidebarOpen(!sidebarOpen);
                  }
                }}
                aria-label="Toggle sidebar"
                className="rounded-xl border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
              >
                <Menu size={20} />
              </button>
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="hidden sm:inline">Workspace</span>
                  <ChevronRight size={12} className="hidden sm:block" />
                  <span className="truncate font-semibold text-indigo-600">
                    {activeMenu}
                  </span>
                </div>
                <h1 className="mt-1 truncate text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                  {activeMenu === "Dashboard"
                    ? "Dashboard Overview"
                    : activeMenu}
                </h1>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <div className="relative hidden md:block">
                <Search
                  size={17}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari data..."
                  className="h-10 w-44 rounded-xl border border-slate-200 bg-slate-50/70 pl-10 pr-3 text-xs outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50 xl:w-60"
                />
                <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] text-slate-400 xl:block">
                  /
                </span>
              </div>

              {/* Messages */}
              <div className="relative">
                <button
                  aria-label="Pesan"
                  onClick={() => {
                    setShowMessages(!showMessages);
                    setShowNotifications(false);
                    setShowProfile(false);
                  }}
                  className={`relative rounded-xl border p-2.5 transition ${
                    showMessages
                      ? "border-indigo-200 bg-indigo-50 text-indigo-600"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <MessageSquare size={18} />
                  <span className="absolute -right-1 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full border-2 border-white bg-sky-500 px-1 text-[9px] font-bold text-white">
                    {messages.filter((m) => m.unread).length}
                  </span>
                </button>

                {showMessages && (
                  <div className="absolute right-0 top-14 z-50 w-[min(340px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                    <div className="flex items-center justify-between border-b border-slate-100 p-4">
                      <div>
                        <h3 className="text-sm font-extrabold">Messages</h3>
                        <p className="mt-1 text-[11px] text-slate-400">
                          Pesan dari tim kampus
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          setMessages((prev) =>
                            prev.map((m) => ({ ...m, unread: false }))
                          )
                        }
                        className="text-[10px] font-bold text-indigo-600 hover:underline"
                      >
                        Tandai dibaca
                      </button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto">
                      {messages.map((message, i) => (
                        <button
                          key={message.name}
                          onClick={() => {
                            setMessages((prev) =>
                              prev.map((m, j) =>
                                j === i ? { ...m, unread: false } : m
                              )
                            );
                            notify(`Pesan dari ${message.name} dibuka.`);
                          }}
                          className="flex w-full gap-3 border-b border-slate-50 p-4 text-left transition hover:bg-slate-50"
                        >
                          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
                            {message.initials}
                            {message.unread && (
                              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-indigo-500" />
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <p className="truncate text-xs font-bold">
                                {message.name}
                              </p>
                              <span className="shrink-0 text-[10px] text-slate-400">
                                {message.time}
                              </span>
                            </div>
                            <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                              {message.text}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!messageText.trim()) return;
                        setMessages((prev) => [
                          {
                            name: "Anda",
                            text: messageText,
                            time: "Baru saja",
                            unread: false,
                            initials: "AD",
                          },
                          ...prev,
                        ]);
                        setMessageText("");
                        notify("Pesan demo berhasil dikirim.");
                      }}
                      className="flex gap-2 border-t border-slate-100 p-3"
                    >
                      <input
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        placeholder="Tulis pesan..."
                        className="min-w-0 flex-1 rounded-lg bg-slate-50 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-indigo-100"
                      />
                      <button
                        aria-label="Kirim pesan"
                        className="rounded-lg bg-indigo-600 p-2 text-white hover:bg-indigo-700"
                      >
                        <Send size={16} />
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  aria-label="Notifikasi"
                  onClick={() => {
                    setShowNotifications(!showNotifications);
                    setShowMessages(false);
                    setShowProfile(false);
                  }}
                  className={`relative rounded-xl border p-2.5 transition ${
                    showNotifications
                      ? "border-indigo-200 bg-indigo-50 text-indigo-600"
                      : "border-slate-200 text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  <Bell size={18} />
                  {!notificationsRead && (
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full border border-white bg-rose-500" />
                  )}
                </button>

                {showNotifications && (
                  <div className="absolute right-0 top-14 z-50 w-[min(330px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/70">
                    <div className="flex items-center justify-between border-b border-slate-100 p-4">
                      <div>
                        <h3 className="text-sm font-extrabold">Notifikasi</h3>
                        <p className="mt-1 text-[11px] text-slate-400">
                          Aktivitas terbaru sistem
                        </p>
                      </div>
                      <button
                        onClick={() => setNotificationsRead(true)}
                        className="rounded-lg p-2 text-indigo-600 hover:bg-indigo-50"
                        title="Tandai semua dibaca"
                      >
                        <CheckCheck size={17} />
                      </button>
                    </div>
                    {activities.slice(0, 3).map((activity, i) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={activity.title}
                          className="flex gap-3 border-b border-slate-50 p-4"
                        >
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${activity.color}`}
                          >
                            <Icon size={17} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold">
                              {activity.title}
                            </p>
                            <p className="mt-1 text-[11px] text-slate-500">
                              {activity.detail}
                            </p>
                            <p className="mt-1.5 text-[10px] text-slate-400">
                              {activity.time}
                            </p>
                          </div>
                          {!notificationsRead && i === 0 && (
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                          )}
                        </div>
                      );
                    })}
                    <button
                      onClick={() => {
                        setActiveMenu("Registrasi Portal");
                        closePanels();
                      }}
                      className="w-full p-3.5 text-center text-xs font-bold text-indigo-600 hover:bg-indigo-50"
                    >
                      Lihat aktivitas selengkapnya
                    </button>
                  </div>
                )}
              </div>

              <div className="mx-0.5 hidden h-9 w-px bg-slate-200 sm:block" />

              {/* Profile dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowProfile(!showProfile);
                    setShowMessages(false);
                    setShowNotifications(false);
                  }}
                  className="flex items-center gap-2.5 rounded-xl p-1.5 transition hover:bg-slate-50 sm:gap-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-extrabold text-white shadow-sm">
                    AD
                  </div>
                  <div className="hidden text-left sm:block">
                    <p className="text-xs font-bold text-slate-800">
                      Admin Bela
                    </p>
                    <p className="mt-1 text-[10px] text-slate-400">
                      Administrator
                    </p>
                  </div>
                  <ChevronDown
                    size={15}
                    className="hidden text-slate-400 sm:block"
                  />
                </button>

                {showProfile && (
                  <div className="absolute right-0 top-14 z-50 w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/70">
                    <div className="border-b border-slate-100 px-3 py-3">
                      <p className="text-xs font-bold">Admin Bela Kampus</p>
                      <p className="mt-1 truncate text-[11px] text-slate-400">
                        admin@poltek-kampar.ac.id
                      </p>
                    </div>
                    {[
                      { label: "Profil Saya", icon: UserRound },
                      { label: "Pengaturan", icon: Settings },
                    ].map(({ label, icon: Icon }) => (
                      <button
                        key={label}
                        onClick={() => {
                          closePanels();
                          if (label === "Pengaturan") {
                            setActiveMenu("User");
                          } else {
                            notify("Halaman profil (demo).");
                          }
                        }}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                      >
                        <Icon size={16} />
                        {label}
                      </button>
                    ))}
                    <div className="my-1 border-t border-slate-100" />
                    <button
                      onClick={() => {
                        closePanels();
                        notify(
                          "Hubungkan tombol ini ke proses logout autentikasi."
                        );
                      }}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-xs font-semibold text-rose-600 hover:bg-rose-50"
                    >
                      <LogOut size={16} />
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="mx-auto max-w-[1600px] p-4 sm:p-6 xl:p-9">
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                  Sistem beroperasi
                </span>
              </div>
              <h2 className="text-[25px] font-extrabold tracking-tight text-slate-900 sm:text-[30px]">
                {activeMenu === "Dashboard"
                  ? "Selamat datang, Admin! "
                  : `Manajemen ${activeMenu}`}
                {activeMenu === "Dashboard" && (
                  <span className="inline-block">👋</span>
                )}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                {pageDescriptions[activeMenu]}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-xs font-semibold text-slate-600 shadow-sm">
                <Calendar size={15} className="text-indigo-500" />
                25 Oktober 2026
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
              >
                <Plus size={16} strokeWidth={2.5} />
                Tambah Data
              </button>
            </div>
          </div>

          {activeMenu !== "Dashboard" && (
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
          )}

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
                  Kelola promosi kampus, koordinasikan kunjungan sekolah, dan
                  pantau perkembangan registrasi mahasiswa dalam satu dashboard
                  terintegrasi.
                </p>
                <button
                  onClick={() => setActiveMenu("Registrasi Portal")}
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
                onClick={() =>
                  notify("Data statistik demo berhasil diperbarui.")
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
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
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
                  onClick={() => setActiveMenu("Registrasi Portal")}
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
                onClick={() =>
                  notify("Riwayat lengkap masih menggunakan data demo.")
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
                    {filteredRegistrations.length} data
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari registrasi..."
                    className="w-full rounded-xl border border-slate-200 py-2.5 pl-9 pr-3 text-xs outline-none focus:border-indigo-400"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-xs font-semibold text-slate-600 outline-none focus:border-indigo-400"
                >
                  <option>Semua status</option>
                  <option>Disetujui</option>
                  <option>Menunggu</option>
                  <option>Ditinjau</option>
                </select>
                <button
                  onClick={() => setActiveMenu("Registrasi Portal")}
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
                    <tr
                      key={item.nim}
                      className="transition hover:bg-slate-50/70"
                    >
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
                        <span className="text-xs text-slate-500">
                          {item.date}
                        </span>
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
                          onClick={() => notify(`Detail ${item.name} (demo).`)}
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
                  onClick={() =>
                    notify("Pagination halaman berikutnya belum dihubungkan.")
                  }
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-100"
                >
                  2
                </button>
                <button
                  onClick={() =>
                    notify("Pagination halaman berikutnya belum dihubungkan.")
                  }
                  className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="flex flex-col justify-between gap-2 py-6 text-[10px] text-slate-400 sm:flex-row sm:items-center">
            <p>© 2026 Sistem Informasi Bela Kampus · Politeknik Kampar</p>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                All systems operational
              </span>
              <span>Versi 1.0.0</span>
            </div>
          </footer>
        </main>
      </div>

      {/* Add data modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="my-auto w-full max-w-[460px] overflow-hidden rounded-[24px] bg-white shadow-2xl shadow-slate-950/20"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-blue-600 px-6 py-6 text-white">
              <div className="absolute -right-6 -top-12 h-32 w-32 rounded-full border-[20px] border-white/10" />
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-lg bg-white/10 p-2 transition hover:bg-white/20"
              >
                <X size={17} />
              </button>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <Plus size={22} />
              </div>
              <h3 id="modal-title" className="text-xl font-extrabold">
                Tambah Data Baru
              </h3>
              <p className="mt-1.5 text-xs text-indigo-100">
                Isi informasi berikut untuk menambahkan data.
              </p>
            </div>

            <form onSubmit={submitForm} className="space-y-5 p-6">
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Modul Data
                </label>
                <select
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                >
                  {[
                    "Mahasiswa",
                    "Sekolah",
                    "Portal",
                    "Tahun Ajaran",
                    "Registrasi Portal",
                    "User",
                  ].map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Nama / Judul
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Masukkan nama atau judul data"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold text-slate-700">
                  Email / Kontak
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="nama@contoh.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
                />
                <p className="mt-2 text-[10px] text-slate-400">
                  Field ini merupakan contoh form; sesuaikan dengan skema data
                  masing-masing modul.
                </p>
              </div>

              <div className="flex gap-3 border-t border-slate-100 pt-5">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700"
                >
                  <Check size={15} />
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast notification */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-[100] flex max-w-[calc(100vw-40px)] items-center gap-3 rounded-2xl border border-emerald-100 bg-white px-4 py-3.5 shadow-2xl shadow-slate-300/40"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Check size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-extrabold text-slate-800">Informasi</p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
              {toast}
            </p>
          </div>
          <button
            onClick={() => setToast("")}
            aria-label="Tutup notifikasi"
            className="shrink-0 rounded-lg p-1 text-slate-400 hover:bg-slate-100"
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert h-5 w-[100px]"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the{" "}
//             <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
//               page.tsx
//             </code>{" "}
//             file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert h-[14px] w-4"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={14}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
