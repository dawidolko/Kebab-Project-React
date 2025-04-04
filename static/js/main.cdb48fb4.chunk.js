(this["webpackJsonpreact-kebab-v1"]=this["webpackJsonpreact-kebab-v1"]||[]).push([[0],{37:function(e,t,r){"use strict";r.r(t);var i=r(0),n=r.n(i),a=r(18),o=r.n(a),c=r(2),d=r(8),s=r(9);const l=c.b.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`,b=Object(c.b)(d.c)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`,p=c.b.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`,h=Object(c.b)(s.e)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;var f=r(1);var m=e=>{let{toggle:t}=e;return Object(f.jsx)("div",{children:Object(f.jsxs)(l,{children:[Object(f.jsx)(b,{to:"/",children:"Kebab"}),Object(f.jsxs)(p,{onClick:t,children:[Object(f.jsx)("p",{children:"Menu"}),Object(f.jsx)(h,{})]})]})})};const x=c.b.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #2c1a0f;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${e=>{let{isOpen:t}=e;return t?"0":"-1000px"}};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`,g=Object(c.b)(s.c)`
  color: #f8e9d2;
`,j=c.b.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`,u=c.b.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`,w=Object(c.b)(d.b)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fce8d5;
  cursor: pointer;

  &:hover {
    color: #d2691e;
    transition: 0.2s ease-in-out;
  }
`,O=c.b.div`
  display: flex;
  justify-content: center;
`,v=Object(c.b)(d.b)`
  background: #d2691e;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #f8e9d2;
    color: #2c1a0f;
  }
`;var y=e=>{let{isOpen:t,toggle:r}=e;return Object(f.jsxs)(x,{isOpen:t,onClick:r,children:[Object(f.jsx)(j,{onClick:r,children:Object(f.jsx)(g,{})}),Object(f.jsxs)(u,{children:[Object(f.jsx)(w,{to:"/",children:"Kebab"}),Object(f.jsx)(w,{to:"/",children:"Desserts"}),Object(f.jsx)(w,{to:"/",children:"Full Menu"})]}),Object(f.jsx)(O,{children:Object(f.jsx)(v,{to:"/",children:"Order Now"})})]})},k=r.p+"static/media/kebab-3.82d2c748.png";const z=c.b.div`
  background: linear-gradient(
      to right,
      rgba(30, 20, 10, 0.7),
      rgba(80, 40, 20, 0.1)
    ),
    url(${k});
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
`,C=c.b.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`,K=c.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`,$=c.b.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #d2691e; /* Spicy warm brown */
  letter-spacing: 3px;
  color: #f8e9d2; /* Warm sandy beige */
`,S=c.b.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: #fce8d5;
`,D=c.b.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #d2691e; /* Spicy brown */
  color: #fff;
  transition: 0.3s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222; /* Chili red */
    color: #fff;
    cursor: pointer;
  }
`;var F=()=>{const[e,t]=Object(i.useState)(!1),r=()=>{t(!e)};return Object(f.jsxs)(z,{children:[Object(f.jsx)(m,{toggle:r}),Object(f.jsx)(y,{isOpen:e,toggle:r}),Object(f.jsx)(C,{children:Object(f.jsxs)(K,{children:[Object(f.jsx)($,{children:"Greatest Kebab Ever"}),Object(f.jsx)(S,{children:"Ready in 20 minutes"}),Object(f.jsx)(D,{children:"Place Order"})]})})]})};const T=c.a`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }
    
  html, body {
    overflow-x: hidden;
  }
`,A=c.b.div`
  width: 100vw;
  min-height: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #2c1a0f;
  color: #fff;
`,P=c.b.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`,L=c.b.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`,B=c.b.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #d2691e;
`,M=c.b.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #f8e9d2;
`,_=c.b.h2`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff2e6;
`,I=c.b.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`,J=c.b.p`
  margin-bottom: 1rem;
  color: #fce8d5;
`,R=c.b.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  color: #ffc26f;
`,W=c.b.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #d2691e;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222;
    color: #fff;
    cursor: pointer;
  }
`;var E=e=>{let{heading:t,data:r}=e;return Object(f.jsxs)(A,{children:[Object(f.jsx)(M,{children:t}),Object(f.jsx)(P,{children:r.map(((e,t)=>Object(f.jsxs)(L,{children:[Object(f.jsx)(B,{src:e.img,alt:e.alt}),Object(f.jsxs)(I,{children:[Object(f.jsx)(_,{children:e.name}),Object(f.jsx)(J,{children:e.desc}),Object(f.jsx)(R,{children:e.price}),Object(f.jsx)(W,{children:e.button})]})]},t)))})]})},G=r.p+"static/media/product-1.0812f6fc.jpg",N=r.p+"static/media/product-2.2c76dbdc.jpg",Y=r.p+"static/media/product-3.f10cc721.jpg",q=r.p+"static/media/sweet3.c495c742.jpg",H=r.p+"static/media/sweet-2.d5cf1ad2.jpg",Q=r.p+"static/media/sweet-3.badeecbe.jpg";const U=[{img:G,alt:"Kebab",name:"Classic Lamb Kebab",desc:"Tender lamb meat wrapped in flatbread with lettuce, tomato, onion, and garlic sauce",price:"$12.99",button:"Add to Cart"},{img:N,alt:"Kebab",name:"Chicken Kebab Wrap",desc:"Grilled chicken pieces with fresh vegetables and spicy yogurt sauce in a warm wrap",price:"$11.49",button:"Add to Cart"},{img:Y,alt:"Kebab",name:"Falafel Plate",desc:"Crispy falafel balls served with hummus, salad, pickles, and warm pita bread",price:"$10.99",button:"Add to Cart"}],V=[{img:H,alt:"Baklava",name:"Baklava Delight",desc:"Layers of phyllo dough filled with chopped nuts and sweetened with honey syrup",price:"$5.99",button:"Add to Cart"},{img:Q,alt:"Rice Pudding",name:"Creamy Rice Pudding",desc:"Traditional Turkish-style rice pudding with a hint of cinnamon and vanilla",price:"$4.99",button:"Add to Cart"},{img:q,alt:"Date Cake",name:"Sticky Date Cake",desc:"Moist date cake served with caramel sauce and crushed walnuts",price:"$6.49",button:"Add to Cart"}];var X=r.p+"static/media/featured3.e62492ae.jpg";const Z=c.b.div`
  background: linear-gradient(
      to right,
      rgba(30, 20, 10, 0.7),
      rgba(80, 40, 20, 0.1)
    ),
    url(${X});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  width: 100%;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: #f8e9d2; /* Warm sand/beige tone */
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    margin-bottom: 1rem;
    color: #fce8d5; /* Lighter warm tone */
  }
`,ee=c.b.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #d2691e; /* Spicy kebab brown */
  color: #fff;
  transition: 0.3s ease-out;
  border-radius: 4px;

  &:hover {
    background: #b22222; /* Deep chili red */
    color: #fff;
    cursor: pointer;
  }
`;var te=()=>Object(f.jsxs)(Z,{children:[Object(f.jsx)("h1",{children:"Kebab of the Day"}),Object(f.jsx)("p",{children:"Juicy lamb kebab served with hummus, fresh veggies, and our signature garlic sauce"}),Object(f.jsx)(ee,{children:"Order Now"})]});const re=c.b.footer`
  width: 100%;
  background-color: #0d0909;
`,ie=c.b.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`,ne=c.b.section`
  max-width: 1300px;
  width: 100%;
`,ae=c.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`,oe=Object(c.b)(d.b)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`,ce=c.b.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`,de=c.b.a`
  color: #fff;
  font-size: 24px;
  transition: color 0.3s ease-out;

  &:hover {
    color: #d2691e;
  }
`;var se=()=>Object(f.jsx)(re,{children:Object(f.jsx)(ie,{children:Object(f.jsx)(ne,{children:Object(f.jsxs)(ae,{children:[Object(f.jsx)(oe,{to:"/",children:"Kebab"}),Object(f.jsxs)(ce,{children:[Object(f.jsx)(de,{href:"/",target:"_blank","aria-label":"Facebook",rel:"noopener",noreferrer:!0,children:Object(f.jsx)(s.a,{})}),Object(f.jsx)(de,{href:"/",target:"_blank","aria-label":"Twitter",rel:"noopener",noreferrer:!0,children:Object(f.jsx)(s.d,{})}),Object(f.jsx)(de,{href:"/",target:"_blank","aria-label":"Instagram",rel:"noopener",noreferrer:!0,children:Object(f.jsx)(s.b,{})}),Object(f.jsx)(de,{href:"/",target:"_blank","aria-label":"Youtube",rel:"noopener",noreferrer:!0,children:Object(f.jsx)(s.f,{})})]})]})})})});var le=function(){return Object(f.jsxs)(d.a,{children:[Object(f.jsx)(T,{}),Object(f.jsx)(F,{}),Object(f.jsx)(E,{heading:"Choose your favorite",data:U}),Object(f.jsx)(te,{}),Object(f.jsx)(E,{heading:"Sweet Treats for You",data:V}),Object(f.jsx)(se,{})]})};var be=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,38)).then((t=>{let{getCLS:r,getFID:i,getFCP:n,getLCP:a,getTTFB:o}=t;r(e),i(e),n(e),a(e),o(e)}))};o.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(le,{})}),document.getElementById("root")),be()}},[[37,1,2]]]);
//# sourceMappingURL=main.cdb48fb4.chunk.js.map