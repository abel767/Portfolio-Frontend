import me from "../../assets/me.png";

export default function MobileAbout() {
  return (
    <section className="px-6 py-10 text-white">

      {/* Profile Row */}
      <div className="flex items-center gap-5">
        <img
          src={me}
          alt="Abel"
          className="
            w-24 h-24 rounded-2xl object-cover
            shadow-[0_0_20px_rgba(0,255,255,0.15)]
            border border-white/5
          "
        />

        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Abel Thomas</h2>
          <p className="text-sm text-gray-400 mt-1">Cybersecurity Analyst</p>
        </div>
      </div>

      {/* Smooth Minimal Bio */}
      <div className="mt-8 space-y-4 text-gray-300 text-[15px] leading-relaxed">

        <p>
          I’m a cybersecurity analyst focused on SOC monitoring, threat
          detection, and building practical security workflows.
        </p>

        <p>
          Skilled with <span className="text-cyan-400 font-medium">Splunk</span>, 
          <span className="text-cyan-400 font-medium"> Wazuh</span>,
          <span className="text-cyan-400 font-medium"> Shuffle</span>, and
          <span className="text-cyan-400 font-medium"> TheHive</span> to create 
          automated triage pipelines.
        </p>

        <p>
          I also come from a MERN development background, which helps me
          understand application-level weaknesses deeper.
        </p>

      </div>
    </section>
  );
}
