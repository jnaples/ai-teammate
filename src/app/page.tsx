"use client";

import toast, { Toaster } from "react-hot-toast";
import useAiTeammatePromptGenerator from "@/src/lib/hooks/useAiTeammatePromptGenerator";

export default function Home() {
  // Use the custom hook to get the necessary states and handler function
  const { generatedPrompt, handleSubmit } = useAiTeammatePromptGenerator();

  function copyPromptToClipboard() {
    const text = document.getElementById("optimizedOutput")?.textContent || "";
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!", {
      style: {
        background: "#27272a",
        color: "#fff",
        fontFamily: "Inter",
      },
      iconTheme: {
        primary: "#10b981", // Circle background (e.g., emerald-500)
        secondary: "#fff", // Check icon color
      },
    });
  }

  return (
    <>
      <main>
        <section className="p-6">
          <div className="relative mx-auto max-w-screen-xl">
            <div className="grid w-full grid-cols-1 items-baseline gap-10 md:grid-cols-5">
              <div className="col-span-3 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 p-px">
                <div className="rounded-2xl bg-[#0C0C0C] p-6">
                  <div>
                    <h1 className="text-[var(--font-montserrat) mb-6 text-3xl font-bold text-white">
                      Build Your AI Teammate
                    </h1>

                    <form
                      id="aiTeammateForm"
                      className="space-y-10"
                      onSubmit={handleSubmit}
                    >
                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-300">
                          Step 1: Figure Out Your AI Teammate&apos;s Superpower
                          (Role & Goal)
                        </h3>
                        <div className="flex flex-col gap-6">
                          <div>
                            <label
                              htmlFor="aiRole"
                              className="block font-medium text-gray-300"
                            >
                              What&apos;s their job? (Clear Role)
                            </label>
                            <input
                              type="text"
                              id="aiRole"
                              name="aiRole"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Social Media Content Creator"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="aiMission"
                              className="block font-medium text-gray-300"
                            >
                              What&apos;s their main mission? (Problem
                              they&apos;re solving)
                            </label>
                            <textarea
                              id="aiMission"
                              name="aiMission"
                              rows={3}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., To generate fresh ad concepts quickly"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-300">
                          Step 2: Introduce Your AI Teammate to the Team (Who
                          They&apos;re Helping)
                        </h3>
                        <div>
                          <label
                            htmlFor="humanHopesHeadaches"
                            className="block font-medium text-gray-300"
                          >
                            What do they need help with? (Describe their goals
                            and biggest challenges the AI can help solve)
                          </label>
                          <textarea
                            id="humanHopesHeadaches"
                            name="humanHopesHeadaches"
                            rows={3}
                            className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                            placeholder="e.g., Sam wants more engaging social media posts, but she's always short on time."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-300">
                          Step 3: Give Your AI Teammate All the Context &
                          Background
                        </h3>
                        <div className="flex flex-col gap-6">
                          <div>
                            <label
                              htmlFor="companyInfo"
                              className="block font-medium text-gray-300"
                            >
                              Company info (DNSFilter: what we do, what makes us
                              special, rivals, etc.)
                            </label>
                            <textarea
                              id="companyInfo"
                              name="companyInfo"
                              rows={4}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., DNSFilter blocks bad websites! We just got Zorus!"
                            ></textarea>
                          </div>
                          <div>
                            <label
                              htmlFor="productBlueprints"
                              className="block font-medium text-gray-300"
                            >
                              Product Blueprints (Our products/features:
                              policies, reports, etc.)
                            </label>
                            <textarea
                              id="productBlueprints"
                              name="productBlueprints"
                              rows={4}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Policies work by blocking categories, custom lists. Reports help people see what's happening (CyberSight, Insights, Query Log)."
                            ></textarea>
                          </div>
                          <div>
                            <label
                              htmlFor="otherUsefulInfo"
                              className="block font-medium text-gray-300"
                            >
                              Any other useful info (Specific terms, rules,
                              brand voice, examples of past successful ads,
                              etc.)
                            </label>
                            <textarea
                              id="otherUsefulInfo"
                              name="otherUsefulInfo"
                              rows={4}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Our brand's voice is friendly, exciting."
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-300">
                          Step 4: Set the Rules for Your AI Teammate
                          (Constraints)
                        </h3>
                        <div className="flex flex-col gap-6">
                          <div>
                            <label
                              htmlFor="communicationStyle"
                              className="block font-medium text-gray-300"
                            >
                              How should they talk? (e.g., short sentences, no
                              long lists)
                            </label>
                            <input
                              type="text"
                              id="communicationStyle"
                              name="communicationStyle"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Always use short sentences."
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="unknownResponse"
                              className="block font-medium text-gray-300"
                            >
                              What should they do if they don&apos;t know
                              something?
                            </label>
                            <input
                              type="text"
                              id="unknownResponse"
                              name="unknownResponse"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Say 'I don't know' or ask me questions."
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="workStyle"
                              className="block font-medium text-gray-300"
                            >
                              What style should their work be in?
                            </label>
                            <input
                              type="text"
                              id="workStyle"
                              name="workStyle"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Friendly, exciting tone."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold text-gray-300">
                          Step 5: Ask for What You Want (The Actual Prompt!)
                        </h3>
                        <div className="flex flex-col gap-6">
                          <div>
                            <label
                              htmlFor="specificMission"
                              className="block font-medium text-gray-300"
                            >
                              Be super clear: What&apos;s their specific mission
                              for the day?
                            </label>
                            <textarea
                              id="specificMission"
                              name="specificMission"
                              rows={3}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Generate 5 catchy headlines for a social media ad about our new roaming client feature."
                            ></textarea>
                          </div>
                          <div>
                            <label
                              htmlFor="examples"
                              className="block font-medium text-gray-300"
                            >
                              Give examples (if it helps)
                            </label>
                            <textarea
                              id="examples"
                              name="examples"
                              rows={3}
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Example headlines: 'Protect Your Devices Anywhere!'"
                            ></textarea>
                          </div>
                          <div>
                            <label
                              htmlFor="moreIdeas"
                              className="block font-medium text-gray-300"
                            >
                              Don&apos;t be afraid to ask for more ideas!
                            </label>
                            <input
                              type="text"
                              id="moreIdeas"
                              name="moreIdeas"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., 'What other ideas do you have for this?'"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="unclearHandling"
                              className="block font-medium text-gray-300"
                            >
                              If unclear:
                            </label>
                            <input
                              type="text"
                              id="unclearHandling"
                              name="unclearHandling"
                              className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-[#3527fd] focus:ring-[#3527fd] focus-visible:ring-1 focus-visible:outline-none"
                              placeholder="e.g., Ask the AI or tell it to ask you questions."
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full cursor-pointer rounded-md bg-[#3527fd] px-4 py-3 font-bold text-white uppercase transition-all duration-300 ease-in-out hover:bg-[rgb(53,39,253,0.5)] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                      >
                        Generate AI Teammate Prompt
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="top-6 col-span-3 block rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 p-px md:sticky md:col-span-2">
                <div className="rounded-2xl bg-[#0C0C0C] p-6">
                  <h2 className="mb-6 text-3xl font-bold text-gray-800">
                    Optimized AI Prompt Output
                  </h2>
                  <div
                    id="optimizedOutput"
                    className="rounded-md bg-zinc-900 p-6 font-mono whitespace-pre-wrap text-gray-200"
                  >
                    {generatedPrompt ||
                      "Your optimized AI Teammate prompt will appear here after you fill out the form and click 'Generate AI Teammate Prompt.'"}
                  </div>

                  <div className="group relative">
                    <button
                      disabled={!generatedPrompt}
                      id="copyPrompt"
                      onClick={copyPromptToClipboard}
                      className="mt-4 w-full cursor-pointer rounded-md bg-[#CE008E] px-4 py-2 font-bold text-white uppercase transition-all duration-300 ease-in-out hover:bg-[rgba(206,0,142,0.8)] focus:ring-2 focus:ring-[#CE008E] focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-[rgba(206,0,142,0.8)]"
                    >
                      Copy Prompt
                    </button>

                    {!generatedPrompt && (
                      <div className="absolute -bottom-[50px] left-1/2 mb-2 hidden w-max -translate-x-1/2 rounded bg-zinc-700 px-2 py-1 text-white group-hover:block">
                        Fill out the form and click "Generate AI Teammate
                        Prompt"
                        <div className="absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 rotate-180 border-t-4 border-r-4 border-l-4 border-t-zinc-700 border-r-transparent border-l-transparent"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Toaster />
    </>
  );
}
