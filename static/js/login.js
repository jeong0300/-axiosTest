function check() {
  const id = document.getElementById("id").value;
  const pw = document.getElementById("pw").value;

  const alret = document.getElementById("alret");

  const data = {
    id: id,
    pw: pw,
  };

  axios({
    method: "post",
    url: "/axiospost",
    data: data,
  }).then((res) => {
    console.log(res);
    if (res.data.status === 200) {
      alret.innerHTML =
        "<h5 class='red'> 아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.<br/> 입력하신 내용을 다시 확인해주세요.</h5><br/>";
    } else {
      alret.innerHTML = "<h5 class='green'> 로그인 성공하셨습니다. </h5><br/>";
    }
  });
}
