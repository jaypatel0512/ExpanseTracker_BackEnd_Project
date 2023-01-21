const expressAsyncHandler = require("express-async-handler");
const Expanse = require("../../model/Expanse");

//create

const createExpCtrl = expressAsyncHandler(async (req, res) => {
  const { title, amount, description } = req.body;

  try {
    const expanse = await Expanse.create({
      title,
      amount,
      description,
      user:req?.user?._id,
    });
    res.json(expanse);
  } catch (error) {
    res.json(error);
  }
});

//fetch all expanse
const fetchAllExpCtrl = expressAsyncHandler(async (req, res) => {
  const { page } = req?.query;
  try {
    const expanse = await Expanse.paginate(
      {},
      { limit: 10, page: Number(page),populate:'user' }
    );
    res.json(expanse);
  } catch (error) {
    res.json(error);
  }
});

// const fetchExpByUser = expressAsyncHandler(async (req, res) => {
 
//   try {
//     const expanse = await Expanse.find({user: req.user.id});
    
//     res.json(expanse);
//   } catch (error) {
//     res.json(error);
//   }
// });

//fetch single expanse
const fetchExpDetailCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const expanse = await Expanse.findById(id);
    res.json(expanse);
  } catch (error) {
    res.json(error);
  }
});

//update
const updateExpCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description } = req.body;
  try {
    const expanse = await Expanse.findByIdAndUpdate(
      id,
      {
        title,
        description,
        amount,
      },
      { new: true }
    );
    res.json(expanse);
  } catch (error) {
    res.json(error);
  }
});

//delete expanse
const deleteExpCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const expanse = await Expanse.findByIdAndRemove(id);
    res.json(expanse);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createExpCtrl,
  fetchAllExpCtrl,
  fetchExpDetailCtrl,
  updateExpCtrl,
  deleteExpCtrl,
};
