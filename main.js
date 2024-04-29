let leaderImg = document.querySelector(".leaderImg");
let itemImage = document.querySelectorAll(".itemImage");
// console.log(leaderImg);
const changePicture = (e) => {
  let change = e.target.getAttribute("src");
  leaderImg.setAttribute("src", change);
};
for (let i = 0; i < itemImage.length; i++) {
  itemImage[i].addEventListener("click", changePicture);
}

// New Event

let btn = document.getElementById("btn");
let changeImg = document.querySelector(".changeImg");
// console.log(changeImg);
let source = ["Pictures/img1.jpg","Pictures/img2.jpg","Pictures/img3.jpg","Pictures/img4.jpg","Pictures/img5.jpg",];
let i = 0;
btn.addEventListener("click", () => {
  changeImg.setAttribute("src", source[i]);
  i++;
  if (i >=source.length) {
    i=0
  }
//   console.log(source[i]);
});
