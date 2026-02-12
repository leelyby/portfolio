document.addEventListener("DOMContentLoaded", function(){

  /* 다크모드 */
  const darkBtn = document.getElementById("darkToggle");
  if(darkBtn){
    darkBtn.addEventListener("click", ()=>{
      document.body.classList.toggle("dark");
    });
  }

  /* 모바일 메뉴 */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if(menuToggle && navMenu){
    menuToggle.addEventListener("click", ()=>{
      navMenu.classList.toggle("active");
    });

    document.querySelectorAll("#navMenu a").forEach(link=>{
      link.addEventListener("click", ()=>{
        navMenu.classList.remove("active");
      });
    });
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
