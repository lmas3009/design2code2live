const url =
  "https://api.github.com/repos/lmas3009/design2code2live/forks";

const getData2023 = async () => {
  var usergrid = document.getElementById("usergrid1");
  // let contr =
  //   "lmas3009,AayushBiswas,Nainish-Rai,abhayanand08,suprity04,manipta,kkartik07,KrishnaChaitanya1822,pratiksrivastava01,sumitmaithani123,SahilJin123,Amarjit-Khan,Anurag-Singh-04,Esha-01,mundadapurva,Anand-shreya,fallen-ecstasy,AnkitMajee,dissyulina,gabrielsozinho,GeorgeET15,Gurdeep99,NyanCyanide,HimangsKalita,lakshyaagr1105,raazseth,Sahilbal,shraddha15-creator,tanitoluwam,soumali28";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        if (item.updated_at.split("T")[0] === "2023-10-01") {
          var flex = document.createElement("div");
          flex.className = "flex flex-col items-center justify-center gap-2";
          var grid = document.createElement("div");
          grid.style.height = "100px";
          grid.style.width = "100px";
          grid.style.borderRadius = "100%";
          grid.style.backgroundColor = "white";
          var img = document.createElement("img");
          img.src = item.owner.avatar_url;
          img.style.borderRadius = "100%";
          grid.appendChild(img);
          flex.appendChild(grid);
          var text = document.createElement("a");
          text.innerHTML = item.owner.login;
          text.href = item.owner.html_url;
          text.target = "_blank";
          text.style.color = "white";
          flex.appendChild(text);
          usergrid.appendChild(flex);
        }
      });
    });
};
getData2023();

const getData = async (contributers) => {
  contributers.map((item) => {
    var flex = document.createElement("div");
    flex.className = "flex flex-col items-center justify-center gap-2";
    var grid = document.createElement("div");
    grid.style.height = "100px";
    grid.style.width = "100px";
    grid.style.borderRadius = "100%";
    grid.style.backgroundColor = "white";
    var img = document.createElement("img");
    img.src = item.src;
    img.style.borderRadius = "100%";
    grid.appendChild(img);
    flex.appendChild(grid);
    var text = document.createElement("a");
    text.innerHTML = item.innerHTML;
    text.href = item.href;
    text.target = "_blank";
    text.style.color = "white";
    flex.appendChild(text);
    usergrid.appendChild(flex);
  });
};

