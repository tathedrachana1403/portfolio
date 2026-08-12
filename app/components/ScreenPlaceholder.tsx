interface Props {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ScreenPlaceholder({ label, aspectRatio = "aspect-video", className = "" }: Props) {
  return (
    <div
      className={`${aspectRatio} bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center ${className}`}
    >
      <div className="text-center text-gray-400">
        <svg
          className="w-8 h-8 mx-auto mb-2 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeWidth="1.5" d="M3 9h18" />
          <circle cx="7" cy="6" r="1" fill="currentColor" />
          <circle cx="10" cy="6" r="1" fill="currentColor" />
        </svg>
        <p className="text-xs font-medium">{label}</p>
        <p className="text-xs text-gray-300 mt-0.5">Add screen</p>
      </div>
    </div>
  );
}
