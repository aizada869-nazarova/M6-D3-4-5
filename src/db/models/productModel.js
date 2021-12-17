import sequelize from '../testDB.js'
import s, { UUIDV4 } from "sequelize"

const { DataTypes } = s

const Product = sequelize.define(
    "product",
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)




export default Product