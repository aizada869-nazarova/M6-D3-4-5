import Product from './productModel.js'
import Review from './reviewModel.js'
import Category from './categoryModel.js'
import User from './userModel.js'
import ProductCategory from './productCatModel.js'

Product.hasMany(Review, { onDelete: 'CASCADE' })
Review.belongsTo(Product, { onDelete: 'CASCADE' })

Product.belongsToMany(Category, { through: ProductCategory, onDelete: 'CASCADE' })
Category.belongsToMany(Product, { through: ProductCategory, onDelete: 'CASCADE' })

User.hasMany(Review, { onDelete: 'CASCADE' })
Review.belongsTo(User, {onDelete: 'CASCADE' } )


export { Product, Review, Category, User, ProductCategory }