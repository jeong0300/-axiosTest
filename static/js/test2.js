function check() {
  const title = document.getElementById("title").value;
  const files = document.getElementById("img").files;
  const formData = new FormData();

  formData.append("title", title);
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  axios({
    method: "post",
    url: "/uploadArr",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    const imgContainer = document.querySelector(".img");  
    res.data.map((item) => {
      imgContainer.innerHTML += `<img src="${item.url}" alt="Uploaded Image" width="300" height="300" />`;
    });
  });
}
