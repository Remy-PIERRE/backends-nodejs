const asyncWrapper = require("../../middlewares/asyncWrapper");
const CustomError = require("../../models/CustomError");

const testingWithAuth = asyncWrapper(async (req, res, next) => {
	const data = req.body;

	if (!data) return next(new CustomError("You send no data, try again !", 400));

	res.status(200).json({
		message: "You are authorized to use this route.",
		data: { ...data },
	});
});

module.exports = testingWithAuth;
