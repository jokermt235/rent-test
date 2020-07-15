const multer = require('multer');
const Storage = multer.memoryStorage();
exports.upload = multer({
        storage: Storage
});

