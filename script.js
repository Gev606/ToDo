let inp = document.querySelector(".inp");
let btnadd = document.querySelector(".btn");
let btndel = document.querySelector(".btn_delete");
let li = document.querySelector("li");
let ul = document.querySelector("ul");
let div_li = document.querySelector(".div_lier");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newDiv = document.createElement("div");
  let list = document.createElement("li");
  let butt = document.createElement("button");

  if ((list.innerText = inp.value)) {
    ul.append(newDiv);
    newDiv.classList.add("div_lier");

    const val = inp.value;

    list.innerHTML = val;
    newDiv.append(list);
    newDiv.append(butt);
    butt.innerHTML = `
      <i class="fa fa-trash" aria-hidden="true"></i>
    `;
    inp.value = "";

    butt.addEventListener("click", () => {
      newDiv.remove();
    });

    newDiv.addEventListener("click", () => {
      newDiv.classList.toggle("check")
    })


  }
});
