  const form = document.getElementById("contact-form");
  const statusMsg = document.getElementById("form-status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          statusMsg.style.display = "block";
          form.reset();
        } else {
          statusMsg.innerText = "❌ Oops! Something went wrong.";
          statusMsg.style.color = "red";
          statusMsg.style.display = "block";
        }
      })
      .catch(error => {
        statusMsg.innerText = "❌ Error! Please try again later.";
        statusMsg.style.color = "red";
        statusMsg.style.display = "block";
      });
  });

let section =document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a')

window.onscroll=() =>{
    section.forEach(sec=>{
        let top= window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top >= offset && top< offset + height) {
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

const typed =new Typed('.multiple-text',{
    strings:['Java Developer','Frontend Developer','Java Full Stack Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
    
})
























