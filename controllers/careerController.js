const careerModel = require("../models/careerModel");

const getActors = (req, res) => {
  const actors = careerModel.getActorsAll();
  res.render("career/main", { actors });
};

// const getItem = (req, res) => {
//   const item = itemModel.getItemById(req.params.id);
//   if (item) {
//     res.render("items/showItem", { item });
//   } else {
//     res.status(404).send("해당하는 아이템이 없습니다.");
//   }
// };

// const getMaxItem = (req, res) => {
//   const items = itemModel.getMaxItems();
//   if (items.length > 0) {
//     res.render("items/maxItem", { items });
//   } else {
//     res.status(404).send("해당하는 아이템이 없습니다.");
//   }
// };

// userRoutes에서 사용
module.exports = { getActors };
