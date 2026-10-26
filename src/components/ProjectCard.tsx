import type { MusicProject } from '../data/music';
import { Disc3, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: MusicProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className={`p-6 sm:p-8 rounded-xl bg-surface-card border transition-all duration-300 flex flex-col justify-between ${
        project.isPlaceholder
          ? 'border-dashed border-neutral-700 bg-neutral-950/60'
          : 'border-white/10 hover:border-white/30 hover:bg-surface-elevated'
      }`}
    >
      <div>
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <Disc3 className="w-4 h-4 text-neutral-300" />
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-400 font-sans">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.badge && (
              <span className="px-2.5 py-1 text-[10px] font-sans font-semibold tracking-wider uppercase rounded-full bg-white/10 text-neutral-200 border border-white/15">
                {project.badge}
              </span>
            )}
            <span className="text-xs font-mono text-neutral-400">
              {project.year}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white uppercase mb-1">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <p className="text-xs text-neutral-400 font-sans mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="text-sm text-neutral-300 font-sans leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Credits Breakdown */}
        <div className="border-t border-white/5 pt-4 space-y-1.5 text-xs font-sans text-neutral-400">
          <div>
            <span className="text-neutral-400">Music Direction: </span>
            <span className="text-neutral-200 font-medium">{project.credits.musicDirector}</span>
          </div>
          {project.credits.singers && (
            <div>
              <span className="text-neutral-400">Vocals: </span>
              <span className="text-neutral-200 font-medium">{project.credits.singers}</span>
            </div>
          )}
          {project.credits.lyrics && (
            <div>
              <span className="text-neutral-400">Lyrics: </span>
              <span className="text-neutral-200 font-medium">{project.credits.lyrics}</span>
            </div>
          )}
          {project.credits.director && (
            <div>
              <span className="text-neutral-400">Film Director: </span>
              <span className="text-neutral-200 font-medium">{project.credits.director}</span>
            </div>
          )}
        </div>
      </div>

      {/* Streaming / Link Footer */}
      {project.streamingLinks && (
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
          {project.streamingLinks.appleMusic && (
            <a
              href={project.streamingLinks.appleMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 bg-white/5 hover:bg-white text-xs font-display tracking-wider text-neutral-200 hover:text-black transition-all"
            >
              <span>APPLE MUSIC</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          {project.streamingLinks.youtube && (
            <a
              href={project.streamingLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-white/20 bg-white/5 hover:bg-white text-xs font-display tracking-wider text-neutral-200 hover:text-black transition-all"
            >
              <span>YOUTUBE</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      )}
    </article>
  );
};
