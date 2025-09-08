"use client";
import Image from "next/image";
import Link from "next/link";

const apps = [
  {
    title: "KAIMIG",
    description: "AI Powered Smart Data Migration",
    action: "ACCESS",
    icon: "/logos/kaimig trans.png",
    href:"https://103.241.64.56:8085/",
  },
  {
    title: "KAITEST",
    description: "Scenario Based Test Automations",
    action: "ACCESS",
    icon: "/logos/kaitest trans.png",
    href: "https://103.241.64.56:8081/",
  },
  {
    title: "KAIREP",
    description: "Instant Crystal Report Conversions",
    action: "ACCESS",
    icon: "/logos/kairep trans.png",
  },
  {
    title: "KAISEC",
    description: "Seamless Permissions Transfer",
    action: "ACCESS",
    icon: "/logos/kaisec trans.png"
  },
  {
    title: "KAIDOC",
    description: "Bespoke Document Migration",
    action: "ACCESS",
    icon: "/kaidoc.png",
  },
];

const docs = [
  {
    title:"Product Documentation",
    description:"Access our documentations portal",
    action:"View"
  },
  {
    title:"Support",
    description:"Access our support portal",
    action:"View"
  }
];

export default function Home() {
  return (
    <section>
    <div className="bg-[linear-gradient(135deg,hsl(240,10%,3.9%)_0%,hsl(263,70%,20%)_50%,hsl(280,80%,25%)_100%)] pt-6 pb-60 2xl:pt-15 2xl:pb-75 relative">
      <div className="absolute">
        <div className="bg-white/10 backdrop-blur-md rounded-r-full px-2 py-2 flex items-center shadow-md">
          <Image
            src="/logos/logoWhite.png"
            alt="Kaibridge Logo"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Heading and subtitle (centered) */}
      <div className="text-center">
        <h2 className="text-white/90 md:text-3xl 2xl:text-5xl font-bold">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            KAIBRIDGE Suite
          </span>
        </h2>
        <p className="text-white/75 mt-2 md:text-md 2xl:text-2xl">
          Accelerate your IFS implementations and upgrades
        </p>
        <div className="w-12 h-1 bg-[var(--bg-4)] mx-auto mt-4 rounded-full" />
      </div>
    </div>

      {/* Cards */}
      <div className="flex w-full justify-center -mt-55 2xl:-mt-60 relative z-10">
        <div className="flex flex-wrap justify-center grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-2xl shadow-black/70 p-7 gap-9 w-[90%] max-w-[1000px] 2xl:max-w-[1100px]">
          {apps.map((app) => (
            <div
              key={app.title}
              className="flex flex-col bg-blue-100 text-center w-full max-w-[270px] h-[160px] 2xl:max-w-[300px] 2xl:h-[180px] justify-center items-center rounded-lg shadow-xl p-6 hover:shadow-md transition">
              <Image
                src={app.icon}
                alt={`${app.title} icon`}
                width={100}
                height={40}
                className="-mt-5 pb-1"
              />
              <p className="text-gray-600 font-bold mt-2 text-xs 2xl:text-xm">{app.description}</p>
              <a
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="2xl:-mb-8 2xl:mt-6 -mb-5 mt-5 text-white text-xs 2xl:text-sm bg-blue-400 hover:bg-blue-600 duration-200 rounded-xl p-2 flex items-center justify-center"
              >
                {app.action}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Docs Section */}
      <div className="text-center pt-10 pb-5">
        <h1 className="font-bold text-black/75 text-xl">More</h1>
      </div>

      <div className="flex w-full px-[var(--x-padding)] text-center justify-center p-5 flex-row gap-6">
        {docs.map((doc) => (
          <div
            key={doc.title}
            className="flex flex-col bg-blue-50 w-[300px] h-[200px] justify-center items-center rounded-lg shadow-sm p-6 hover:shadow-md transition"
          >
            <h2 className="mt-2 font-bold text-xl">{doc.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{doc.description}</p>
            <button className="mt-4 text-blue-600 font-medium hover:underline">
              {doc.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
