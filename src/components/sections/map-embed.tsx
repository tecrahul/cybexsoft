export function MapEmbed() {
  return (
    <div className="surface overflow-hidden rounded-2xl">
      <iframe
        title="CybexSoft office location"
        src="https://maps.google.com/maps?q=San%20Francisco%2C%20CA&t=&z=11&ie=UTF8&iwloc=&output=embed"
        className="h-[380px] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
