document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.getElementById("navToggler");
    const togglerIcon = document.getElementById("togglerIcon");
console.log("ss");
    toggler.addEventListener("click", function () {
        if (togglerIcon.classList.contains("bi-list")) {
            togglerIcon.classList.remove("bi-list");
            togglerIcon.classList.add("bi-x"); // Change to "X"
        } else {
            togglerIcon.classList.remove("bi-x");
            togglerIcon.classList.add("bi-list"); // Change back to hamburger
        }
    });
});



// const images = [
//   "https://s3-alpha-sig.figma.com/img/d32c/e412/b7b166f39a8e908e7b32ed586d1e304a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gON6ES0AlXY6t8Gga0WCQO50qtaZBsStV0lK2Pilwx0Wu0sVs-e2mRQCB3njnJwqVihYWPuvuCb6TNdpDflM~lnoPi5K1QWgfuSKVAZ0KGwjhwQcVloBAP1Cs0hJjj7IBcfI8d1SPrZS1DHtj2V7Tvhy-k7aEOYiawdyL2HZoAvfdslfY4XbhcgKjmEreM94fsXkxtxnbrAJqlOLeIGAHTSXvx-aG7beWt1Im-xpmZZXu3C0CPnqvoDG~anC0H9iA6yAAVF6h6r9CdvReQFt0XQ9okOiQeF3EbGHSo8Jl-nu-v3OFFW0oyIdekeEnBiG~kmxXQt3Mb4dylVU3ZAp6Q__",
//   "https://s3-alpha-sig.figma.com/img/46d3/c64a/d4ba82ff54ba2f7afdd253d804f8f135?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ebo2ZbYw19QRuNn0xLHdSswMR8vhdRAnSdMV2ReNOYXqEErOR-SKs6WzHTklZfH7GTNybPypizY7nnky6f72-99XSaPJVNcFrui7C8I-03r8odS1nZ2HisE1A4~oJ5AUy2aBC1OL7qvbz6bphwH6ss0QrCuE~VwO4oT1JhJ37-68qs0n7yG8k0sMUfzN7TBBX6K9BkwbbNoQ9Ts7sfdrsm8okHcsrhNERsP199zT-VICyHXoHt~mXbSPBTL~fL2rH9HF-h2cG0KCdxFvJnmp9~9DoPbWGKeF8ATqfT5e4uDmU9sTcV46emDsTqYPvfRlPtQFShBtYT8lA8GUX2MAhw__",
//   "https://s3-alpha-sig.figma.com/img/8a28/599f/0e3cf2cf14a121fb457f1a35c7b793e2?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTb2bWpvEuqRyrGARhMerwSbgtZkGI6SDlZKndzFz2n~czd1SVK3FEg2YD8TIvCU3n9oXEes-AiErjNs8m5723IYHrw6VwrvqSBb~HNASDxU3QBrMHIb7Hk143QxqsLa6GHuYI11hDBkh~s4KmGBHWGe-edtamFDf4F~uN3ZdQ5bmmfXN-DfprQuMWcBgmAh51jQxaD9Pvad7gkmnP3abuePFr1IZFoMtogehK7thLqDz0rBIXaduk9SDt8~XWfjvIbDOvoBs~N2HTRfKU4DHaTgkZFailbg2uOsogjUiQhJsG0vvzX5XbAXozyIhG-HI-iEahCDc9dFOqgN11HT~w__",
//   "https://s3-alpha-sig.figma.com/img/8e03/78d0/90604ab7ce1ca9b326920342f3437722?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMH20R2x4kdeKdjFM8QmedDuJojbREKfcs~1hJ72Cmh36U4V4w-hFGDfWRQ9HJvCZyzMVSldzEDc0oouPfD63eWzj0Z3qu56hCiri0qmdWaTldaSQ7ZbDlA6zaKN2l6zdIVxNSb36myrhWhUrlVVYHrUn7YZXn3fRmaFDWevCix2b8T7w~RGmoe60~ixTLB~vJODbCYFWqmdKpSRabVk9VHnLbE1~aVm53ynkJswaTF0DPWfd~e4pbAzFQ2GLH9C2grrr85cp~HBf4qlgU3xCfVKplt-jm9mFJZQtltMlh5uLdm5mSemlQq6EUDPndzF-jh932b~3nYD0hoT~iPjAw__",
//   "https://s3-alpha-sig.figma.com/img/a6f7/f2e9/366ede76a0317aca84589f8e9b6708ac?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ezf0F8-t7DzAG~vd8FuzbMtrQOlV~N4btaTLQI-l9Tk8DoeYeXKUu~25EGaxwFM3hz8LOg0sPctDOpRvCSV24fzUsmq9lggnQ1r1Rpm-0RUFrUzwYHAeu89ZsvA7K0nisyQ28kEqen4tBWINR5vc5w6pnVjpPkPbDp2HTGEPQNz1HZN~QCIPndkc4OtIZQmsDZ-Tc-nJfvAKJMcseoaJmU7UQyBWcfsYVEAiZwxc~1QBOvW9E7PJc1PhTLb2xqOJvfCFk2gXgGDtdGyUL8lEWYxgc6jzydf1OyEjwJJDVpqU1~sfJMUXfQUk9EnvpzKFUY0G3Uw9WmrkDrKOjI5gpg__",
//   "https://s3-alpha-sig.figma.com/img/a281/1663/cb8faa13da9f6d591fb9b062aa32067f?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=INefE5NDfHpW5hRfXffuLq7PW8rsS8tk8EJHvQ1nekU7AzzP1~-2~6pXFWbxLqQLkthAIjFSVU7ZPbJpfoxy88S~jWAckXKgOCcX9NdrKBcYX~7Ux0OZFFqwY3KdXS7PWfhlYYrXJHpDRIDNNZmpR0dfaGKhsSEzf0tlRGxF7y4LBwz2Fncx8EBgyoOYIsBh-pXPZFVKFZ4y7370N9dDDxmlUOWA-veuEqWd7KuuEy7qaXefwIu-DQlqagjLw95G4nWhhlBESpwbEpgvL9JC6NqbPGy~XiXcdVH-lR4lCYEJth-xIhAOxEjZ8QvMyZbrqO6M604spEjOiJnBY2BSSQ__",
//   "https://s3-alpha-sig.figma.com/img/ebf7/c61b/6dcc286f3462691047ff862445a223cc?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYmHhCbM8Fr7FZqYk~uU9peg9TWWOwUy9micwlwXqc-OTqGFOSfWheEunAmgmV2GapjfPG5ulSLVCYGQwuwTEzQncqQ21MkRGMHed7I-tCNSrFfP9UR926vpUOinvAI8JmCiz14pyZNAEy-OR45TBT-~3eXsHgYF8WnH-82G9P4WrxMDB4wJKN4G-BdH5E6Ygqmibilv6rZyM182uhtXFeDEvPIuU3o0cbT2J~nkjFg2oELhzqagYxH8nrE7SwazjNeW8QeaET03oQ6ak9BrQ79mpH7qylg5YieSkIIdtT5~y1ZEAFOgStk9gXDnuoMKlzPHOcoeWGHV0i~zoAW05w__",
//   "https://s3-alpha-sig.figma.com/img/272b/4a64/90c743b75e8d359d6feea163d3f5cd63?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eEX7oY6RigMgYUPExpZA-5yQvvWp96UBYkckhGpruo0zD9vbHT2DpX414OG0Wg0qe0raAFUQfVMOyouuzMghRPMbAoePdP46Zbgac605R1vv57s~ZSxt2xeRzzlYDOlPOYFgwEzW-whIgFMBtlCEz7~wUDJbNj-KKLH8kbN4lKasetKZK98ecWvX00kCh2qMBNket0ko5XKJu2qXUWCHkrYKhEqv6Ge1fg3Xif~gO0jcnYUnfiemCApqg~06oNkaUBz~tdbz4yZ2PSK1M2anXov28vjktreAyqr2fOjBwfU~rqzioydzSQeJKkXEivcJ-1bgREcu0SNUHgb7exB~og__",
//   "https://s3-alpha-sig.figma.com/img/5415/5490/91fd1c2e35f33dfc49b402052b618972?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gf2op0GWG4Qvp9nAXkDPHi0ZhwSz114hAVcmx1XSWYPveuXLEAJZqz156a-g6LyrIxbq8JZzjct-R0FO0SOJP~7yCjSXCoMtOY2soKRvqXcBQ9KjgGwcM7SjqKi6cYfhq15omUGIWD6sG0O8YmG~iu4jFqI3FfPJ6zvldWHkWen7J0eroCBJ07UMiqZgPPbvoh4QsInHKyNz4mLStwWjah9hsebNLqpbPjkVWxYXR46gJrxntPyPDTyZLKsasnR4v6gyPIBZ1Y6mukR0KDopt0-JjwfSSq-2-C0z0OjwiKjhRNTF5zF9YkbpepSuXl3pEQebiE5lmIceiZqAeCusGQ__",
//   "https://s3-alpha-sig.figma.com/img/6453/7c86/52649543d52d4c3ad78f0db477268194?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OvCNW3K-RmAhvYFEYwgheXGyAeD7nsdNVSR8DUglEZbpwfpJI6nhWjIeWxGVNaSsQNX6eqMP6o2FlDKwq1nXUGUAU~1NVhLns8X157ScG6ur7nz~zvlARJ8Vnz9AZUCnB5PT6jfXapigPPSA5H21HsQ0td6A1sUphbcHgXb7TAGp~UYR0ecWzk8-KjbXRbHfTIlK753U~8AujldsmWJuvaeOWwfBu~giLVFLRch-4pC0zVLSMQPl9B5OYvcLFAizh-iqgiJFkbIS8WYxrBo2ze91KfRKaKQ91X7r2DgCj9vS3H~OaFoQTVr7ciEQlSSJD0wOCEm5oYfnKw9nBZcf4w__",
//   "https://ibb.co/F8tP5SQ",
//   "https://ibb.co/K71H0DW",
//   "https://ibb.co/dkhSV4h",
//   "https://ibb.co/PWTM3Nv",
//   "https://ibb.co/g780x18",
//   "https://ibb.co/3ztrwfS",
//   "https://ibb.co/9NwX1LV",
//   "https://ibb.co/hcTVn0D",
//   "https://ibb.co/64HpW1M",
//   "https://ibb.co/wB0L9Mc",
//   "https://ibb.co/7xhz8CW",
//   "https://ibb.co/zVGcP6V",
//   "https://ibb.co/YWcVBXk",
//   "https://ibb.co/2t2TLNx",
//   "https://ibb.co/k57YnX0",
//   "https://ibb.co/F8KNh61",
//   "https://ibb.co/xzC6xSt",
//   "https://ibb.co/S5x2Wym",
//   "https://ibb.co/9G9Y2Wr",
//   "https://ibb.co/wMChM3W",
//   "https://ibb.co/JqSKCyL",
//   "https://ibb.co/0C03xK5",
//   "https://ibb.co/Qm3NNMp",
//   "https://ibb.co/4RdLGYm",
//   "https://ibb.co/CJsGdsC",
//   "https://ibb.co/MgX15D7",
//   "https://ibb.co/KhCyxb4",
//   "https://ibb.co/j59Y8qB",
//   "https://ibb.co/YhLcbb6",
//   "https://ibb.co/fYCB7CL",
//   "https://ibb.co/hcTVn0D",
//   "https://ibb.co/Syn4rkZ"
// ];
const images = [
  "33.jpg", "34.jpg", "35.jpg", "36.jpg", 
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", 
  "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", 
  "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg", 
  "31.jpg", "32.jpg"
];

