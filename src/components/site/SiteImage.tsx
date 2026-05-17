import React, { useState, type CSSProperties, type ImgHTMLAttributes } from "react";

type Props = {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
  onError?: ImgHTMLAttributes<HTMLImageElement>["onError"];
};

/** Drop-in replacement for next/image with `fill` support. */
export default function SiteImage({ src, alt, fill, width, height, className, style, priority, onError }: Props) {
  const [err, setErr] = useState(false);
  const fallback = (
    <div
      className={fill ? "absolute inset-0" : ""}
      style={{
        width: fill ? "100%" : width,
        height: fill ? "100%" : height,
        background: "linear-gradient(135deg, var(--primary-light), var(--muted))",
        borderRadius: "inherit",
      }}
    />
  );
  if (err) return fallback;

  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", ...style }}
        onError={(e) => { setErr(true); onError?.(e); }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width as number}
      height={height as number}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={style}
      onError={(e) => { setErr(true); onError?.(e); }}
    />
  );
}
