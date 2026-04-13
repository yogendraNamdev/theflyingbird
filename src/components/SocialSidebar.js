import React from 'react';

const SocialSidebar = () => {
  const socials = [
    { name: 'Facebook', icon: 'FB', color: 'hover:bg-[#1877F2]', link: 'https://facebook.com' },
    { name: 'Twitter/X', icon: '𝕏', color: 'hover:bg-[#000000]', link: 'https://twitter.com' },
    { name: 'Instagram', icon: 'IG', color: 'hover:bg-[#E4405F]', link: 'https://instagram.com' },
    { name: 'YouTube', icon: 'YT', color: 'hover:bg-[#FF0000]', link: 'https://youtube.com' },
    { name: 'Call', icon: '📞', color: 'hover:bg-[#25D366]', link: 'tel:9554605829' },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-2">
      {socials.map((social, i) => (
        <a
          key={i}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center bg-black/40 backdrop-blur-xl border border-white/10 p-3 first:rounded-tr-2xl last:rounded-br-2xl transition-all duration-500 hover:pl-8 ${social.color} text-white`}
        >
          <span className="text-xs font-black tracking-tighter w-6">{social.icon}</span>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-[10px] uppercase font-black tracking-widest ml-0 group-hover:ml-4">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;