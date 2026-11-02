"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Sekolah } from "../modules/models/sekolah.model";

const MapSekolah = dynamic(() => import("@/src/components/MapSekolah"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[450px] items-center justify-center rounded-xl bg-gray-100">
      <span className="text-sm text-gray-500">Memuat peta...</span>
    </div>
  ),
});

export default function MapSekolahLoader({
  sekolah,
}: {
  sekolah: Sekolah[] | null;
}) {
  const [mapKey, setMapKey] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setMapKey((prev) => prev + 1);
    setIsReady(true);

    return () => {
      setIsReady(false);
    };
  }, []);

  if (!isReady) {
    return (
      <div className="flex h-[450px] items-center justify-center rounded-xl bg-gray-100">
        Memuat peta sekolah...
      </div>
    );
  }

  return <MapSekolah key={mapKey} sekolah={sekolah} />;
}
