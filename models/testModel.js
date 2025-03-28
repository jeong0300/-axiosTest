const animal = [
  {
    id: 1,
    name: "호랑이",
    like: "고기",
  },
  {
    id: 2,
    name: "코끼리",
    like: "모든것",
  },
  {
    id: 3,
    name: "악어",
    like: "풀",
  },
];

// 1. 전부다 가져와서 리스트 만들기
const allData = () => {
  return animal;
};

// 2. 각자 상세 페이지 만들기
const animalData = (id) => {
  return animal.filter((a) => a.id === parseInt(id));
};

// 3. 고기를 좋아하는 동물만 나오게 하기
const beafAnimal = () => {
  return animal.filter((a) => a.like === "고기");
};

module.exports = { allData, animalData, beafAnimal };
