const bcrypt = require("bcrypt");
const {Usuario, Condominio} = require("../models");
const sequelize = require("sequelize");


const registroController = {
    showRegistro: (req,res)=>{
        res.render('auth/registro', { title: 'cadastro' });
    },
    showLogin: (req,res)=>{
        res.render("auth/login",{title:"login"})
    },
    registro: async (req,res)=>{
        const {nome_cad, email_cad, senha_cad, tel_cad, apto_cad, bloco_cad, cond_cad, end_cad} = req.body;
        const apto= apto_cad? apto_cad:null
        const hash = bcrypt.hashSync(senha_cad,10);
        Condominio.create({
            nome:cond_cad,
            endereco:end_cad

        }).then(()=>{
        Condominio.max("id").then(id_cond=>{
            Usuario.create({
                nome:nome_cad,
                email:email_cad,
                senha:hash,
                telefone:tel_cad,
                apto:apto,
                bloco:bloco_cad,
                condominios_id:id_cond 
                
            }).then(function () {
                res.send("usuario cadastrado!!")
            }).catch(function (erro) {
                console.log(id_cond)
                res.send("algo deu errado!!" + erro)
            });
        })
    })   
    },
    login: async (req, res) => {

        // Lendo as info do body
        const {
            email,
            senha
        } = req.body;

        // Tentar carregar um usuário
        const user = await Usuario.findOne({
            where: {
                email
            }
        });
        console.log(email, senha)

        // Verifica se existe usuário com o email passado
        if (!user) {
            res.redirect('/login?error=1');
        }

        // Validar a senha passada via post contra a guardada no banco
        if (!bcrypt.compareSync(senha, user.senha)  ) {
            res.redirect('/login?error=2');
        }

        // Setar uma session com o usuário
        req.session.usuario = user;

        // Redirecionar o usuário para a rota '/home'
        res.send("logado com sucesso!!!");
    },
}
module.exports = registroController;