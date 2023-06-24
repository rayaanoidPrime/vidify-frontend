import { CheckCircle, LucideHeart, LucideVerified, X } from "lucide-react";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, type ReactNode } from "react";
// import Link from "next/link";
import Navbar from "~/components/Navbar";
import { Button } from "~/components/ui/button";
import { CHANNEL_LOGOS, explorableVideos } from "~/lib/constants";
import fonts from "~/lib/fonts";

const Home: NextPage = () => {
  const [toShowExamples, setToShowExamples] = useState(true);

  const MenuItem = (props: {
    href: string;
    icon: ReactNode;
    label: string;
  }) => (
    <Link href={props.href} className="mx-auto w-max">
      <div
        style={{
          transitionDuration: "40ms",
        }}
        className="flex w-full min-w-[18rem] max-w-sm items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 px-7 py-4 transition-all hover:border-solid hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-600"
      >
        {props.icon} <span className="ml-3">{props.label}</span>
      </div>
    </Link>
  );

  return (
    <>
      <Head>
        <title>📽️ Swiftube</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ ...fonts.rubik.style }}>
        <Navbar />
        <section className="pb-2 pt-[4.5rem]">
          <div className="relative isolate z-0 bg-white px-6 lg:px-8">
            <div className="relative mx-auto max-w-4xl pt-8">
              <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                {/* <svg
              className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg> */}
              </div>
              <div className="mx-auto text-center">
                <div className="mx-auto mb-8 max-w-xl rounded-md border-l-4 border-blue-500 bg-blue-100 p-4">
                  <div className="flex items-center justify-between space-x-4">
                    <div>
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        Thank you for testing the beta! Working on full release
                        now.
                      </p>
                    </div>
                    <div>
                      {/* <X className="h-6 w-6 cursor-pointer text-blue-600" /> */}
                    </div>
                  </div>
                </div>
                <h1
                  className={`${fonts.k2d.className} mx-auto max-w-2xl text-4xl font-extrabold leading-relaxed text-gray-900 sm:text-6xl`}
                >
                  Create videos Swiftly with AI. ✨
                  {/* Make videos with AI in 120 seconds */}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {`It's like ChatGPT for videos.`}
                  <br />
                  {`Just write a prompt, supply some content, and the video is ready!`}
                </p>
              </div>
              <div className="mx-auto mt-4 flex flex-col items-center justify-center gap-y-3">
                <Link
                  href={"https://github.com/thecmdrunner/swiftube-frontend"}
                >
                  <Button variant={"ghost"} className="mt-4 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </Button>
                </Link>

                <h4 className="mx-auto flex scroll-m-20 flex-wrap items-center text-center text-lg font-medium">
                  Made with{" "}
                  <LucideHeart
                    className="px-0.5"
                    strokeWidth={0}
                    fill="#BE242C"
                  />
                  by{" "}
                  <Link
                    className="pl-0.5 hover:text-blue-600"
                    href={"https://twitter.com/thecmdrunner/"}
                  >
                    @thecmdrunner
                  </Link>
                </h4>
              </div>

              <h2 className="mx-auto mt-16 w-max scroll-m-20 border-b pb-2 text-center text-xl font-medium tracking-tight transition-colors sm:text-3xl">
                Checkout videos created by users 👇
              </h2>

              <div
                className={
                  "container mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 py-12 sm:flex-row sm:flex-wrap"
                }
              >
                {explorableVideos.map((video, index) => {
                  return (
                    <div
                      className={`${fonts.inter.className} block h-auto w-11/12 sm:w-64`}
                      key={index}
                    >
                      <div className="flex aspect-video flex-nowrap overflow-hidden rounded-lg bg-gray-100">
                        {video.data.intro?.images &&
                          video.data.intro.images?.map((image, index) => (
                            <div
                              key={index}
                              style={{
                                backgroundImage: `url(${image.contentUrl})`,
                              }}
                              className="render h-full w-1/3 bg-gray-100 bg-cover bg-center bg-no-repeat blur-[1px]"
                            >
                              {/* <img
                        className="object-fill object-center"
                        src={image.contentUrl}
                        alt={image.name}
                      /> */}
                            </div>
                          ))}
                      </div>
                      <div className="mt-3 flex items-start space-x-2">
                        <div className="mr-1.5 h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-white">
                          <img
                            src={CHANNEL_LOGOS.digital_artist}
                            alt="channel_logo"
                          />
                        </div>
                        <div className="text-md flex flex-col leading-snug">
                          <div className="overflow-ellipsis">
                            <Link href={`/video/${video.uniqueId}`}>
                              {video.metadata.title || video.metadata.topic}
                            </Link>
                          </div>
                          <div className="mt-1.5 flex items-center space-x-1">
                            <div className="text-gray-600">
                              {index % 2 === 0 ? "Jenny Parker" : "John Parker"}
                            </div>

                            <LucideVerified
                              stroke="white"
                              strokeWidth={1.4}
                              className="fill-[#369FE8]"
                            />
                          </div>
                          <div className="mt-0.5 text-sm text-gray-400">
                            9K views
                          </div>
                          {/* <div className="mt-1 w-max rounded-sm border border-red-500 px-1 py-0.5 text-xs font-bold tracking-wide text-red-600">
                    LIVE NOW
                  </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/*
                <MenuItem
                  href="/create"
                  icon={<LucideWand2 />}
                  label="Get started"
                />

                <MenuItem
                  href="/explore"
                  icon={<LucideFileVideo2 />}
                  label="See examples"
                />*/}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
