import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Sparkles,
  X,
} from "lucide-react";
import {
  LayoutDashboard,
  School,
  PanelsTopLeft,
  CalendarDays,
  ClipboardList,
  Users,
  CircleHelp,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { StringDecoder } from "string_decoder";

type MenuItem = {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
};

const navigation: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU UTAMA",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
      { label: "Mahasiswa", icon: GraduationCap, href: "/mahasiswa" },
      { label: "Sekolah", icon: School, href: "/sekolah" },
    ],
  },
  {
    title: "MANAJEMEN KEGIATAN",
    items: [
      { label: "Portal", icon: PanelsTopLeft, href: "/portal" },
      { label: "Tahun Ajaran", icon: CalendarDays, href: "/tahun-ajaran" },
      {
        label: "Registrasi Portal",
        icon: ClipboardList,
        href: "/registrasi-portal",
      },
    ],
  },
  {
    title: "PENGATURAN",
    items: [{ label: "User", icon: Users, href: "/users" }],
  },
];
export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebar,
  setMobileSidebar,
  activeMenu,
  setActiveMenu,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileSidebar: boolean;
  setMobileSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
}) {
  const pathName = usePathname();

  return (
    <>
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
                  //   const active = activeMenu === item.label;
                  const active =
                    pathName.replace("/", "").toLocaleLowerCase() ==
                    item.label.toLocaleLowerCase();

                  return (
                    <Link
                      href={item.href}
                      key={item.label}
                      title={!sidebarOpen ? item.label : undefined}
                      // onClick={() => {
                      //   setActiveMenu(item.label);
                      //   setMobileSidebar(false);
                      //   closePanels();
                      // }}
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
                    </Link>
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
              //   onClick={() => notify("Silakan hubungi administrator kampus.")}
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
    </>
  );
}
