/**
 * Console Easter Egg — Anduril Digital Agency
 * Displays a styled greeting in the browser console for curious developers.
 */
let hasLogged = false;

export const consoleGreeting = () => {
  if (hasLogged) return;
  hasLogged = true;
  const asciiArt = `
%c
     █████╗ ███╗   ██╗██████╗ ██╗   ██╗██████╗ ██╗██╗     
    ██╔══██╗████╗  ██║██╔══██╗██║   ██║██╔══██╗██║██║     
    ███████║██╔██╗ ██║██║  ██║██║   ██║██████╔╝██║██║     
    ██╔══██║██║╚██╗██║██║  ██║██║   ██║██╔══██╗██║██║     
    ██║  ██║██║ ╚████║██████╔╝╚██████╔╝██║  ██║██║███████╗
    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝╚══════╝
`;

  const styles = [
    "color: #fbe400; font-weight: bold; font-size: 12px; line-height: 1.2;",
  ];

  console.log(asciiArt, styles[0]);

  console.log(
    "%c🚀 Build Modern Digital Experiences",
    "color: #fbe400; font-size: 16px; font-weight: bold; padding: 4px 0;"
  );

  console.log(
    `%c
  Halo developer! 👋
  Penasaran sama kode di balik website ini?
  Atau mau bikin website sekeren ini untuk bisnis kamu?

  Mari berkolaborasi! 🤝
    `,
    "color: #a3a3a3; font-size: 12px; line-height: 1.6;"
  );

  console.log(
    "%c📧 Email      %chello@anduril.web.id",
    "color: #fbe400; font-weight: bold; font-size: 11px;",
    "color: #d4d4d4; font-size: 11px;"
  );
  console.log(
    "%c🌐 Website    %chttps://anduril.web.id",
    "color: #fbe400; font-weight: bold; font-size: 11px;",
    "color: #d4d4d4; font-size: 11px;"
  );
  console.log(
    "%c💼 GitHub     %chttps://github.com/andurila19-lgtm",
    "color: #fbe400; font-weight: bold; font-size: 11px;",
    "color: #d4d4d4; font-size: 11px;"
  );
  console.log(
    "%c🔗 LinkedIn   %chttps://linkedin.com/in/andurilahmad",
    "color: #fbe400; font-weight: bold; font-size: 11px;",
    "color: #d4d4d4; font-size: 11px;"
  );
  console.log(
    "%c💬 WhatsApp   %chttps://wa.me/6285190830010",
    "color: #fbe400; font-weight: bold; font-size: 11px;",
    "color: #d4d4d4; font-size: 11px;"
  );

  console.log(
    "%c\n⚡ Dibangun dengan Next.js, TypeScript, Tailwind CSS & Supabase\n",
    "color: #525252; font-size: 10px; font-style: italic;"
  );
};
