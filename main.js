// ---  ---> //
// <---  --- //

// --- Splash ---> //

const splash = document.getElementById("Splash");

var removeSplash = function () {
  splash.remove();
};
window.onload = function () {
  setTimeout(removeSplash, 1800);
};

// <--- Splash --- //

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

// default to dark mode //
document.addEventListener("load", isLight());

lightSwitchLight[0].addEventListener("click", isLight);
lightSwitchDark[0].addEventListener("click", isDark);

// <--- Light Switch --- //

// --- Active Nav Link/Getting Pages Using Fetch ---> //

const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-link");
const main = document.querySelector("main");

Array.from(navLinks).forEach((navLink, index) => {
  const fetchPage = () => {
    const url = `${navLink.dataset.pages}.html`;
    setTimeout(function () {
      fetch(url)
        .then(function (response) {
          return response.text();
        })
        .then(function (data) {
          main.innerHTML = data;
          setTimeout(function () {
            main.classList.add("active");
          }, 50);
        });
    }, 500);
  };

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
    fetchPage();
    removeCurrentActive();
    activateNavItem();
  });
});

const homeNavActiveOnLoad = () => {
  navItems[0].classList.add("active");
};

const fetchHomeOnLoad = () => {
  fetch("home.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      main.innerHTML = data;
      main.classList.add("active");
    });
};

const homeActiveOnLoad = () => {
  main.classList.add("active");
}

document.addEventListener("load", homeNavActiveOnLoad());
document.addEventListener("load", fetchHomeOnLoad()); // (not DRY?)
document.addEventListener("load", homeActiveOnLoad());

// <--- Active Nav Link/Getting Pages Using Fetch --- //

// --- Three.js Background ---> //

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import discUrl from "/assets/disc.png";

// Scene //
const scene = new THREE.Scene();
const sprite = new THREE.TextureLoader().load(discUrl);

// Mesh //
// const geometry = new THREE.SphereGeometry(3, 70, 70);
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
controls.autoRotateSpeed = 0.017;

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

// ---  ---> //

// <---  --- //
