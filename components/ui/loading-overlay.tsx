// components/ui/loading-overlay.tsx
'use client';

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-white/90 z-[9999] flex items-center justify-center flex-col">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#B75BAA] rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-[#B75BAA] font-medium">Laden...</p>
    </div>
  );
}
