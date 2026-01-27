interface StatusIndicatorProps {
  label: string;
  className?: string;
}

/**
 * A glowing status indicator with a pulsing dot.
 * Shows green/emerald in dark mode, cyan in light mode.
 */
export default function StatusIndicator({ label, className = "" }: StatusIndicatorProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-sm font-medium text-emerald-400 [.light_&]:text-accent-cyan ${className}`}
    >
      <span className="relative inline-flex h-2.5 w-2.5">
        {/* bright core */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-400 [.light_&]:bg-accent-cyan opacity-100 shadow-[0_0_12px_3px_rgba(16,185,129,0.9)] [.light_&]:shadow-[0_0_12px_3px_rgba(181,212,130,0.9)]"
          aria-hidden
        />
        {/* soft halo with enhanced pulse */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-400/80 [.light_&]:bg-[#B5D482]/80 blur-[4px] animate-[pulse_1.5s_ease-in-out_infinite]"
          aria-hidden
        />
      </span>
      {label}
    </span>
  );
}
