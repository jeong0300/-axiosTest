const careers = [
  {
    id: 1,
    userName: "김덕배",
    age: 25,
    careers: [
      {
        categor: "movie",
        title: "남산의 부장들",
        role: "부장",
        gender: "남자",
      },
      {
        categor: "drama",
        title: "사랑의 불시착",
        role: "군인1",
        gender: "남자",
      },
      {
        categor: "musical",
        title: "룰라",
        role: "룰라",
        gender: "남자",
      },
    ],
  },
  {
    id: 2,
    userName: "김춘자",
    age: 55,
    careers: [
      {
        categor: "musical",
        title: "카지노",
        role: "회장님",
        gender: "여자",
      },
      {
        categor: "drama",
        title: "사랑의 불시착",
        role: "아주머니",
        gender: "여자",
      },
      {
        categor: "musical",
        title: "룰라",
        role: "술집주인",
        gender: "여자",
      },
    ],
  },
  {
    id: 3,
    userName: "김잔치",
    age: 42,
    careers: [
      {
        categor: "movie",
        title: "잔치집",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        categor: "movie",
        title: "춘수네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
      {
        categor: "movie",
        title: "덕배네 잔치",
        role: "잔치집 주인",
        gender: "남자",
      },
    ],
  },
  {
    id: 4,
    userName: "이민호",
    age: 30,
    careers: [
      {
        categor: "drama",
        title: "꽃보다 남자",
        role: "구준표",
        gender: "남자",
      },
      {
        categor: "movie",
        title: "전지적 독자 시점",
        role: "주연",
        gender: "남자",
      },
    ],
  },
];
// 참고 사항 아래의 데이터는 다 다른 페이지에서 나와야함 (js 수정으로 때려박기 금지!);
//  1. 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const getActorsAll = () => {
  return careers;
};

//  2. 남자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const getManActor = () => {
  return careers.filter((actor) =>
    actor.careers.some((career) => career.gender === "남자")
  );
};

//  3. 여자 배우 리스트 (이름,나이,커리어) 테이블 형식으로
const getWomanActor = () => {
  return careers.filter((actor) =>
    actor.careers.some((career) => career.gender === "여자")
  );
};

//  4. 같은 드라마 || 같은 영화 || 같은 뮤지컬 나온 배우들 (카테고리, 제목, 배우 이름, 역할 ) 테이블
const getSameTitles = () => {
  // 각 카테고리별로 배우들 그룹화
  const movieGroup = {};
  const dramaGroup = {};
  const musicalGroup = {};

  // 모든 배우 순회
  careers.forEach((actor) => {
    actor.careers.forEach((career) => {
      const { categor, title, role } = career;

      // 카테고리에 맞는 그룹으로 분류
      if (categor === "movie") {
        if (!movieGroup[title]) {
          movieGroup[title] = []; // 해당 제목의 그룹이 없다면 새로 생성
        }
        movieGroup[title].push({
          userName: actor.userName,
          role,
        });
      } else if (categor === "drama") {
        if (!dramaGroup[title]) {
          dramaGroup[title] = [];
        }
        dramaGroup[title].push({
          userName: actor.userName,
          role,
        });
      } else if (categor === "musical") {
        if (!musicalGroup[title]) {
          musicalGroup[title] = [];
        }
        musicalGroup[title].push({
          userName: actor.userName,
          role,
        });
      }
    });
  });

  return {
    movie: movieGroup,
    drama: dramaGroup,
    musical: musicalGroup,
  };
};

//  5. 카테고리 영화만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블
const getMovie = () => {
  return careers
    .map((actor) => ({
      ...actor,
      careers: actor.careers.filter((career) => career.categor === "movie"),
    }))
    .filter((actor) => actor.careers.length > 0);
};

//  6. 카테고리 드라마만 따로 만들어서 (카테고리 이름, 제목, 배우 이름, 역할) 테이블
const getDrama = () => {
  return careers
    .map((actor) => ({
      ...actor,
      careers: actor.careers.filter((career) => career.categor === "drama"),
    }))
    .filter((actor) => actor.careers.length > 0);
};

module.exports = {
  getActorsAll,
  getManActor,
  getWomanActor,
  getSameTitles,
  getMovie,
  getDrama,
};
