import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiNetlify,
} from 'react-icons/si';

const iconMap: Record<string, React.ReactNode> = {
  figma:      <img src="/figma.svg" alt="Figma" width={13} height={13} style={{ objectFit: 'contain' }} />,
  react:      <SiReact      size={20} color="#61DAFB" />,
  typescript: <SiTypescript size={20} color="#3178C6" />,
  nextjs:     <SiNextdotjs  size={20} color="#000000" />,
  redux:      <SiRedux      size={20} color="#764ABC" />,
  nodejs:     <SiNodedotjs  size={20} color="#339933" />,
  mongodb:    <SiMongodb    size={20} color="#47A248" />,
  netlify:    <SiNetlify    size={20} color="#00C7B7" />,
  claude:     <img src="/claude.svg"  alt="Claude"  width={23} height={23} style={{ objectFit: 'contain' }} />,
  cursor:     <img src="/cursor.svg"  alt="Cursor"  width={20} height={20} style={{ objectFit: 'contain', borderRadius: 4 }} />,
};

export function SkillIcon({ icon }: { icon: string }) {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 shrink-0">
      {iconMap[icon] ?? null}
    </span>
  );
}
