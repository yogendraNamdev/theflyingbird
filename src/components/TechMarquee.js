const TechMarquee = () => {
  const techs = [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
  ];

  return (
    <div className="bg-[#000d1a] py-12 overflow-hidden border-y border-white/5 relative">
      <div className="flex w-max animate-marquee whitespace-nowrap items-center">
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="mx-16 flex items-center gap-6 group">
            <img src={tech.icon} alt={tech.name} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500" />
            <span className="text-white/40 text-xl font-black uppercase tracking-widest group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 25s linear infinite; }
      `}</style>
    </div>
  );
};
export default TechMarquee;