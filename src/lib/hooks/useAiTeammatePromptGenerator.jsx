import { useState } from "react";

const useAiTeammatePromptGenerator = () => {
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [showCopyButton, setShowCopyButton] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    let promptString = "AI Teammate Prompt Configuration:\n\n";

    // Step 1 - AI Teammate's Superpower
    if (data.aiRole || data.aiMission) {
      promptString += "## AI Teammate's Superpower (Role & Goal)\n";
      if (data.aiRole) {
        promptString += `**Role:** ${data.aiRole}\n`;
      }
      if (data.aiMission) {
        promptString += `**Mission:** ${data.aiMission}\n`;
      }
      promptString += "\n";
    }

    // Step 2 - Team Introduction
    if (data.humanHopesHeadaches) {
      promptString += "## Team Introduction (Who They're Helping)\n";
      promptString += `**What they need help with (Goals & Challenges):** ${data.humanHopesHeadaches}\n\n`;
    }

    // Step 3 - Context & Background
    if (data.companyInfo || data.productBlueprints || data.otherUsefulInfo) {
      promptString += "## Context & Background\n";
      if (data.companyInfo) {
        promptString += `**Company Info:** ${data.companyInfo}\n`;
      }
      if (data.productBlueprints) {
        promptString += `**Product Blueprints:** ${data.productBlueprints}\n`;
      }
      if (data.otherUsefulInfo) {
        promptString += `**Other Useful Info:** ${data.otherUsefulInfo}\n`;
      }
      promptString += "\n";
    }

    // Step 4 - Rules & Constraints
    // Since "Honesty: Always be truthful" will always be included,
    // the "Rules & Constraints" section will always be relevant.
    promptString += "## Rules & Constraints\n";

    if (data.communicationStyle) {
      promptString += `**Communication Style:** ${data.communicationStyle}\n`;
    }
    if (data.unknownResponse) {
      promptString += `**Unknown Response Handling:** ${data.unknownResponse}\n`;
    }

    // Always include Honesty as "Always be truthful"
    promptString += `**Be direct, clear, and honest — no fluff, no hedging, no sugarcoating. Prioritize usefulness over politeness.\n`;

    if (data.workStyle) {
      promptString += `**Work Style:** ${data.workStyle}\n`;
    }
    promptString += "\n"; // Ensure a newline after the rules section

    // Step 5 - The Actual Prompt!
    if (
      data.specificMission ||
      data.examples ||
      data.moreIdeas ||
      data.unclearHandling
    ) {
      promptString += "## The Actual Prompt!\n";
      if (data.specificMission) {
        promptString += `**Specific Mission:** ${data.specificMission}\n`;
      }
      if (data.examples) {
        promptString += `**Examples:** ${data.examples}\n`;
      }
      if (data.moreIdeas) {
        promptString += `**Ask for More Ideas:** ${data.moreIdeas}\n`;
      }
      if (data.unclearHandling) {
        promptString += `**Unclear Handling:** ${data.unclearHandling}\n`;
      }
    }

    // Add the new line at the very end of the prompt string
    promptString += "Ask me any questions to optimize my AI teammate\n";
    // Update state with the generated prompt
    setGeneratedPrompt(promptString);
    // Show the copy button
    setShowCopyButton(true);
  };

  // Return the state and handler for the component to use
  return { generatedPrompt, showCopyButton, handleSubmit };
};

export default useAiTeammatePromptGenerator;
