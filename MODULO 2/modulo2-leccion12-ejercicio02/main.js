"use strict";

const selectCity = document.querySelector(".select");
const imageElement = document.querySelectorAll(".cityImage");

console.log(imageElement);

function handleChoose() {
  for (let i = 0; i < imageElement.length; i++) {
    if (selectCity.value === "Madrid") {
      imageElement[i].src =
        "https://www.educaciontrespuntocero.com/wp-content/uploads/2020/05/img_mbigas_20190613-121711_imagenes_lv_terceros_madrid-309-kVCI-U462850729482pJG-992x558@LaVanguardia-Web.jpg";
    } else if (selectCity.value === "París") {
      imageElement[i].src =
        "https://www.cremadescalvosotelo.com/sites/default/files/paris.png";
    } else if (selectCity.value === "Nueva York") {
      imageElement[i].src =
        "https://www.tragaviajes.com/wp-content/uploads/Que-hacer-en-nueva-york-4.jpg";
    }
  }
}
selectCity.addEventListener("change", handleChoose);
