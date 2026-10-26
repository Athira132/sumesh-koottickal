
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  alignment?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  tag,
  alignment = 'left',
  className = '',
}) => {
  const isCenter = alignment === 'center';

  return (
    <div
      className={`mb-10 md:mb-14 ${isCenter ? 'text-center flex flex-col items-center' : 'text-left'} ${className}`}
    >
      {tag && (
        <span className="text-xs font-sans tracking-widest text-neutral-400 uppercase block mb-2 font-medium">
          {tag}
        </span>
      )}
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-cinematic text-white uppercase">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-neutral-400 max-w-2xl font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`w-10 h-[1px] bg-white/20 mt-4 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
};
