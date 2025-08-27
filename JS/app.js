const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
document.head.appendChild(fontLink);
const elDiv = document.createElement("div");

elDiv.style.cssText = `
width: 1110px;
height: 585px;
background-color: #F2F2F2;
padding: 124px 165px;
position:relative;
`;

const elh1 = document.createElement("h1");
elh1.textContent = "Advanced Statistics";
elh1.style.cssText = `

font-family: 'Poppins', sans-serif;
font-weight: 700;
width: 540px;
height: 48px;
padding-left:450px;
padding-top:24px
`;
elDiv.appendChild(elh1);
const elP = document.createElement("p");
elP.style.cssText = `
font-size:15px;
font-family: 'Poppins', sans-serif;
width:540px;
height:64px;
padding-left:370px;
color:#9E9AA8

`;
elP.textContent =
  "Track how your links are performing across the web with our advanced statistics dashboard.";
elDiv.appendChild(elP);
const parentDiv = document.createElement("div");
parentDiv.style.cssText = `
font-family: 'Poppins', sans-serif;
display:flex;
position:relative;
z-index: 100;
width:1110px;
height:399px;
padding-top: 56px;
`;
const elDivM = document.createElement("div");
elDivM.style.cssText = `
background-color: white;
width:350px;
height:311px;
margin-right:30px;
border-radius:5px;
`;
const img1 = document.createElement("img");
img1.style.cssText = `
padding-top: 0px;
padding-left: 32px;

`;
img1.src = "Images/aylana.svg";
elDivM.appendChild(img1);
const img11 = document.createElement("img");
img11.style.cssText = `

position:absolute;
top:77px;
left:56px;`;
img11.src = "Images/statistika.svg";
elDivM.appendChild(img11);
const title1 = document.createElement("h2");
title1.style.cssText = `
font-size:22px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:209px;
height:33px;
`;
title1.textContent = "Brand Recognition";
elDivM.appendChild(title1);
const text1 = document.createElement("p");
text1.style.cssText = `
color:#9E9AA8;
font-size:15px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:286px;
height:104px;
`;
text1.textContent =
  "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.";
elDivM.appendChild(text1);
parentDiv.appendChild(elDivM);

const elDivM2 = document.createElement("div");
elDivM2.style.cssText = `
margin-top:44px;

background-color: white;
width:350px;
height:311px;
margin-right:30px;
border-radius:5px;
`;
const img2 = document.createElement("img");
img2.style.cssText = `
padding-top: 0px;
padding-left: 32px;`;
img2.src = "Images/aylana.svg";
elDivM2.appendChild(img2);
const img21 = document.createElement("img");
img21.style.cssText = `
position:absolute;
top:125px;
left:435px;
`;
img21.src = "Images/tezlik.svg";
elDivM2.appendChild(img21);
const title2 = document.createElement("h2");
title2.style.cssText = `
font-size:22px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:192px;
height:33px;
`;
title2.textContent = "Detailed Records";
elDivM2.appendChild(title2);
const text2 = document.createElement("p");
text2.style.cssText = `
color:#9E9AA8;
font-size:15px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:286px;
height:104px;
`;
text2.textContent =
  "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.";
elDivM2.appendChild(text2);
parentDiv.appendChild(elDivM2);

const elDivM3 = document.createElement("div");
elDivM3.style.cssText = `
margin-top:88px;
background-color: white;
width:350px;
height:311px;
border-radius:5px;
`;
const img3 = document.createElement("img");
img3.style.cssText = `
padding-top: 0px;
padding-left: 32px;`;
img3.src = "Images/aylana.svg";
elDivM3.appendChild(img3);
const img31 = document.createElement("img");
img31.style.cssText = `
position:absolute;
top:164px;
left:810px;
`;
img31.src = "Images/qalam.svg";
elDivM3.appendChild(img31);
const title3 = document.createElement("h2");
title3.style.cssText = `
font-size:22px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:216px;
height:33px;
`;
title3.textContent = "Fully Customizable";
elDivM3.appendChild(title3);
const text3 = document.createElement("p");
text3.style.cssText = `
color:#9E9AA8;
font-size:15px;
font-family: 'Poppins', sans-serif;
padding-top:12px;
padding-left:32px;
width:286px;
height:104px;
`;
text3.textContent =
  "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.";
elDivM3.appendChild(text3);
parentDiv.appendChild(elDivM3);
elDiv.appendChild(parentDiv);

const line = document.createElement("img");
line.style.cssText = `
top:550px;
position:absolute;
z-index:1;
`;
line.src = "Images/line.svg";
elDiv.appendChild(line);
document.body.appendChild(elDiv);
