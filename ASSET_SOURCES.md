# Asset sources

Only standalone figure files from the private LaTeX archive were exported. No complete manuscript page, author line, submission label, page number, or review material is present in `public/assets`.

| Public asset | Source in `references/NeurIPS_2026.zip` | Paper location | Processing |
|---|---|---|---|
| `public/assets/mulclip-pipeline.webp` | `NeurIPS_2026/figures/Mulclip_pipeline_final.pdf` | Main paper, Figure 3 (pipeline overview; manuscript page 5) | Rasterized the standalone, figure-bounds PDF to WebP at 2200 px width. |
| `public/assets/attention-localization.webp` | `NeurIPS_2026/figures/visualization_ablation.pdf` | Main paper, Figure 5 (qualitative attention maps; manuscript page 8) | Rasterized the standalone, figure-bounds PDF to WebP at 2200 px width. |
| `public/assets/ablation-designs.webp` | `NeurIPS_2026/figures/ablation_main.pdf` | Main paper, Figure 4 (ablation formulations; manuscript page 7) | Rasterized the standalone, figure-bounds PDF to WebP at 1800 px width. |

The manuscript page numbers above identify where each figure appears in the supplied internal PDF; they are provenance notes only. The source PDF remains under `references/`, which is ignored by Git.
