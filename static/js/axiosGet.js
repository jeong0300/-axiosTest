// 출생 연도
const year = document.querySelector("#birth-year");
// option 목록 생성 여부 확인
isYearOptionExisted = false;
year.addEventListener("focus", function () {
  // year 목록 생성되지 않았을 때
  if (!isYearOptionExisted) {
    isYearOptionExisted = true;
    for (var i = 1940; i <= 2022; i++) {
      // option element 생성
      const YearOption = document.createElement("option");
      YearOption.setAttribute("value", i);
      YearOption.innerText = i;
      // year의 자식 요소로 추가
      this.appendChild(YearOption);
    }
  }
});

// 출생 달
const month = document.querySelector("#birth-month");

monthOption = false;
month.addEventListener("focus", function () {
  if (!monthOption) {
    monthOption = true;
    for (var i = 1; i <= 12; i++) {
      const monthOption = document.createElement("option");
      monthOption.setAttribute("value", i);
      monthOption.innerText = i;

      this.appendChild(monthOption);
    }
  }
});

// 출생 일
const day = document.querySelector("#birth-day");

dayOption = false;
day.addEventListener("focus", function () {
  if (!dayOption) {
    dayOption = true;
    for (var i = 1; i <= 31; i++) {
      const dayOption = document.createElement("option");
      dayOption.setAttribute("value", i);
      dayOption.innerText = i;

      this.appendChild(dayOption);
    }
  }
});

const onClick = () => {
  const name = document.getElementById("name").value;
  const gender =
    document.querySelector('input[name="gender"]:checked')?.value || "";
  const birthYear = document.getElementById("birth-year").value;
  const birthMonth = document
    .getElementById("birth-month")
    .value.padStart(2, "0");
  const birthDay = document.getElementById("birth-day").value.padStart(2, "0");
  const Birth = `${birthYear}-${birthMonth}-${birthDay}`;

  const interest = [
    ...document.querySelectorAll('input[name="interest"]:checked'),
  ]
    .map((el) => el.value)
    .join(", ");

  const data = {
    name: name,
    gender: gender,
    birthYear: Birth,
    interest: interest,
  };

  // console.log(data);

  axios({
    method: "get",
    url: "/axiosget",
    params: data,
  }).then((res) => {
    console.log(res);
  });
};
