const multer = require('multer')
const upload = multer({ dest: 'public/files/' })
const fs = require('fs')

const uploads = upload.single('file');

const checkFile = (req, res, next) => {
    const file = req.file
    if (!file) {
        console.log('File not change')
        next()
    } else {
        const tailImg = req.file.mimetype.split('/').slice(1)
        const addTail = req.file.path.concat('.', tailImg)
        console.log(addTail)
        fs.rename(req.file.path, addTail, (err) => {
            if (err) next(err)
            console.log('Upload file successfully')
            req.body.image = addTail.split('/').slice(1).join('/')
            next()
        })
    }
}

module.exports = {
    uploads,
    checkFile
}