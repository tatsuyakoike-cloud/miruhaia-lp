export const siteConfig = {
  brandName: "ミルハイア by CONNECTED MATERIAL",
  companyName: "CONNECTED MATERIAL",
  contactUrl: "",
  contactEmail: "",
  privacyPolicyUrl: "",
  canonicalUrl: "https://tatsuyakoike-cloud.github.io/miruhaia-lp/",
  taxLabel: "",
  analyticsId: "",
  campaign: {
    enabled: false,
    approved: false,
    regularSetupFeeYen: 150000,
    campaignSetupFeeYen: 0,
    expiresAt: "2026-08-31T23:59:59+09:00",
    reason: "新ブランド立ち上げに伴う導入事例づくりへの協力",
  },
} as const;

export function isCampaignActive(): boolean {
  if (!siteConfig.campaign.enabled || !siteConfig.campaign.approved) return false;
  return new Date() <= new Date(siteConfig.campaign.expiresAt);
}
