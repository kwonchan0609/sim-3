module.exports={
    create: (req, res) => {
		const db = req.app.get('db');
		const {id,user_name, password} = req.body;
     
		db.create_user([id,user_name, password])
			.then(user => res.status(200).send(user))
			.catch(err => console.log(`Error Message: ${err}`))
    },
    get:(req,res)=>{
     const db= req.app.get('db');
     const {id,user_name, password} =req.body;
        db.find_user([id,user_name,password])
        .then(user => res.status(200).send(user))
        .catch(err=>console.log(`Error Message:${err}`))
    }
}