// 2022 Contributers
let contributers = [
  {
    src: "https://avatars.githubusercontent.com/u/60876387?v=4",
    innerHTML: "lmas3009",
    href: "https://github.com/lmas3009",
  },
  {
    src: "https://avatars.githubusercontent.com/u/70165265?v=4",
    innerHTML: "AayushBiswas",
    href: "https://github.com/AayushBiswas",
  },
  {
    src: "https://avatars.githubusercontent.com/u/109546113?v=4",
    innerHTML: "Nainish-Rai",
    href: "https://github.com/Nainish-Rai",
  },
  {
    src: "https://avatars.githubusercontent.com/u/84535835?v=4",
    innerHTML: "abhayanand08",
    href: "https://github.com/abhayanand08",
  },
  {
    src: "https://avatars.githubusercontent.com/u/78499902?v=4",
    innerHTML: "suprity04",
    href: "https://github.com/suprity04",
  },
  {
    src: "https://avatars.githubusercontent.com/u/72307020?v=4",
    innerHTML: "manipta",
    href: "https://github.com/manipta",
  },
  {
    src: "https://avatars.githubusercontent.com/u/87076033?v=4",
    innerHTML: "kkartik07",
    href: "https://github.com/kkartik07",
  },
  {
    src: "https://avatars.githubusercontent.com/u/113170588?v=4",
    innerHTML: "KrishnaChaitanya1822",
    href: "https://github.com/KrishnaChaitanya1822",
  },
  {
    src: "https://avatars.githubusercontent.com/u/92784294?v=4",
    innerHTML: "pratiksrivastava01",
    href: "https://github.com/pratiksrivastava01",
  },
  {
    src: "https://avatars.githubusercontent.com/u/110816714?v=4",
    innerHTML: "sumitmaithani123",
    href: "https://github.com/sumitmaithani123",
  },
  {
    src: "https://avatars.githubusercontent.com/u/107670763?v=4",
    innerHTML: "SahilJin123",
    href: "https://github.com/SahilJin123",
  },
  {
    src: "https://avatars.githubusercontent.com/u/98657673?v=4",
    innerHTML: "Amarjit-Khan",
    href: "https://github.com/Amarjit-Khan",
  },
  {
    src: "https://avatars.githubusercontent.com/u/97782687?v=4",
    innerHTML: "Anurag-Singh-04",
    href: "https://github.com/Anurag-Singh-04",
  },
  {
    src: "https://avatars.githubusercontent.com/u/98593600?v=4",
    innerHTML: "Esha-01",
    href: "https://github.com/Esha-01",
  },
  {
    src: "https://avatars.githubusercontent.com/u/84332986?v=4",
    innerHTML: "mundadapurva",
    href: "https://github.com/mundadapurva",
  },
  {
    src: "https://avatars.githubusercontent.com/u/106630585?v=4",
    innerHTML: "Anand-shreya",
    href: "https://github.com/Anand-shreya",
  },
  {
    src: "https://avatars.githubusercontent.com/u/43075899?v=4",
    innerHTML: "fallen-ecstasy",
    href: "https://github.com/fallen-ecstasy",
  },
  {
    src: "https://avatars.githubusercontent.com/u/76817118?v=4",
    innerHTML: "AnkitMajee",
    href: "https://github.com/AnkitMajee",
  },
  {
    src: "https://avatars.githubusercontent.com/u/80319559?v=4",
    innerHTML: "dissyulina",
    href: "https://github.com/dissyulina",
  },
  {
    src: "https://avatars.githubusercontent.com/u/90806505?v=4",
    innerHTML: "gabrielsozinho",
    href: "https://github.com/gabrielsozinho",
  },
  {
    src: "https://avatars.githubusercontent.com/u/72024420?v=4",
    innerHTML: "GeorgeET15",
    href: "https://github.com/GeorgeET15",
  },
  {
    src: "https://avatars.githubusercontent.com/u/54788334?v=4",
    innerHTML: "Gurdeep99",
    href: "https://github.com/Gurdeep99",
  },
  {
    src: "https://avatars.githubusercontent.com/u/84673594?v=4",
    innerHTML: "NyanCyanide",
    href: "https://github.com/NyanCyanide",
  },
  {
    src: "https://avatars.githubusercontent.com/u/51876341?v=4",
    innerHTML: "HimangsKalita",
    href: "https://github.com/HimangsKalita",
  },
  {
    src: "https://avatars.githubusercontent.com/u/95195831?v=4",
    innerHTML: "lakshyaagr1105",
    href: "https://github.com/lakshyaagr1105",
  },
  {
    src: "https://avatars.githubusercontent.com/u/37039751?v=4",
    innerHTML: "raazseth",
    href: "https://github.com/raazseth",
  },
  {
    src: "https://avatars.githubusercontent.com/u/114430429?v=4",
    innerHTML: "Sahilbal",
    href: "https://github.com/Sahilbal",
  },
  {
    src: "https://avatars.githubusercontent.com/u/66071175?v=4",
    innerHTML: "shraddha15-creator",
    href: "https://github.com/shraddha15-creator",
  },
  {
    src: "https://avatars.githubusercontent.com/u/91630659?v=4",
    innerHTML: "tanitoluwam",
    href: "https://github.com/tanitoluwam",
  },
  {
    src: "https://avatars.githubusercontent.com/u/66300439?v=4",
    innerHTML: "soumali28",
    href: "https://github.com/soumali28",
  },
];

getData(contributers);
