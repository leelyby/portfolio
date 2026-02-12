document.addEventListener("DOMContentLoaded", function(){

  /* 다크모드 */
  const darkBtn = document.getElementById("darkToggle");
  darkBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
  });

  /* 모바일 메뉴 */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll("#navMenu a").forEach(link=>{
    link.addEventListener("click", ()=>{
      navMenu.classList.remove("active");
    });
  });

  /* 모달 */
  const modal = document.getElementById("imageModal");
  const modalContent = document.getElementById("modalContent");
  const closeBtn = document.getElementById("modalClose");

  document.querySelectorAll(".portfolio-link").forEach(item=>{
    item.addEventListener("click", function(e){
      e.preventDefault();

      const imgData = this.dataset.img;
      if(!imgData) return;

      const imgs = imgData.split(",");

      modalContent.innerHTML="";

      imgs.forEach(src=>{
        const img = document.createElement("img");
        img.src = src.trim();
        img.classList.add("modal-img");
        modalContent.appendChild(img);
      });

      modal.classList.add("active");
      document.body.style.overflow="hidden";
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
    document.body.style.overflow="auto";
  }

});