console.log(images); // Outputs the image filenames from 33 to 47, then 1 to 32


console.log(images); // Outputs all image filenames


const imagesPerPage = 12; // Number of images per page
let currentPage = 1; // Current page

// Function to display images for the current page
function displayImages(page) {
  const imageGrid = document.getElementById("image-grid");
  imageGrid.innerHTML = ""; // Clear previous images

  const startIndex = (page - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const pageImages = images.slice(startIndex, endIndex);

  pageImages.forEach((imageName, index) => {
      const col = document.createElement("div");
      col.classList.add("col-md-4", "image-container"); // 3 images per row
      col.innerHTML = `<img src="/images/Camera Roll/${imageName}" alt="Image ${startIndex + index + 1}" class="img-fluid">`;
      imageGrid.appendChild(col);
  });
}

// Function to generate pagination
function generatePagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = ""; // Clear previous pagination

  const totalPages = Math.ceil(images.length / imagesPerPage);

  for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      if (i === currentPage) li.classList.add("active");
      li.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i})">${i}</a>`;
      pagination.appendChild(li);
  }
}

// Function to change the page
function changePage(page) {
  if (page < 1 || page > Math.ceil(images.length / imagesPerPage)) return;
  currentPage = page;
  displayImages(currentPage);
  generatePagination();
}

// Initial display
displayImages(currentPage);
generatePagination();
