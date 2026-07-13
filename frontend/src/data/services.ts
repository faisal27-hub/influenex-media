export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    description: 'End-to-end influencer campaigns designed around your goals — not just impressions. We handle strategy, creator sourcing, contracts, and reporting.',
    icon: '✦',
    features: ['Creator Sourcing & Vetting', 'Campaign Strategy', 'Contract Management', 'Performance Reporting'],
    color: 'blue',
  },
  {
    id: 'brand-collaborations',
    title: 'Brand Collaborations',
    description: 'Meaningful, long-form partnerships between brands and creators that build authentic relationships and drive sustained results over time.',
    icon: '◈',
    features: ['Brand-Creator Matching', 'Long-term Partnerships', 'Co-creation Campaigns', 'Brand Ambassador Programs'],
    color: 'cyan',
  },
  {
    id: 'creator-management',
    title: 'Creator Management',
    description: 'Full-service management for creators — from deal negotiations and brand partnerships to content strategy and audience growth.',
    icon: '⬡',
    features: ['Deal Negotiation', 'Content Strategy', 'Audience Growth', 'Brand Partnership Deals'],
    color: 'purple',
  },
  {
    id: 'instagram-campaigns',
    title: 'Instagram Campaigns',
    description: 'Visually stunning Instagram campaigns — Reels, Stories, Carousels and static posts — tailored for maximum engagement and brand awareness.',
    icon: '◉',
    features: ['Reels Strategy', 'Stories Campaigns', 'Carousel Content', 'Influencer Takeovers'],
    color: 'pink',
  },
  {
    id: 'youtube-campaigns',
    title: 'YouTube Campaigns',
    description: 'Long-form and Shorts campaigns on YouTube that convert — from sponsored integrations to dedicated reviews and tutorials.',
    icon: '▷',
    features: ['Sponsored Integrations', 'Dedicated Reviews', 'YouTube Shorts', 'Tutorial Content'],
    color: 'red',
  },
  {
    id: 'ugc-campaigns',
    title: 'UGC Campaigns',
    description: 'User-generated content at scale — authentic, creator-produced content that builds social proof and drives conversions without the studio budget.',
    icon: '◎',
    features: ['UGC Production', 'Social Proof Content', 'Ad Creative UGC', 'Testimonial Content'],
    color: 'amber',
  },
  {
    id: 'campaign-strategy',
    title: 'Campaign Strategy',
    description: 'Data-driven influencer strategies aligned to your funnel stage — awareness, consideration, or conversion. Every campaign starts with a plan.',
    icon: '◆',
    features: ['Market Research', 'Funnel Mapping', 'Creator Tier Planning', 'Budget Optimization'],
    color: 'teal',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    description: 'ROI-focused campaigns with trackable metrics. We measure what actually matters — clicks, signups, sales — not vanity metrics.',
    icon: '⚡',
    features: ['Conversion Tracking', 'Promo Code Campaigns', 'Affiliate Programs', 'Revenue Attribution'],
    color: 'green',
  },
];

export const serviceColorMap: Record<string, string> = {
  blue: 'from-blue-500/20 to-blue-600/5 border-blue-500/20 hover:border-blue-400/40',
  cyan: 'from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 hover:border-cyan-400/40',
  purple: 'from-violet-500/20 to-violet-600/5 border-violet-500/20 hover:border-violet-400/40',
  pink: 'from-pink-500/20 to-pink-600/5 border-pink-500/20 hover:border-pink-400/40',
  red: 'from-red-500/20 to-red-600/5 border-red-500/20 hover:border-red-400/40',
  amber: 'from-amber-500/20 to-amber-600/5 border-amber-500/20 hover:border-amber-400/40',
  teal: 'from-teal-500/20 to-teal-600/5 border-teal-500/20 hover:border-teal-400/40',
  green: 'from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 hover:border-emerald-400/40',
};
