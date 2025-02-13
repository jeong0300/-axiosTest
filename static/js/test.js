function check() {
  const title = document.getElementById("title").value;
  const files = document.getElementById("img").files;
  const formData = new FormData();

  formData.append("title", title);
  formData.append("files", files[0]);

  axios({
    method: "post",
    url: "/upload",
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((res) => {
    const imgContainer = document.querySelector(".img");
    imgContainer.innerHTML = `<h5>${res.data.title}</h5><img src="${res.data.imageUrl}" alt="Uploaded Image" width="300" height="300" />`;
  });
}
