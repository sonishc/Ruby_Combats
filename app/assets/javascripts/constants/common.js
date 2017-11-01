const NAVBAR_LINKS = [
  {
    url: '/',
    title: 'home'
  },
  {
    url: '/users/sign_in',
    title: 'sign_i'
  },
  {
    url: '/users/sign_up',
    title: 'sign_up'
  },
  {
    url: '/users/profile',
    title: 'profile'
  },
  {
    url: '/location/page',
    title: 'location'
  },
  {
    url: '/users/fight',
    title: 'fight'
  },
  {
    url: '/users/sign_out',
    title: 'sign_o'
  },
  {
    url: '/users/',
    title: 'dashboard'
  }
];

const NAVBAR_SPANS = ['icon-bar','icon-bar','icon-bar'];

const SITE_LOGO_IMG = '/assets/logo_nav.png';

const LOCALE = ['en','uk'];

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
    description:'Brutte forse is not a solution. Find a way to survive!',
    step: '1'
  },
  {
    img:locationImg[1],
    title:'Mad City',
    description:'Texas Chainsaw Massacre...',
    step: '2'
  },
  {
    img:locationImg[2],
    title:'Babylon',
    description:'Once united?...Homo homini lupus est',
    step: '3'
  },
  {
    img:locationImg[3],
    title:'Hello Kitty',
    description:'Japanese terror is not a joke at all!',
    step: '4'
  },
  { img:locationImg[4],
    title:'Rainy death',
    description:'Rainbow is waiting for you.',
    step: '6'
  },
  {
    img:locationImg[5],
    title:'Mountain Battle',
    description:'You should be completely insane to fight with giants!',
    step: '7'
  },
  {
    img:locationImg[6],
    title:'Piece and Harmony',
    description:'Let the Force be with you...',
    step: '8'
  },
  {
    img:locationImg[7],
    title:'Temple',
    description:'Be smart and quick...',
    step: '10'
  },
  {
    img:locationImg[8],
    title:'Bloody Moon',
    description:'Feel yourself a pirate, arr...',
    step: '11'
  },
  {
    img:locationImg[9],
    title:'Dragon Arena Fight',
    description:'No place for newbie here...',
    step: '12'
  }
];
