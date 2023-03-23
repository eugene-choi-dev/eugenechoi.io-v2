import Home from "./views/Home.js";
import Projects from "./views/Projects.js";
import Process from "./views/Process.js";
import Info from "./views/Info.js";
import Contact from "./views/Contact.js";

// --- SPA Navigation/Routing ---> //
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/home", view: Home },
    { path: "/projects", view: Projects },
    { path: "/process", view: Process },
    { path: "/info", view: Info },
    { path: "/contact", view: Contact },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});

// <--- SPA Navigation/Routing --- //

// --- Splash ---> //

const splash = document.getElementById("Splash");

var removeSplash = function () {
  splash.remove();
};
window.onload = function () {
  setTimeout(removeSplash, 1800);
};

// <--- Splash --- //

// --- Three.js Background ---> //
import * as THREE from 'three';
import discUrl from "../../assets/disc.png";

// Scene //
const scene = new THREE.Scene();
const sprite = new THREE.TextureLoader().load(discUrl);

// Mesh //
const geometry = new THREE.SphereGeometry(3, 100, 100);
const material = new THREE.PointsMaterial({
  size: 0.03,
  color: 0x303030,
  map: sprite,
  alphaTest: 0.5,
});
const mesh = new THREE.Points(geometry, material);
mesh.position.x = 1.4;
mesh.position.y = 0.8;
mesh.rotation.x = 15.2;
scene.add(mesh);

// Window Sizes //
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Light //
const light = new THREE.AmbientLight(0xfffff, 1, 100);
scene.add(light);

// Camera //
const camera = new THREE.PerspectiveCamera(
  45,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 5;
scene.add(camera);

// Renderer //
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(2);
renderer.setClearColor(0xffffff, 0);
renderer.render(scene, camera);

// OrbitControls Auto Rotate //
const controls = new OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.025;

// Resize //
window.addEventListener("resize", () => {
  // Update Sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // Update Camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();

// <--- Three.js Background --- //

// --- Light Switch ---> //

const page = document.getElementById("Page");
const lightSwitchLight = document.getElementsByClassName("light-switch-light");
const lightSwitchDark = document.getElementsByClassName("light-switch-dark");

const isLight = () => {
  page.classList.remove("is-dark");
  page.classList.add("is-light");
  lightSwitchDark[0].classList.remove("active-button");
  lightSwitchLight[0].classList.add("active-button");
};

const isDark = () => {
  page.classList.remove("is-light");
  page.classList.add("is-dark");
  lightSwitchDark[0].classList.add("active-button");
  lightSwitchLight[0].classList.remove("active-button");
};

// default to light mode //
document.addEventListener("load", isLight());

lightSwitchLight[0].addEventListener("click", isLight);
lightSwitchDark[0].addEventListener("click", isDark);

// <--- Light Switch --- //

// --- Active Nav Link/Getting Pages Using Fetch ---> //

const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const main = document.querySelector("main");

Array.from(navLinks).forEach((navLink, index) => {
//   const fetchPage = (event) => {
//     event.preventDefault();
//     const url = `pages/${navLink.dataset.pages}.html`;
//     setTimeout(function () {
//       fetch(url)
//         .then(function (response) {
//           return response.text();
//         })
//         .then(function (data) {
//           main.innerHTML = data;
//           setTimeout(function () {
//             main.classList.add("active");
//           }, 50);
//         });
//     }, 500);
//   };

  const removeCurrentActive = () => {
    for (let navItem of navItems) {
      navItem.classList.remove("active");
    }
    main.classList.remove("active");
  };

  const activateNavItem = () => {
    navItems[index].classList.add("active");
  };

  navLink.addEventListener("click", () => {
    removeCurrentActive();
    activateNavItem();
    main.classList.add("active");
  });

//   navLink.addEventListener("click", fetchPage); // does not work when wrapped in anonymous function
});

const homeNavActiveOnLoad = () => {
  navItems[0].classList.add("active");
};

// const fetchHomeOnLoad = () => {
//   fetch("pages/home.html")
//     .then(function (response) {
//       return response.text();
//     })
//     .then(function (data) {
//       main.innerHTML = data;
//       main.classList.add("active");
//     });
// };

const homeActiveOnLoad = () => {
  main.classList.add("active");
};

document.addEventListener("load", homeNavActiveOnLoad());
// document.addEventListener("load", fetchHomeOnLoad()); // not DRY?
// document.addEventListener("load", homeActiveOnLoad());

// <--- Active Nav Link/Getting Pages Using Fetch --- //

// --- Project Items ---> //

const projects = document.querySelectorAll(".project-item");

projects.forEach((project) => {
  const button = project.querySelector("button");
  const makeActive = () => {
    button.classList.add("project-is-active");
    console.log("poop");
  };
  button.addEventListener("click", makeActive);
});

// Note: need to research how to handle dynamically loaded content in terms of
// associating it with js. plus, we should look into single page application url
// handling/routing, general application architecture.

// <--- Project Items --- //

// ---  ---> //

// <---  --- //
