const NAVBAR_LINKS = [
  {
    url: '/',
    title: 'home',
    id: 'link_home'
  },
  {
    url: '/users/sign_in',
    title: 'sign_i',
    id: 'link_sign_in'
  },
  {
    url: '/users/',
    title: 'dashboard',
    id: 'link_dashboard'
  },
  {
    url: '/users/profile',
    title: 'profile',
    id: 'link_profile'
  },
  {
    url: '/location/page',
    title: 'location',
    id: 'link_location'
  },
  {
    url: '/users/fight',
    title: 'fight',
    id: 'link_fight'
  },
  {
    url: '/users/sign_out',
    title: 'sign_o',
    id: 'link_sign_out'
  }
];

const USER_CLASS_OPTION = [
      {
        title:"Select your Player type:", 
        option: ""
      },
      {
        title:"Magician", 
        option: "Magician"
      },
      {
        title:"Rogue", 
        option: "Rogue"
      },
      {
        title:"Warrior", 
        option: "Warrior"
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

const LEVELS_INFO = [
  {level: 1, experience_level: 50, health_point_level: 100},
  {level: 2, experience_level: 350, health_point_level: 600},
  {level: 3, experience_level: 666, health_point_level: 1000},
  {level: 4, experience_level: 1111, health_point_level: 2000},
  {level: 5, experience_level: 2222, health_point_level: 3000},
  {level: 6, experience_level: 3333, health_point_level: 4000},
  {level: 7, experience_level: 4444, health_point_level: 5000},
  {level: 8, experience_level: 5555, health_point_level: 6000},
  {level: 9, experience_level: 6666, health_point_level: 7000},
  {level: 10, experience_level: 7777, health_point_level: 8000},
  {level: 11, experience_level: 8888, health_point_level: 9000},
  {level: 12, experience_level: 10000, health_point_level: 10000}
];
