import { useState } from "react";

const LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const baseLink =
    "relative px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900";
  const underlineBase =
    "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 after:w-0 hover:after:w-full";
  const activeMods = "text-slate-900 after:w-full";

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleLinkClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <div className="flex justify-between sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur rounded-md p-5">
      <div className="text-4xl font-poppins ">Logo</div>
      <div className="font-semibold flex gap-4 items-center justify-center">
        <nav>
          <ul className="hidden md:flex items-center gap-2">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={l.href}
                  onClick={() => handleLinkClick(l.id)}
                  className={`${baseLink} ${underlineBase} ${
                    active === l.id ? activeMods : ""
                  }`}
                >
                  {" "}
                  {l.label}{" "}
                </a>
              </li>
            ))}
          </ul>

          {/* <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button> */}
        </nav>
        {open && (
          <div className="md:hidden px-3 pb-3">
            <ul className="space-y-1 rounded-2xl border border-slate-200 bg-white p-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={l.href}
                    onClick={() => handleLinkClick(l.id)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium ${
                      active === l.id
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button className="font-semibold font-poppins bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Hire me
        </button>
        <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "✕" : "☰"}
          </button>
      </div>
    </div>
  );
};

export default Navbar;
