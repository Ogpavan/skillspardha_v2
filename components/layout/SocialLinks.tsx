function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.768.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.1-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.174-1.413-.075-.124-.273-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.437-9.884 9.889-9.884 2.64.001 5.121 1.03 6.987 2.898a9.825 9.825 0 0 1 2.893 6.992c-.002 5.45-4.438 9.884-9.885 9.884m8.413-18.296A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.334.157 11.89c-.001 2.096.547 4.142 1.588 5.946L.05 24l6.304-1.654a11.882 11.882 0 0 0 5.69 1.448h.005c6.554 0 11.89-5.335 11.893-11.89a11.82 11.82 0 0 0-3.478-8.415" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
      <circle cx="6.5" cy="6" r="1.5" />
      <path d="M5 9h3v10H5zm5 0h2.9v1.4c.5-.9 1.5-1.7 3.2-1.7 3.1 0 3.9 2 3.9 4.8V19h-3v-4.8c0-1.4-.3-2.6-1.8-2.6s-2.2 1.1-2.2 2.6V19h-3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.4v3h2.7v8z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "WhatsApp",
    detail: "+91 70171 19254",
    href: "https://wa.me/917017119254",
    className: "social-rail-whatsapp",
    icon: <WhatsAppIcon />,
  },
  {
    label: "LinkedIn",
    detail: "skills-pardha",
    href: "https://in.linkedin.com/company/skills-pardha",
    className: "social-rail-linkedin",
    icon: <LinkedInIcon />,
  },
  {
    label: "Instagram",
    detail: "@skillspardha",
    href: "https://www.instagram.com/skillspardha",
    className: "social-rail-instagram",
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook",
    detail: "@skillspardha",
    href: "https://www.facebook.com/skillspardha",
    className: "social-rail-facebook",
    icon: <FacebookIcon />,
  },
];

export function SocialLinks() {
  return (
    <nav className="social-rail" aria-label="Social media links">
      {socialLinks.map(({ label, detail, href, className, icon }) => (
        <a key={label} className={`social-rail-link ${className}`} href={href} target="_blank" rel="noreferrer" aria-label={`${label}: ${detail}`} title={detail}>
          {icon}
          <span className="social-rail-tooltip" aria-hidden="true">{detail}</span>
        </a>
      ))}
    </nav>
  );
}
