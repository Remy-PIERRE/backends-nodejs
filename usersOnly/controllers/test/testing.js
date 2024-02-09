const asyncWrapper = require("../../middlewares/asyncWrapper");

const testing = asyncWrapper(async (req, res, next) => {
	res.status(200).json({
		message:
			"You can access this route without being logged in. Try posting data instead.",
	});
});

module.exports = testing;
