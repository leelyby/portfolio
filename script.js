AOS.init({
  duration:1000,
  once:true
});

/* GSAP */
gsap.from(".hero-title",{y:80,opacity:0,duration:1});
gsap.from(".hero-sub",{y:40,opacity:0,duration:1,delay:0.4});

/* 다크모드 */
const toggleBtn = document.getElementById("darkToggle");

if(toggleBtn){
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }

  toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
      document.body.classList.contains("dark")?"dark":"light"
    );
  });
}

/* 모바일 메뉴 */
const menuToggle=document.getElementById("menuToggle");
const nav=document.getElementById("navMenu");
const closeMenuBtn=document.getElementById("closeMenu");
const overlay=document.getElementById("menuOverlay");

if(menuToggle){
  menuToggle.addEventListener("click",()=>{
    nav.classList.add("active");
    overlay.classList.add("active");
  });
}

function closeMenu(){
  if(nav){
    nav.classList.remove("active");
    overlay.classList.remove("active");
  }
}

if(closeMenuBtn) closeMenuBtn.addEventListener("click",closeMenu);
if(overlay) overlay.addEventListener("click",closeMenu);

document.querySelectorAll("#navMenu a").forEach(link=>{
  link.addEventListener("click",closeMenu);
});

/* ===== 모달 (여러 이미지 지원) ===== */

const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".portfolio-link").forEach(item=>{
  item.addEventListener("click",function(e){
    e.preventDefault();

    const imgData = this.getAttribute("data-img");
    if(!imgData) return;

    const imgList = imgData.split(",");

    modalContent.innerHTML = "";

    imgList.forEach(src=>{
      const img = document.createElement("img");
      img.src = src.trim();
      img.classList.add("modal-img");
      modalContent.appendChild(img);
    });

    modal.classList.add("active");
    document.body.style.overflow="hidden";
  });
});

function closeModal(){
  modal.classList.remove("active");
  document.body.style.overflow="auto";
}

if(closeBtn) closeBtn.addEventListener("click",closeModal);

if(modal){
  modal.addEventListener("click",function(e){
    if(e.target === modal){
      closeModal();
    }
  });
}
