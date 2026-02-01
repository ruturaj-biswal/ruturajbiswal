import {
  Linkedin,
  Github,
  Mail,
  Phone,
  ArrowUp,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 px-6 border-t border-gray-800">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Ruturaj Biswal
          </h2>
          <p className="text-sm leading-relaxed">
            Building web solutions where clean design and powerful
            functionality work in harmony.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white font-medium mb-4">The Website</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white font-medium mb-4">Projects</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://github.com/ruturaj-biswal/Medical_maj" className="hover:text-white">Health.io</a></li>
            <li><a href="#" className="hover:text-white">ruturaj-biswal</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <p className="text-sm mb-3">
            I'm open to freelance projects, full-time roles, or
            collaborative ideas.
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>ruturajbiswal18@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 7656003621</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 flex items-center justify-between">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} code.snacks_. All rights reserved.
        </p>

        <a
          href="#hero"
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
