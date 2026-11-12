"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { login } from "@/src/modules/auth/auth.service";
import {
  LoginErrorResponse,
  LoginRequest,
} from "@/src/modules/auth/auth.request";
import { useRouter } from "next/navigation";
import Alert from "@/src/components/ui/Alert";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});
const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Role = "mahasiswa" | "staf";

/*
  Palet diambil dari logo Politeknik Kampar:
  oranye #FF7200 · hijau #00923F (teks tautan memakai #00743A agar kontras) · arang #1E1B19 · krem #FFF8F0
*/

function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/assets/images/polkam.png"
      alt="Logo Politeknik Kampar"
      width={900}
      height={881}
      priority
      className={className}
    />
  );
}

export default function LoginPage() {
  // const [role, setRole] = useState<Role>("mahasiswa");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  // const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  const [errors, setErrors] = useState<LoginErrorResponse>();
  const router = useRouter();
  // const idLabel = role === "mahasiswa" ? "NIM" : "NIP / Email kampus";

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    const loginRequest: LoginRequest = {
      email: email,
      password: password,
    };
    try {
      const result = await login(loginRequest);
      console.log(result);

      router.push("/dashboard");
    } catch (error) {
      setErrors(error as LoginErrorResponse);
    } finally {
      setLoading(false);
    }
  }

  const field =
    "w-full rounded-xl border border-[#E3D8CB] bg-white px-4 py-3.5 text-[15px] text-[#1E1B19] placeholder:text-[#A79C90] outline-none transition focus:border-[#FF7200] focus:ring-4 focus:ring-[#FF7200]/25";

  return (
    <>
      {/* <style>{`
        @keyframes bk-rise { from { opacity: 0; transform: translateY(24px) scale(.94) } to { opacity: 1; transform: none } }
        .bk-rise { animation: bk-rise .9s cubic-bezier(.2,.8,.2,1) both }
        @media (prefers-reduced-motion: reduce) { .bk-rise { animation: none } }
      `}</style> */}

      <main
        className={`${body.className} grid min-h-screen bg-[#FFF8F0] text-[#1E1B19] lg:grid-cols-[1.05fr_1fr]`}
      >
        {/* Panel kiri */}
        <section className="relative hidden overflow-hidden bg-[#1E1B19] p-12 text-[#FFF8F0] lg:flex lg:flex-col lg:justify-between">
          {/* cahaya oranye di belakang logo */}
          <div
            className="pointer-events-none absolute left-1/2 top-[42%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,114,0,.28) 0%, rgba(255,114,0,0) 68%)",
            }}
          />
          {/* pola garis halus */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#FFF8F0 1px, transparent 1px), linear-gradient(90deg, #FFF8F0 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(circle at 50% 42%, black 15%, transparent 72%)",
              WebkitMaskImage:
                "radial-gradient(circle at 50% 42%, black 15%, transparent 72%)",
            }}
          />

          <div className="relative flex items-center gap-3">
            <span
              className={`${display.className} text-xl font-bold tracking-tight`}
            >
              Bela Kampus
            </span>
            <span className="h-5 w-px bg-[#FFF8F0]/25" />
            <span className="text-sm text-[#FFF8F0]/60">Politeknik Kampar</span>
          </div>

          <div className="relative mx-auto my-10 flex w-full max-w-md flex-col items-center text-center">
            <Logo className="bk-rise h-60 w-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.45)] xl:h-72" />
            <h2
              className={`${display.className} mt-10 text-4xl font-extrabold leading-[1.1] tracking-tight xl:text-5xl`}
            >
              Kampus yang aman dijaga bersama.
            </h2>
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[#FFF8F0]/70">
              Masuk untuk menyampaikan laporan, memantau tindak lanjut, dan ikut
              menjaga lingkungan Politeknik Kampar.
            </p>
          </div>

          <p className="relative text-sm text-[#FFF8F0]/50">
            © 2026 Sistem Bela Kampus · Politeknik Kampar
          </p>
        </section>

        {/* Panel kanan */}
        <section className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-[420px]">
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <Logo className="h-14 w-auto" />
              <div className="leading-tight">
                <span
                  className={`${display.className} block text-xl font-bold`}
                >
                  Bela Kampus
                </span>
                <span className="text-sm text-[#6F655B]">
                  Politeknik Kampar
                </span>
              </div>
            </div>

            <h1
              className={`${display.className} text-[34px] font-extrabold leading-tight tracking-tight`}
            >
              Selamat datang kembali
            </h1>
            <p className="mt-2 text-[15px] text-[#6F655B]">
              Masuk ke akun Bela Kampus kamu.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-6 space-y-5">
              {errors?.statusCode == 401 ? (
                <>
                  <Alert title="Error" type="error" dismissible>
                    Username atau password salah!
                  </Alert>
                </>
              ) : null}

              <div>
                <label
                  htmlFor="id"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  id="id"
                  type="text"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className={field}
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold"
                  >
                    Kata sandi
                  </label>
                  {/* <Link
                    href="/lupa-sandi"
                    className="text-sm font-semibold text-[#00743A] underline-offset-4 hover:underline"
                  >
                    Lupa kata sandi?
                  </Link> */}
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPw ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className={`${field} pr-28`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPw((v) => !v)}
                    aria-pressed={showPw}
                    className="absolute inset-y-0 right-2 my-2 rounded-lg px-3 text-sm font-semibold text-[#6F655B] hover:text-[#00743A] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF7200]/30"
                  >
                    {showPw ? "Sembunyikan" : "Tampilkan"}
                  </button>
                </div>
              </div>

              {/* <label className="flex cursor-pointer items-center gap-3 text-sm text-[#4A423B]">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-[18px] w-[18px] rounded border-[#CDBFB0] accent-[#FF7200]"
                />
                Ingat saya di perangkat ini
              </label> */}

              {/* <div aria-live="polite">
                {error && (
                  <p className="rounded-xl border border-[#E8B4AE] bg-[#FBEDEB] px-4 py-3 text-sm text-[#8A2A1F]">
                    {error}
                  </p>
                )}
              </div> */}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF7200] py-3.5 text-[15px] font-bold text-[#1E1B19] transition hover:bg-[#E86600] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1E1B19]/30 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#1E1B19]/30 border-t-[#1E1B19]" />
                    Memeriksa akun…
                  </>
                ) : (
                  <span className="text-white">Masuk</span>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
