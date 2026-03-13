document.addEventListener("DOMContentLoaded", function(){

  /* 다크모드 */
  const darkBtn = document.getElementById("darkToggle");
  if(darkBtn){
    darkBtn.addEventListener("click", ()=>{
      document.body.classList.toggle("dark");
    });
  }

  /* 모바일 메뉴 */
/* 모바일 메뉴 */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuClose = document.getElementById("menuClose");
const menuOverlay = document.getElementById("menuOverlay");

if(menuToggle && navMenu){

  menuToggle.addEventListener("click", ()=>{
    navMenu.classList.add("active");
    if(menuOverlay) menuOverlay.classList.add("active");
  });

  if(menuClose){
    menuClose.addEventListener("click", closeMenu);
  }

  if(menuOverlay){
    menuOverlay.addEventListener("click", closeMenu);
  }

  document.querySelectorAll("#navMenu a").forEach(link=>{
    link.addEventListener("click", closeMenu);
  });
}

function closeMenu(){
  navMenu.classList.remove("active");
  if(menuOverlay) menuOverlay.classList.remove("active");
}

  /* 모달 */
  const modal = document.getElementById("imageModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalClose");

  document.querySelectorAll(".portfolio-link").forEach(item=>{
    item.addEventListener("click", function(e){
      e.preventDefault();

      const imgData = this.dataset.img;
      if(!imgData || !modalContent || !modal) return;

   const imgs = imgData.split(",").map(src => src.trim());


      modalContent.innerHTML="";

      imgs.forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        img.classList.add("modal-img");
        modalContent.appendChild(img);
      });

      modal.classList.add("active");
      document.body.style.overflow="hidden";
    });
  });

  if(closeBtn){
    closeBtn.addEventListener("click", closeModal);
  }

  if(modal){
    modal.addEventListener("click", function(e){
      if(e.target === modal){
        closeModal();
      }
    });
  }

  function closeModal(){
    if(modal){
      modal.classList.remove("active");
      document.body.style.overflow="auto";
    }
  }

});


const tabs=document.querySelectorAll(".tab-btn")

const cards=document.querySelectorAll(".work-card")

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"))

tab.classList.add("active")

const filter=tab.dataset.filter

cards.forEach(card=>{

if(filter==="all"){

card.classList.remove("hide")

card.classList.add("show")

return

}

if(card.dataset.category===filter){

card.classList.remove("hide")

card.classList.add("show")

}

else{

card.classList.remove("show")

card.classList.add("hide")

}

})

})

})


const tabs=document.querySelectorAll(".tab-btn");
const sections=document.querySelectorAll(".portfolio-section");

tabs.forEach(tab=>{
 tab.addEventListener("click",()=>{
  tabs.forEach(t=>t.classList.remove("active"));
  tab.classList.add("active");
  const filter=tab.dataset.filter;

  sections.forEach(sec=>{
    if(filter==="all"){
      sec.style.display="";
    }else{
      if(sec.dataset.type===filter){
        sec.style.display="";
      }else{
        sec.style.display="none";
      }
    }
  });
 });
});