"use client";

import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  function copyPromptToClipboard() {
    const text = document.getElementById("optimizedOutput")?.textContent || "";
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  }

  return (
    <>
      <main>
        <section className="p-6">
          <div className="relative mx-auto max-w-screen-xl">
            <div className="grid h-7 w-full grid-cols-1 items-baseline gap-10 md:grid-cols-5">
              <div className="col-span-3 rounded-2xl border border-zinc-800 bg-[#0C0C0C] p-6">
                <div>
                  <h1 className="text-[var(--font-montserrat) mb-6 text-3xl font-bold text-white">
                    Build Your AI Teammate
                  </h1>

                  <form id="aiTeammateForm" className="space-y-10">
                    <div>
                      <h2 className="mb-4 text-lg font-semibold text-gray-300">
                        Step 1: Figure Out Your AI Teammate's Superpower (Role &
                        Goal)
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="aiRole"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What's their job? (Clear Role)
                        </label>
                        <input
                          type="text"
                          id="aiRole"
                          name="aiRole"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Social Media Content Creator"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="aiMission"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What's their main mission? (Problem they're solving)
                        </label>
                        <textarea
                          id="aiMission"
                          name="aiMission"
                          rows="3"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., to generate fresh ad concepts quickly"
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <h2 className="mb-4 text-lg font-semibold text-gray-300">
                        Step 2: Introduce Your AI Teammate to the Team (Who
                        They're Helping)
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="humanTeammates"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Who are the real people? (Describe human teammates)
                        </label>
                        <textarea
                          id="humanTeammates"
                          name="humanTeammates"
                          rows="3"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Max, the Marketing Manager, who needs catchy slogans."
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="humanHopesHeadaches"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What are their hopes, dreams, and headaches? (What
                          they want to achieve and problems they face)
                        </label>
                        <textarea
                          id="humanHopesHeadaches"
                          name="humanHopesHeadaches"
                          rows="3"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Sam wants more engaging social media posts, but she's always short on time."
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <h2 className="mb-4 text-lg font-semibold text-gray-300">
                        Step 3: Give Your AI Teammate All the Context &
                        Background
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="companyInfo"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Company info (DNSFilter: what we do, what makes us
                          special, rivals, etc.)
                        </label>
                        <textarea
                          id="companyInfo"
                          name="companyInfo"
                          rows="4"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., DNSFilter blocks bad websites! We just got Zorus!"
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="productBlueprints"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Product Blueprints (Our products/features: policies,
                          reports, etc.)
                        </label>
                        <textarea
                          id="productBlueprints"
                          name="productBlueprints"
                          rows="4"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Policies work by blocking categories, custom lists. Reports help people see what's happening (CyberSight, Insights, Query Log)."
                        ></textarea>
                      </div>
                      <div>
                        <label
                          htmlFor="otherUsefulInfo"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Any other useful info (Specific terms, rules, brand
                          voice, examples of past successful ads, etc.)
                        </label>
                        <textarea
                          id="otherUsefulInfo"
                          name="otherUsefulInfo"
                          rows="4"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Our brand's voice is friendly, exciting."
                        ></textarea>
                      </div>
                    </div>

                    <div>
                      <h2 className="mb-4 text-lg font-semibold text-gray-300">
                        Step 4: Set the Rules for Your AI Teammate (Constraints)
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="communicationStyle"
                          className="block text-sm font-medium text-gray-300"
                        >
                          How should they talk? (e.g., short sentences, no long
                          lists)
                        </label>
                        <input
                          type="text"
                          id="communicationStyle"
                          name="communicationStyle"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Always use short sentences."
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="unknownResponse"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What should they do if they don't know something?
                        </label>
                        <input
                          type="text"
                          id="unknownResponse"
                          name="unknownResponse"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Say 'I don't know' or ask questions."
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="honesty"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Honesty
                        </label>
                        <select
                          id="honesty"
                          name="honesty"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="true">Always be truthful</option>
                          <option value="false">
                            Not a strict requirement
                          </option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="workStyle"
                          className="block text-sm font-medium text-gray-300"
                        >
                          What style should their work be in?
                        </label>
                        <input
                          type="text"
                          id="workStyle"
                          name="workStyle"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Friendly, exciting tone."
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="mb-4 text-lg font-semibold text-gray-300">
                        Step 5: Ask for What You Want (The Actual Prompt!)
                      </h2>
                      <div className="mb-4">
                        <label
                          htmlFor="specificMission"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Be super clear: What's their specific mission for the
                          day?
                        </label>
                        <textarea
                          id="specificMission"
                          name="specificMission"
                          rows="3"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Generate 5 catchy headlines for a social media ad about our new roaming client feature."
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="examples"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Give examples (if it helps)
                        </label>
                        <textarea
                          id="examples"
                          name="examples"
                          rows="3"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Example headlines: 'Protect Your Devices Anywhere!'"
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="moreIdeas"
                          className="block text-sm font-medium text-gray-300"
                        >
                          Don't be afraid to ask for more ideas!
                        </label>
                        <input
                          type="text"
                          id="moreIdeas"
                          name="moreIdeas"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., 'What other ideas do you have for this?'"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="unclearHandling"
                          className="block text-sm font-medium text-gray-300"
                        >
                          If unclear:
                        </label>
                        <input
                          type="text"
                          id="unclearHandling"
                          name="unclearHandling"
                          className="mt-2 block w-full rounded-md border border-zinc-600 p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                          placeholder="e.g., Ask the AI or tell it to ask you questions."
                        />
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
              <div className="sticky top-6 col-span-2 rounded-2xl border border-zinc-800 p-6">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">
                  Optimized AI Prompt Output
                </h2>
                <div
                  id="optimizedOutput"
                  className="rounded-md bg-zinc-900 p-6 font-mono text-sm whitespace-pre-wrap text-gray-200"
                >
                  Your optimized AI Teammate prompt will appear here after you
                  fill out the form and click "Generate AI Teammate Prompt."
                </div>
                <button
                  id="copyPrompt"
                  onClick={copyPromptToClipboard}
                  className="mt-4 w-full cursor-pointer rounded-md bg-[#CE008E] px-4 py-2 font-bold text-white uppercase transition-all duration-300 ease-in-out hover:bg-[rgba(206,0,142,0.8)] focus:ring-2 focus:ring-[#CE008E] focus:ring-offset-2 focus:outline-none"
                >
                  Copy Prompt
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Toaster />
    </>
  );
}
