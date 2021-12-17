import sequelize from '../testDB.js'
import seq, { UUIDV4 } from "sequelize"

const { DataTypes } = seq

const ShoppingCart = sequelize.define(
    "Cart",
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        
        
    },
    { timestamps: false },
)



export default ShoppingCart