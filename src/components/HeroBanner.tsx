import { motion } from 'framer-motion';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  category?: string;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, category }) => {
  return (
    <section className="relative w-full bg-black pt-36 pb-20 md:pt-44 md:pb-28 border-b border-white/10 flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto flex flex-col items-center"
      >
        {category && (
          <span className="text-xs md:text-sm font-sans tracking-widest text-neutral-400 uppercase mb-4">
            {category}
          </span>
        )}
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-cinematic text-white uppercase">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 md:mt-6 text-sm md:text-base text-neutral-400 max-w-2xl font-sans tracking-wide leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="w-12 h-[1px] bg-white/20 mt-8 md:mt-10" />
      </motion.div>
    </section>
  );
};
