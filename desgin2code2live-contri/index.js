const url =
  "https://api.github.com/repos/lmas3009/design2code2live/contributors";

const getData = async () => {
  var usergrid = document.getElementById("usergrid");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        data.map((item)=>{
            var flex = document.createElement("div")
            flex.className = "flex flex-col items-center justify-center gap-2"
            var grid = document.createElement("div")
            grid.style.height = "100px"
            grid.style.width = "100px"
            grid.style.borderRadius = "100%"
            grid.style.backgroundColor= "white"
            var img = document.createElement("img")
            img.src = item.avatar_url
            img.style.borderRadius = "100%"
            grid.appendChild(img)
            flex.appendChild(grid)
            var text = document.createElement("a")
            text.innerHTML = item.login
            text.href = item.html_url
            text.target = "_blank"
            text.style.color = "white"
            flex.appendChild(text)
            usergrid.appendChild(flex)
        })
    });
};

getData();