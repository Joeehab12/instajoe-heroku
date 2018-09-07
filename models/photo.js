module.exports = function(sequelize,type){
    return sequelize.define('photo',{
        photo_id: { type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_id: type.INTEGER,
        caption: type.STRING,
        location: type.STRING,
        photo_url: type.STRING,
        date_created: type.DATE
    },{
    timestamps: false,
    freezeTableName: true
});
}
