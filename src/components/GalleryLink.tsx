import Link from "next/link";
import { CameraIcon } from "@/components/devotional-art";

/**
 * A small, consistent "View Photo Gallery" CTA dropped near the bottom of
 * each content page, linking straight to the Media page's photo gallery
 * section.
 */
export default function GalleryLink({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href="/media#gallery"
        className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream px-5 py-2.5 text-sm font-semibold text-navy hover:bg-gold/10 hover:border-gold transition-colors"
      >
        <CameraIcon className="w-4 h-4 text-gold" />
        View Photo Gallery
      </Link>
    </div>
  );
}
