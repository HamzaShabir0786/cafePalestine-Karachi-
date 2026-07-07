type TatreezBandProps = {
  className?: string;
  variant?: "sand" | "dark";
};

/**
 * A tileable strip inspired by Palestinian tatreez (cross-stitch embroidery)
 * motifs — the recurring signature element used across the site as a
 * divider between sections, echoing the geometric diamond patterns
 * traditionally stitched onto thobes.
 */
export default function TatreezBand({ className = "", variant = "sand" }: TatreezBandProps) {
  const bg = variant === "sand" ? "#F1E9D8" : "#28351F";
  const patternId = variant === "sand" ? "tatreez-sand" : "tatreez-dark";

  return (
    <div className={`w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 240 24"
        preserveAspectRatio="xMidYMid slice"
        className="h-6 w-full block"
      >
        <defs>
          <pattern id={patternId} width="24" height="24" patternUnits="userSpaceOnUse">
            <rect width="24" height="24" fill={bg} />
            {/* central diamond */}
            <path d="M12 3 L19 12 L12 21 L5 12 Z" fill="#9E1B1E" />
            {/* inner diamond */}
            <path d="M12 8 L15 12 L12 16 L9 12 Z" fill="#C08A28" />
            {/* corner stitches */}
            <rect x="0" y="11" width="3" height="2" fill="#3F5335" />
            <rect x="21" y="11" width="3" height="2" fill="#3F5335" />
          </pattern>
        </defs>
        <rect width="240" height="24" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
