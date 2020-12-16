import passwordGenerator from 'password-generator';

import Queue from '../lib/Queue';

export default{
    async store(req, res){
        const {name, address, number, 
            neighborhood, city, hobby, email} = req.body;
            const user = {
                name,
                address,
                number,
                neighborhood,
                city,
                hobby,
                email,
                password: passwordGenerator(7, false)
            };

            await Queue.add('RegisterMail', { user });


            return res.json(user);
    }
};