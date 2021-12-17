import sequelize from '../testDB.js'
import s from 'sequelize'

const { DataTypes } = s

const Category = sequelize.define(
    'category',
    {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
)





export default Category