let list = [
  "https://upload-img.tvc-mall.com/uploads/272cf39b-646f-4285-84da-2a35d365818c.jpg",
  "https://upload-img.tvc-mall.com/uploads/3429912c-8429-463e-a27e-10c39e05f4fd.jpg",
  "https://upload-img.tvc-mall.com/uploads/5060b3b4-525e-4a7b-addc-9e8481947ab9.jpg",
  "https://upload-img.tvc-mall.com/uploads/f987c53a-b166-4fe3-95d0-69016463b562.jpg",
  "https://upload-img.tvc-mall.com/uploads/990fe78a-db80-4c00-bb08-8521d8e66a3d.jpg",
  "https://upload-img.tvc-mall.com/uploads/8f16a749-cd79-45cd-ac31-a6b8009be898.jpg",
];

let slider = document.getElementById("s-right");
let image = document.getElementById("image");
let img = document.createElement("img");
img.src = list[0];
img.style.width = "100%";
img.style.height = "80%";

image.append(img);

//    window.addEventListener("load", () => {
//         var i = 0;
//         setInterval(() => {
//           i < list.length - 1 ? i++ : (i = 0);
//           img.setAttribute("src", list[i]);
//         }, 3000);
//     });

var i = 0;
setInterval(function () {
  if (i == list.length) {
    i = 0;
  } else {
    img.src = list[i];
    i++;
  }
}, 3000);

let products = [
  {
    image: "https://img.tvc-mall.com/uploads/801100250A.jpg",
    name: "ORICO 2577U3 2.5 inch USB3.0 External Hard Drive Enclosur",
    p_price: 6.05,
  },
  {
    image: "https://img.tvc-mall.com/uploads/631500038A.jpg",
    name: "RHINOWALK Waterproof Top Tube Frame Bag Bicycle",
    p_price: 5.53,
  },
  {
    image: "https://img.tvc-mall.com/uploads/642700005A.jpg",
    name: "XIAOMI YOUPIN JORDAN&JUDY NV505 LED",
    p_price: 7.06,
  },
  {
    image: "https://img.tvc-mall.com/uploads/681200511A.jpg",
    name: "S08 Wireless Bluetooth Earphones Single Ear Hook IPX7",
    p_price: 8.57,
  },
];

//let jsonProducts = JSON.stringify(products)

localStorage.setItem("myProducts", JSON.stringify(products));

let Product = JSON.parse(localStorage.getItem("myProducts"));
console.log(Product);

function addProducts() {
  let p_place = document.getElementById("f-products");
  products.forEach(function (ele) {
    let div = document.createElement("div");
    div.style.cursor = "pointer";

    let image = document.createElement("img");
    image.src = ele.image;
    image.width = 195;
    image.height = 195;

    let p = document.createElement("p");
    p.innerHTML = ele.name;

    let p_price = document.createElement("p");
    p_price.innerHTML = "$" + ele.p_price;
    p_price.style.fontSize = "18px";
    p_price.style.marginTop = "10px";
    p_price.style.color = "rgb(234, 81, 27)";

    div.append(image, p, p_price);
    p_place.append(div);

    var img = ele.image;
    var n = ele.name;
    var pro = ele.p_price;
    div.addEventListener("click", function () {
      localStorage.setItem("ep_img", img);
      localStorage.setItem("ep_name", n);
      localStorage.setItem("ep_price", pro);
      window.location.href = "product.html";
    });
  });
}
addProducts();

//slider js starts here//
("use strict");

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

// slider js ends here//
