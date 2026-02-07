interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="mb-14 space-y-4">
      <p className="text-xs tracking-widest uppercase text-white/50">
        Simcol Petroleum Nigeria Limited
      </p>

      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
        {title}
      </h1>

      {description && (
        <p className="max-w-3xl text-base md:text-lg leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </header>
  );
}