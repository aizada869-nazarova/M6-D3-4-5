import sequelize from '../testDB.js'
import seq, { UUIDV4 } from "sequelize"

const { DataTypes } = seq

const Review = sequelize.define(
    "review",
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: UUIDV4
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        
    }
)



export default Review