"use client";

import { useRouter } from "next/navigation";

const workflowSteps = [
  {
    number: "01",
    id: "for-clients",
    title: "For clients: agree on the work",
    description:
      "Set scope, budget, and expectations before the project starts.",
  },
  {
    number: "02",
    id: "for-freelancers",
    title: "For freelancers: keep progress visible",
    description:
      "Give clients a shared view of the work and its current status.",
  },
  {
    number: "03",
    id: "completion",
    title: "Confirm completion",
    description: "Make completion a clear step in the payment release flow.",
  },
];

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-12 pt-6 sm:px-10 sm:pb-16 lg:px-12">
      <div className="w-full overflow-hidden rounded-lg border border-[#f0a500]/20 bg-[#131210]/75 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="grid gap-12 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:gap-16 lg:px-16 lg:py-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#f0a500]">
              <span className="text-[#e87c1e]">// </span>Project workflow for
              freelance work
            </p>

            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] text-[#e8e0d0] sm:text-6xl lg:text-7xl">
              Freelance work,
              <span className="block text-[#f0a500]">with fewer unknowns.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-[#aaa292] sm:text-lg">
              Agree on the work, keep progress visible, and know what needs to
              happen before a project is marked complete.
            </p>

            <div className="mt-9 flex flex-wrap gap-4" id="get-started">
              <button
                className="group inline-flex items-center gap-3 rounded-sm bg-[#f0a500] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] transition-all hover:-translate-y-0.5 hover:bg-[#ffcc44] cursor-pointer"
                onClick={() => router.push("/register-client")}
              >
                Start as a client
                <span
                  aria-hidden="true"
                  className="text-base transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </button>
              <button
                className="inline-flex items-center rounded-sm border border-[#60594d] px-5 py-3 font-mono text-xs font-medium uppercase tracking-[0.12em] text-[#d4ccbc] transition-all hover:-translate-y-0.5 hover:border-[#f0a500] hover:text-[#f0a500] cursor-pointer"
                onClick={() => router.push("/register-freelancer")}
              >
                Join as a freelancer
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-md border border-[#f0a500]/25 bg-[#0d0c0b]/65 p-5 shadow-lg shadow-black/20">
              <div className="flex items-center justify-between pb-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#918a7c]">
                    Project status
                  </p>
                  <p className="mt-1 text-lg font-medium text-[#e8e0d0]">
                    API endpoints
                  </p>
                </div>
                <span className="rounded-full border border-[#f0a500]/40 bg-[#f0a500]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#ffcc44]">
                  In progress
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid border-t border-[#f0a500]/15 md:grid-cols-3"
          id="how-it-works"
        >
          {workflowSteps.map((step, index) => (
            <article
              className={`p-6 sm:p-8 ${index < workflowSteps.length - 1 ? "border-b border-[#f0a500]/15 md:border-b-0 md:border-r" : ""}`}
              id={step.id}
              key={step.number}
            >
              <p className="font-mono text-xs text-[#f0a500]">{step.number}</p>
              <h2 className="mt-5 text-lg font-medium text-[#e8e0d0]">
                {step.title}
              </h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-[#9d9587]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
