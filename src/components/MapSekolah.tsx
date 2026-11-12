"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Sekolah } from "../models/sekolah.models";
// import "leaflet/dist/leaflet.css";
const markerIcon = L.divIcon({
  className: "custom-school-marker",
  html: `
    <div class="school-marker">
      <div class="school-marker-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m22 10-10-5L2 10l10 5 10-5Z"/>
          <path d="M6 12v5c3.5 3 8.5 3 12 0v-5"/>
          <path d="M22 10v6"/>
        </svg>
      </div>
      <span class="school-marker-point"></span>
    </div>
  `,
  iconSize: [42, 50],
  iconAnchor: [21, 50],
  popupAnchor: [0, -46],
});
export default function MapSekolah({
  sekolah,
}: {
  sekolah?: Sekolah[] | null;
}) {
  return (
    <MapContainer
      center={[0.3296148, 101.0327029]}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        width: "100%",
        height: "450px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sekolah?.map((item) => {
        return (
          <Marker
            key={item.id}
            position={[Number(item.latitude), Number(item.longitude)]}
            icon={markerIcon}
          >
            <Popup className="school-popup">
              <div className="w-[260px] overflow-hidden rounded-xl">
                {/* Header */}
                <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 21.75a11.952 11.952 0 01-6.824-4.693 12.083 12.083 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-900">{item.nama}</h3>
                    <p className="text-xs text-gray-500">
                      ID Sekolah: {item.id}
                    </p>
                  </div>
                </div>

                {/* Informasi */}
                <div className="space-y-3 py-3">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">✉</span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Email
                      </p>
                      <p className="break-all text-xs text-gray-700">
                        {item.email || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">☎</span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Nomor Telepon
                      </p>
                      <p className="text-xs text-gray-700">
                        {item.telepon || "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">⌖</span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Alamat
                      </p>
                      <p className="text-xs leading-relaxed text-gray-700">
                        {item.alamat || "-"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <a
                  href={`https://www.google.com/maps?q=${item.latitude},${item.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                >
                  Lihat di Google Maps
                  <span>↗</span>
                </a>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
