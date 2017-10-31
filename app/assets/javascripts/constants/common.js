const NAVBAR_LINKS = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/users/sign_in',
    title: 'Sign In'
  },
  {
    url: '/users/sign_up',
    title: 'Sign Up'
  },
  {
    url: '/persons/profile',
    title: 'Profile'
  },
  {
    url: '/location/page',
    title: 'Location'
  },
  {
    url: '/users/fight',
    title: 'Fight'
  },
  {
    url: '/users/sign_out',
    title: 'Sign Out'
  },
  {
    url: '/users/',
    title: 'Dashboard'
  }
];

const NAVBAR_SPANS = ['icon-bar','icon-bar','icon-bar'];

const SITE_LOGO_IMG = '/assets/logo_nav.png';

const imgUrl = {
  ['Trojan War']:'/assets/horse-theme.jpg',
  ['Mad City']:'/assets/mexico-fight.gif',
  ['Babylon']:'/assets/location-theme.jpg',
  ['Hello Kitty']:'/assets/madness-fight.gif',
  ['Rainy death']:'/assets/ruine-fight.gif',
  ['Mountain Battle']:'/assets/13.gif',
  ['Piece and Harmony']:'/assets/arena1.gif',
  ['Temple']:'/assets/arena2.gif',
  ['Bloody Moon']:'/assets/arena3.gif',
  ['Dragon Arena Fight']:'/assets/arena8.gif'
}

const locationImg = [
  '/assets/horse-theme.jpg',
  '/assets/mexico-fight.gif',
  '/assets/location-theme.jpg',
  '/assets/madness-fight.gif',
  '/assets/ruine-fight.gif',
  '/assets/13.gif',
  '/assets/arena1.gif',
  '/assets/arena2.gif',
  '/assets/arena3.gif',
  '/assets/arena8.gif'
];

const LIST_TO_GENERATE = [
  {
    img:locationImg[0],
    title:'Trojan War',
    description:'Brutte forse is not a solution. Find a way to survive!'
  },
  {
    img:locationImg[1],
    title:'Mad City',
    description:'Texas Chainsaw Massacre...'
  },
  {
    img:locationImg[2],
    title:'Babylon',
    description:'Once united?...Homo homini lupus est'
  },
  {
    img:locationImg[3],
    title:'Hello Kitty',
    description:'Japanese terror is not a joke at all!'
  },
  { img:locationImg[4],
    title:'Rainy death',
    description:'Rainbow is waiting for you.'
  },
  {
    img:locationImg[5],
    title:'Mountain Battle',
    description:'You should be completely insane to fight with giants!'
  },
  {
    img:locationImg[6],
    title:'Piece and Harmony',
    description:'Let the Force be with you...'
  },
  {
    img:locationImg[7],
    title:'Temple',
    description:'Be smart and quick...'
  },
  {
    img:locationImg[8],
    title:'Bloody Moon',
    description:'Feel yourself a pirate, arr...'
  },
  {
    img:locationImg[9],
    title:'Dragon Arena Fight',
    description:'No place for newbie here...'
  }
];
