import { nav, site } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy pb-24 text-white/60 sm:pb-0">
      <div className="wrap py-16 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-8 max-w-[380px] text-[14.5px] leading-relaxed">
              Australia’s longest-serving Canine Detection Service.
              <br />
              Community | Business | Government
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mono text-white/40">Navigate</p>
              <ul className="mt-5 space-y-3 text-[14.5px]">
                {nav.map(([l, h]) => (
                  <li key={h}>
                    <a href={h} className="text-white/80 hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mono text-white/40">Contact</p>
              <ul className="mt-5 space-y-3 text-[14.5px]">
                <li><a href={site.phoneHref} className="text-white/80 hover:text-white">{site.phone}</a></li>
                <li><a href={site.emergencyHref} className="text-white/80 hover:text-white">Emergency {site.emergency}</a></li>
                <li><a href={`mailto:${site.email}`} className="break-all text-white/80 hover:text-white">{site.email}</a></li>
                <li>{site.postal}</li>
              </ul>
            </div>
            <div>
              <p className="mono text-white/40">Elsewhere</p>
              <ul className="mt-5 space-y-3 text-[14.5px]">
                <li><a href={site.linkedin} target="_blank" rel="noopener" className="text-white/80 hover:text-white">LinkedIn</a></li>
                <li><a href={site.facebook} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Facebook</a></li>
                <li><a href={site.youtube} target="_blank" rel="noopener" className="text-white/80 hover:text-white">YouTube</a></li>
                <li><a href={site.training} target="_blank" rel="noopener" className="text-white/80 hover:text-white">vonforellprecisiontraining.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mono flex flex-col gap-3 pt-8 text-[10.5px] text-white/40 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Detector Dogs Australia All rights reserved</p>
          <p>Detector Dogs Australia is a specialist detection provider and not a security company.</p>
        </div>
      </div>
    </footer>
  );
}
