"use client";

type YouTubePlayerProps = {
    videoId: string;
    title?: string;
    className?: string;
};

export default function YouTubePlayer({
    videoId,
    title = "YouTube video",
    className = "",
}: YouTubePlayerProps) {
    const base = "relative aspect-[16/9] overflow-hidden bg-black";
    const containerClass = className ? `${base} ${className}` : base;

    const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=0`;

    return (
        <div className={containerClass}>
            <iframe
                className="absolute inset-0 h-full w-full"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}
