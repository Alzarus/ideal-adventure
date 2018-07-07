/*
 Uma variável foi definida aqui,  não precisa mexer.
*/
let mostra_o_terciario = $('#card-jogador-terciario');

//////////TRABALHANDO COM BRANCHS//////////

/*
 Para exibir o personagem secundário que você
 vai adicionar ao time do seu colega, altere
 o valor da variável abaixo para 'display', 'block'.
*/
mostra_o_terciario.css('display', 'block');

/*
 Aqui foram definidas as variáveis do personagem secundário. Não precisa mexer aqui. :)
*/
let tipo_personagem3_1 = $('#tipo_personagem3-1');
let tipo_personagem3_2 = $('#tipo_personagem3-2');
let tipo_personagem3_3 = $('#tipo_personagem3-3');
let tipo_personagem3_4 = $('#tipo_personagem3-4');

let forca_personagem_3 = $('#forca_personagem_3');
let carisma_personagem_3 = $('#carisma_personagem_3');
let sabedoria_personagem_3 = $('#sabedoria_personagem_3');
let velocidade_personagem_3 = $('#velocidade_personagem_3');
let regeneracao_personagem_3 = $('#regeneracao_personagem_3');
let magica_personagem_3 = $('#magica_personagem_3');

/*
 Aqui foram definidos os valores iniciais para os atributos do personagem secundário.
 Altere os dados do pesonagem modificando os valores das variáveis abaixo!
*/
tipo_personagem3_1.html('Orc');
tipo_personagem3_2.html('Terrestre');
tipo_personagem3_3.html('Guerreiro');
tipo_personagem3_4.html('Tanque');

forca_personagem_3.css('width', '80%');
carisma_personagem_3.css('width', '10%');
sabedoria_personagem_3.css('width', '10%');
velocidade_personagem_3.css('width', '40%');
regeneracao_personagem_3.css('width', '80%');
magica_personagem_3.css('width', '10%');
