module.exports = function(sequelize,type){
    return sequelize.define('user',{
        user_id: { type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        username: type.STRING,
        fullName: type.STRING,
        email: type.STRING,
        password: type.STRING,
        profilePic: type.STRING
    },{
    timestamps: false,
    freezeTableName: true
});
}
