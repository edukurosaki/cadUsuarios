import options from 'dotenv/lib/env-options';
import Mail from '../lib/Mail';

export default{
    key: 'RegisterMail',
    options: {
        delay: 5000,
        priority: 3,
        repeat: { 
            every: 1,
            limit: 100
        },
        lifo:true
    },
    async handle({data}){
        const {user} = data;

        await Mail.sendMail({
            from: 'Sec <contato@secservices.com.br>',
            to:  user.name + ' ' +  user.email,
            subject: 'cadastro de usuario',
            html: 'Ola, '+ user.name + ', bem vindo a SEC hoje.',
            html: 'Seu hobby e ' + user.hobby +' lindo hobby, vamos jogar?'
        })
            }
}


