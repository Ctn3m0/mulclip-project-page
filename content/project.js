// CAMERA-READY CHECKLIST:
// Replace the placeholder authors, affiliations, links, contact, and BibTeX below.
// Keep this file as the single source of truth for changeable project metadata.
export const project = {
  title: "MulCLIP: A Multi-level Alignment Framework for Enhancing Fine-grained Long-context CLIP",
  shortTitle: "MulCLIP",
  venue: "NeurIPS 2026",
  status: "Project page preview",
  authors: ["Author One", "Author Two", "Author Three", "Additional authors to be announced"],
  affiliations: ["Institution One", "Institution Two"],
  contact: "Coming soon",
  links: [
    { label: "Paper", icon: "paper", url: null },
    { label: "Code", icon: "code", url: null },
    { label: "Models", icon: "model", url: null },
    { label: "Poster", icon: "poster", url: null },
    { label: "Video", icon: "video", url: null }
  ],
  tldr: "MulCLIP makes long-context CLIP fine-grained without region proposals by assigning a compatible learning signal to each textual granularity.",
  abstract: "Vision-language models such as CLIP excel at image–text alignment but struggle with long, detailed descriptions because they are trained mostly on short captions. MulCLIP is an end-to-end multi-level alignment framework that directly exploits the natural structure of long text—without region proposals. It combines global contrastive alignment for long captions and short summaries, Word–Patch Reconstruction over locally calibrated features for within-sample semantics, and Subcaption–Aggregated Patch alignment for context-rich grounding. Across benchmarks with different caption lengths, these complementary objectives improve long-context understanding while preserving short-text transfer.",
  claims: [
    { number: "01", title: "One level, one compatible signal", text: "Caption, subcaption, and word alignment are decoupled instead of competing inside one shared token objective." },
    { number: "02", title: "Fine-grained, proposal-free", text: "Localized correspondences emerge from patch–word reconstruction and subcaption-guided aggregation—no segmentation pipeline required." },
    { number: "03", title: "Long-context gains that transfer", text: "The complete objective improves long-caption retrieval while remaining strong on short-caption retrieval and zero-shot classification." }
  ],
  levels: [
    { tag: "Caption", name: "Global alignment", scope: "Across the batch", color: "violet", description: "Align the global image token with both the full long caption and a short summary.", equation: "ℒglobal = ℒbatch(vcls, tlong) + ½ℒbatch(vcls, tshort)" },
    { tag: "Word / phrase", name: "WPR", scope: "Within each sample", color: "coral", description: "Reconstruct calibrated visual and textual tokens through bidirectional attention, then contrast matching pairs.", equation: "ℒWord = ℒrecon,image(v′, V′) + ℒrecon,text(t′, T′)" },
    { tag: "Subcaption", name: "SAP", scope: "Across the batch", color: "teal", description: "Use each sentence embedding to aggregate its relevant patches and contrast the resulting region with that sentence.", equation: "ℒSub = 1/M ∑ᵢ ℒbatch(v̄ⁱ, tsub,i)" }
  ],
  results: {
    highlights: [
      { value: "76.67", unit: "Avg R@1", label: "Long-caption retrieval", detail: "ViT-B/16 · DOCCI fine-tune" },
      { value: "+5.0", unit: "pts", label: "Cross-domain T2I", detail: "DOCCI→DCI vs. GOAL · ViT-B/16" },
      { value: "60.65", unit: "%", label: "Classification average", detail: "4 zero-shot datasets · ViT-B/16" }
    ],
    longRetrieval: [
      { method: "Global only", urban: 76.05, dci: 64.45, docci: 80.50, average: 73.67 },
      { method: "W/o SAP", urban: 77.25, dci: 64.75, docci: 79.75, average: 73.92 },
      { method: "W/o WPR", urban: 76.55, dci: 66.00, docci: 82.25, average: 74.93 },
      { method: "MulCLIP", urban: 80.65, dci: 68.10, docci: 81.25, average: 76.67, best: true },
      { method: "MulCLIP w/ CLIM", urban: 73.55, dci: 63.40, docci: 77.85, average: 71.60 }
    ],
    classification: [
      { dataset: "CIFAR-10", goal: 84.95, mulclip: 86.33 },
      { dataset: "CIFAR-100", goal: 55.41, mulclip: 60.34 },
      { dataset: "ImageNet-O", goal: 42.15, mulclip: 43.80 },
      { dataset: "ImageNet-V2", goal: 49.85, mulclip: 52.13 }
    ]
  },
  bibtex: "Coming soon — citation metadata will be added with the camera-ready release."
};
