/** GitHub Pages の base パスを含むアセットURL */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

export const photos = {
  hero: asset("assets/miruhaia/photos/hero-office-conversation-4x5.jpg"),
  heroWide: asset("assets/miruhaia/photos/hero-office-conversation.jpg"),
  interview: asset("assets/miruhaia/photos/employee-interview-portrait-4x5.jpg"),
  interviewWide: asset("assets/miruhaia/photos/employee-interview-portrait.jpg"),
  smartphone: asset("assets/miruhaia/photos/employee-smartphone-portrait-4x5.jpg"),
  smartphoneWide: asset("assets/miruhaia/photos/employee-smartphone-portrait.jpg"),
  laptop: asset("assets/miruhaia/photos/employee-working-laptop-4x5.jpg"),
  laptopWide: asset("assets/miruhaia/photos/employee-working-laptop.jpg"),
  team: asset("assets/miruhaia/photos/team-collaboration-4x5.jpg"),
  teamWide: asset("assets/miruhaia/photos/team-collaboration.jpg"),
} as const;

export const logos = {
  primary: asset("assets/miruhaia/logo/miruhaia_logo_primary_outlined.svg"),
  tagline: asset("assets/miruhaia/logo/miruhaia_logo_tagline_outlined.svg"),
  symbol: asset("assets/miruhaia/logo/miruhaia_logo_symbol_outlined.svg"),
  primaryPng: asset("assets/miruhaia/logo/miruhaia_logo_primary_transparent.png"),
} as const;

export function iconAsset(name: string): string {
  return asset(`assets/miruhaia/icons/miruhaia_icon_${name}.svg`);
}

export function illustrationAsset(name: string): string {
  return asset(`assets/miruhaia/illustrations/miruhaia_illustration_${name}.svg`);
}

export function decorationAsset(name: string): string {
  return asset(`assets/miruhaia/decorations/miruhaia_decoration_${name}.svg`);
}
