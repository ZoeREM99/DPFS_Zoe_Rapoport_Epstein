const multer = require("multer");
const path = require("path");

const storageProduct = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/portadas"))
    },
    filename: function (req, file, cb) {
        const fileName = "book-" + Date.now() + path.extname(file.originalname);
        cb(null, fileName);
    }
});
  
const uploadProduct = multer({ storage: storageProduct });

module.exports = {
    uploadProduct,
    // uploadUser,
};