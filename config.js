// App configuration
const app = {
  id: 0,
  audioElement: null,
  musicVolume: 0.12,
  musicFadeIn: 4000,
  skippedIntro: false,
  brandDescription: ['ysl 4 life', 'ceo', 'steppa', 'btc', 'gov', 'vbin.cc', '3500', '💳'],
  effects: ['bounce', 'flash', 'pulse', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'],
  
  // Marquee configuration
  marquee: {
    speed: 30,
    width: 420
  },
  
  // Sparkle configuration
  sparkle: {
    colors: ['#ffffff', '#f0f0f0', '#e0e0e0'],
    size: {
      min: 1,  // Much smaller size
      max: 3   // Much smaller size
    },
    count: 5,
    speed: 700,
    distance: 15  // Reduced spread distance for slimmer stream
  }
};

// Define links for marquee
const links = [
  { name: 'my discord', link: 'discord.com/users/351685565093249024' },
  { name: 'spotify', link: 'open.spotify.com/user/31zp7thsea7wu7escobl2mcbhnsu' },
  { name: 'feds.lol', link: 'feds.lol/o' },
  { name: 'last.fm', link: 'www.last.fm/user/finessedfeds' },
  { name: 'github', link: 'github.com/projectings' }
];

// Title change sequence
const titles = ['g', 'go', 'gov', 'gov$'];