const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

// ENDPOINTS FOR CLIENT
router.get('/pub/items', Controller.pubItems)
router.get('/pub/items/:id', Controller.pubItemDetail)

router.get('/pub/categories', Controller.pubCategories)

// ENDPOINTS FOR ADMIN
router.post('/login', Controller.login)

router.use(authentication)

router.get('/items', Controller.getItems)
router.post('/items', Controller.addItem)
router.delete('/items/:id', Controller.deleteItem)
router.get('/items/:id', Controller.getItemById)
router.put('/items/:id', Controller.putItem)

router.post('/register', Controller.register)

router.get('/categories', Controller.getCategories)
router.get('/categories/:id', Controller.getCategoryById)
router.post('/categories', Controller.addCategory)
router.put('/categories/:id', Controller.putCategory)
router.delete('/categories/:id', Controller.deleteCategory)

module.exports = router