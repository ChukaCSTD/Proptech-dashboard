// components/ListingCard.jsx
export default function ListingCard({ image, label = "MOST CLICKED", title = "Urban Prime Plaza Premiere" }) {
  return (
    <article className="rounded-xl overflow-hidden shadow-sm relative h-[350px]">
      <img
        src={image}
        className="h-full w-full object-cover"
        alt={title}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/15 to-transparent" />
      <div className="absolute bottom-8 left-4 text-white">
        <p className="text-xs tracking-wide text-white/80 mb-1">{label}</p>
        <h4 className="font-semibold text-md leading-tight">{title}</h4>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
        <span className="w-1.5 h-1.5 rounded-full bg-white" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
      </div>
    </article>
  );
}
