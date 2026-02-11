AOS.init();

/* ================= 모바일 메뉴 ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const overlay = document.getElementById("menuOverlay");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu(){
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
}

/* 모바일에서 메뉴 클릭 시 닫히게 */
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    if(window.innerWidth <= 768){
      closeMenu();
    }
  });
});


/* ================= 모달 ================= */

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".portfolio-link").forEach(item => {
  item.addEventListener("click", function(e){
    e.preventDefault();
    modalImg.src = this.getAttribute("data-img");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", function(e){
  if(e.target === modal){
    closeModal();
  }
});

function closeModal(){
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}
