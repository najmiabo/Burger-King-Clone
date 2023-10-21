const { comparePassword } = require('../helpers/bcrypt')
const { signToken } = require('../helpers/jwt')
const { User, Item, Ingredient, Category, sequelize } = require('../models')

class Controller {
    static async pubItems(req, res, next) {
        try {
            const items = await Item.findAll()
            res.json(items)
        } catch (err) {
            next(err)
        }
    }

    static async pubItemDetail(req, res, next) {
        try {
            const { id } = req.params
            const item = await Item.findByPk(id, {
                include: [{
                    model: User,
                    attributes: ['id', 'username', 'email']
                }, Category, Ingredient]
            })
            if (!item) {
                throw { name: 'item_not_found' }
            }
            res.json(item)
        } catch (err) {
            next(err)
        }
    }

    static async pubCategories(req, res, next) {
        try {
            const categories = await Category.findAll({
                include: Item
            })
            res.json(categories)
        } catch (err) {
            next(err)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                throw { name: 'empty_email' }
            }
            if (!password) {
                throw { name: 'empty_password' }
            }

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if (!user) {
                throw { name: 'invalid_email/password' }
            }

            const isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword) {
                throw { name: 'invalid_email/password' }
            }

            const access_token = signToken({ id: user.id })
            res.json({ access_token, username: user.username })
        } catch (err) {
            next(err)
        }
    }

    static async getItems(req, res, next) {
        try {
            const items = await Item.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['username', 'email']
                    },
                    Category, Ingredient
                ],
                order: [['createdAt', 'DESC']]
            })

            res.json(items)
        } catch (err) {
            next(err)
        }
    }

    static async getItemById(req, res, next) {
        try {
            const { id } = req.params
            const item = await Item.findByPk(id, {
                include: [
                    {
                        model: User,
                        attributes: ['username', 'email']
                    },
                    Category, Ingredient
                ],
            })
            if (!item) {
                throw { name: 'item_not_found' }
            }
            res.json(item)
        } catch (err) {
            next(err)
        }
    }

    static async getCategories(req, res, next) {
        try {
            const categories = await Category.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.json(categories)
        } catch (err) {
            next(err)
        }
    }

    static async getCategoryById(req, res, next) {
        try {
            const { id } = req.params
            const category = await Category.findByPk(id)
            if (!category) {
                throw { name: 'category_not_found' }
            }
            res.json(category)
        } catch (err) {
            next(err)
        }
    }

    static async register(req, res, next) {
        try {
            await User.create(req.body)

            res.status(201).json({ message: 'Successfully register' })
        } catch (err) {
            next(err)
        }
    }

    static async addCategory(req, res, next) {
        try {
            const { name } = req.body
            await Category.create({ name })

            res.status(201).json({ message: `Category with name ${name} successfully added` })
        } catch (err) {
            next(err)
        }
    }

    static async addItem(req, res, next) {
        const t = await sequelize.transaction();
        try {
            console.log(req.body)
            const { name, description, price, imgUrl, categoryId, ingredients } = req.body
            const newItem = await Item.create({ name, description, price, imgUrl, categoryId, authorId: req.user.id }, { transaction: t })
            ingredients.forEach(el => {
                el.itemId = newItem.id
            });
            await Ingredient.bulkCreate(ingredients, { transaction: t, validate: true })

            res.status(201).json({ message: "Item added successfully" })
            await t.commit();
        } catch (err) {
            await t.rollback();
            next(err)
        }
    }

    static async putItem(req, res, next) {
        try {
            const { id } = req.params
            const { name, description, price, imgUrl, categoryId } = req.body

            const item = await Item.findByPk(id)
            if (!item) {
                throw { name: 'item_not_found' }
            }
            await item.update({ name, description, price, imgUrl, categoryId })
            res.json({ message: "Item updated successfully" })
        } catch (err) {
            next(err)
        }
    }

    static async deleteItem(req, res, next) {
        try {
            const { id } = req.params
            const item = await Item.findByPk(id)
            if (!item) {
                throw { name: 'item_not_found' }
            }
            await item.destroy()
            res.json({ message: `Item with name ${item.name} deleted` })
        } catch (err) {
            next(err)
        }
    }

    static async putCategory(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const category = await Category.findByPk(id)
            if (!category) {
                throw { name: 'category_not_found' }
            }
            await category.update({ name })
            res.json({ message: "Category updated successfully" })
        } catch (err) {
            next(err)
        }
    }

    static async deleteCategory(req, res, next) {
        try {
            const { id } = req.params
            const category = await Category.findByPk(id)
            if (!category) {
                throw { name: 'category_not_found' }
            }
            await category.destroy()
            res.json({ message: "Category deleted successfully" })
        } catch (err) {
            next(err)
        }
    }
}

module.exports = Controller