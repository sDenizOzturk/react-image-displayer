"use strict";(self.webpackChunkreact_image_displayer_doc=self.webpackChunkreact_image_displayer_doc||[]).push([[903],{4505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(4848),t=r(8453);const s={sidebar_position:1},a="React Image Displayer",l={id:"intro",title:"React Image Displayer",description:"An image loader React component that displays/mounts the image only after it is successfully loaded. It has three key features:",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/react-image-displayer/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/sDenizOzturk/react-image-displayer/tree/main/react-image-displayer-docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"DocumentationSidebar",next:{title:"Props & Types",permalink:"/react-image-displayer/docs/category/props--types"}},o={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:3},{value:"Usage - ItemDisplayer",id:"usage---itemdisplayer",level:3},{value:"Example - ItemDisplayer",id:"example---itemdisplayer",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"react-image-displayer",children:"React Image Displayer"}),"\n",(0,i.jsx)(n.p,{children:"An image loader React component that displays/mounts the image only after it is successfully loaded. It has three key features:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Built-in spinners: The built-in spinner is displayed while the image is loading. 20+ spinners could be used via ",(0,i.jsx)(n.a,{href:"https://www.davidhu.io/react-spinners/",children:"React Spinners"})," library."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Enter Animations: After the image is loaded, it appears with an enter animation. 10+ animations could be used via ",(0,i.jsx)(n.a,{href:"https://www.framer.com/motion/",children:"Framer Motion"})," library."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["JWT Support: ",(0,i.jsx)(n.code,{children:"<img>"})," tag does not support JWT authentication. However, using this component, they are fetched effortlessly by only passing the JWT token through the ",(0,i.jsx)(n.code,{children:"token"})," prop."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["Let's discover ",(0,i.jsx)(n.strong,{children:"React Image Displayer in less than 2 minutes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"Install react-image-displayer with via your package manager:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm i react-image-displayer\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"Import the component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import ImageDisplayer from 'react-image-displayer';\n"})}),"\n",(0,i.jsx)(n.p,{children:"Simply, use it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ImageDisplayer url={enterImageURLHere} />\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ImageDisplayer\r\n  url={imageUrl}\r\n  token={token}\r\n  delay={1000}\r\n  enterAnimation={['blur', 1]}\r\n  imageStyle={{\r\n    borderBottomLeftRadius: '11px',\r\n    borderBottomRightRadius: '11px',\r\n  }}\r\n  spinner={{\r\n    color: 'var(--color2)',\r\n    size: '1rem',\r\n    spinnerType: 'BeatLoader',\r\n  }}\r\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Result",src:r(2473).A+"",width:"852",height:"480"})}),"\n",(0,i.jsx)(n.h3,{id:"usage---itemdisplayer",children:"Usage - ItemDisplayer"}),"\n",(0,i.jsx)(n.p,{children:"Import the component:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"import { ItemDisplayer } from 'react-image-displayer';\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then, use it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"<ItemDisplayer>{/*Just put your item here... */}</ItemDisplayer>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example---itemdisplayer",children:"Example - ItemDisplayer"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const [loaded, setLoaded] = useState(false);\r\n\r\n  useEffect(() => {\r\n    setTimeout(() => {\r\n      setLoaded(true);\r\n    }, 4000);\r\n  });\r\n\r\n  return (\r\n    <div style={{ width: '50vw', margin: 'auto' }}>\r\n      <ItemDisplayer\r\n        loaded={loaded}\r\n        spinner={{\r\n          spinnerType: 'BeatLoader',\r\n          color: 'blue',\r\n        }}\r\n        enterAnimation={['fade', 2]}\r\n      >\r\n        <img\r\n          src=\"https://upload.wikimedia.org/wikipedia/commons/0/01/Grand_Canyon_Powell_Point_Evening_Light_02_2013.jpg\"\r\n          width=\"100%\"\r\n        />\r\n      </ItemDisplayer>\r\n    </div>\r\n  );\r\n/>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Result",src:r(1011).A+"",width:"970",height:"614"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1011:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/result-item-displayer-411f6ee99805c18f8c286f06f1e85f66.gif"},2473:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/result-66031c41fbab7121da896db25630b6c2.gif"},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var i=r(6540);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);