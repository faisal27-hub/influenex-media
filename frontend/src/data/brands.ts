// Brand partners from the existing influnexmedia.com marquee
export interface Brand {
  name: string;
  displayName: string;
  url: string;
  logo: string;
}

export const brands: Brand[] = [
  { name: 'Emergent.sh', displayName: 'Emergent', url: 'https://app.emergent.sh/home?via=tarang', logo: '/brands/emergent.png' },
  { name: 'Packify', displayName: 'Packify', url: 'https://www.packify.ai/', logo: '/brands/packify.png' },
  { name: 'Pacdora', displayName: 'Pacdora', url: 'https://www.pacdora.com/', logo: '/brands/pacdora.png' },
  { name: 'Meshy.ai', displayName: 'Meshy AI', url: 'https://www.meshy.ai/', logo: '/brands/meshy.png' },
  { name: 'Suno', displayName: 'Suno', url: 'https://suno.com/', logo: '/brands/suno.png' },
];
