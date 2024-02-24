
/**
 * @fileoverview This file contains the definition of the MOVES_LIST constant, which represents a list of moves.
 * @module movesList
 */

/**
 * Represents a move in the game.
 * @typedef {Object} Move
 * @property {string} flavor - The flavor text of the move.
 * @property {string} trigger - The trigger condition for the move.
 * @property {string} description - The description of the move.
 * @property {string} sucessoCritico - The description of the move's critical success outcome.
 * @property {string} sucesso - The description of the move's success outcome.
 * @property {string} parcial - The description of the move's partial success outcome.
 * @property {string} falha - The description of the move's failure outcome.
 * @property {string} falhaCritica - The description of the move's critical failure outcome.
 */

/**
 * Represents a list of moves.
 * @type {Move[]}
 */
const MOVES_LIST = [
    {
        "tag": "Try something",
        "flavor": "Tentar algo (Atribute Adequado)",
        "trigger": "Você faz algo cujo resultado é incerto",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => Você alcança seu objetivo e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você alcança seu objetivo</p>",
        "parcial": "<p>Parcial => Você alcança seu objetivo, mas paga o preço</p>",
        "falha": "<p>Falha => Você não alcança seu objetivo e paga o preço</p>",
        "falhaCritica": "<p>Falha Crítica => Você não alcança seu objetivo, paga o preço e recebe um prejuízo extra</p>"
    },
    {
        "tag": "Defy Danger",
        "flavor": "Desafiar perigo (Atributo Adequado)",
        "trigger": "Você age apesar de um perigo iminente",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => Você evita o perigo e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você evita o perigo</p>",
        "parcial": "<p>Parcial => Você evita o perigo, mas sofre uma consequência</p>",
        "falha": "<p>Falha => Você não evita o perigo e paga o preço</p>",
        "falhaCritica": "<p>Falha Crítica => Você não evita o perigo, paga o preço e sofre uma consequência extra</p>"
    },
    {
        "tag": "Be prepared",
        "flavor": "Preparar-se (Atributo Adequado)",
        "trigger": "Quando você investe tempo e recursos significativos para se preparar para uma situação futura",
        "description": "<p>Sucesso na preparação se traduz em pontos de preparação, cada ponto pode ser consumido como bônus em uma ou mais rolagens coerentes com a preparação. Você não pode se preparar mais de uma vez para a mesma situação. Os pontos são perdidos caso você não os utilize na situação para à qual se preparou.</p>",
        "sucessoCritico": "<p>Sucesso Crítico => Você ganha 3 pontos, e um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você ganha 3 pontos de preparação</p>",
        "parcial": "<p>Parcial => Você ganha 1 ponto de preparação, mas paga um preço</p>",
        "falha": "<p>Falha => Você fica afetado emocionalmente e não consegue garantir nenhum ponto de preparação</p>",
        "falhaCritica": "<p>Falha Crítica => Você fica afetado emocionalmente e não consegue garantir nenhum ponto de preparação, e paga um preço extra</p>"
    },
    {
        "tag": "Help",
        "flavor": "Ajudar (Atribute Adequado)",
        "trigger": "Você ajuda um aliado em uma ação. Se estiver em combate e em condições de ajudar, custa uma ação.",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => Você concede uma vantagem ao aliado e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você concede uma vantagem ao aliado</p>",
        "parcial": "<p>Parcial => Você concede uma vantagem ao aliado, mas sofre uma consequência</p>",
        "falha": "<p>Falha => Você não concede vantagem ao aliado e sofre uma consequência</p>",
        "falhaCritica": "<p>Falha Crítica => Você não concede vantagem ao aliado, sofre uma consequência e causa um problema adicional</p>"
    },
    {
        "tag": "Disturb",
        "flavor": "Atrapalhar (Atributo Adequado)",
        "trigger": "Você atrapalha um inimigo em uma ação. Se estiver em combate e em condições de atrapalhar, custa uma ação.",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => Você concede uma desvantagem ao inimigo e recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => Você concede uma desvantagem ao inimigo</p>",
        "parcial": "<p>Parcial => Você concede uma desvantagem ao inimigo, mas sofre uma consequência</p>",
        "falha": "<p>Falha => Você não concede desvantagem ao inimigo e sofre uma consequência</p>",
        "falhaCritica": "<p>Falha Crítica => Você não concede desvantagem ao inimigo, sofre uma consequência e causa um problema adicional</p>"
    },
    {
        "tag": "Spout Lore",
        "flavor": "Acessar Lore (Inteligência)",
        "trigger": "Quando você acessar o conhecimento acumulado de seu personagem sobre algo",
        "description": "Os resultados desta rolagem se traduzem em pontos de lore, um ponto de lore pode ser usado para fazer uma das seguintes perguntas: <br><ul><li>O que eu sei sobre o passado deste assunto?</li><li>O que de urgente que eu sei, que provavelmente esta relacionado a este assunto?</li><li>O que eu suspeito sobre o provavel desenrolar deste assunto?</li></ul><h4>Se rolar crítico ganha acesso a uma das seguintes perguntas se aplicável:</h4><ul><li>Que segredo eu escondo que revela que eu contribuí significativamente para o sucesso ou fracasso deste assunto?</li><li>Que relação ou relacionamento prévio, positivo ou negativo eu possuo com os principais envolvidos neste assunto? (Você precisa ter conhecimento sobre algum envolvido)</li><li>Quem eu conheço, jogador ou NPC, que eu sei que contribuiu significativamente para o sucesso ou fracasso deste assunto?</li></ul>",
        "sucessoCritico": "<p>Sucesso Crítico => Você ganha 3 ponto de lore e pode fazer uma pergunta crítica</p>",
        "sucesso": "<p>Sucesso => Você ganha 3 pontos de lore</p>",
        "parcial": "<p>Parcial => Você ganha 1 ponto de lore, mas paga um preço</p>",
        "falha": "<p>Falha => Você não sabe nada a respeito deste assunto</p>",
        "falhaCritica": "<p>Falha Crítica => Você ganha 1 ponto de lore, mas a resposta deve obrigatóriamente prejudicar o grupo e você é obrigado a gastar.</p>"
    },
    {
        "tag": "Discern Realities",
        "flavor": "Discernir a Realidade (Sabedoria)",
        "trigger": "Você examina um ambiente em busca de informações ou detalhes",
        "description": "O resultado desta rolagem se traduz em pontos de discernimento, um ponto de discernimento pode ser usado para fazer uma das seguintes perguntas: <br><ul><li>O que aconteceu aqui recentemente?</li><li>O que está para acontecer aqui agora?</li><li>O que eu deveria procurar por aqui?</li><li>O que eu considero útil ou valioso aqui?</li><li>Quem realmente está no controle deste lugar?</li><li>O que não é realmente o que parace aqui?</li></ul><h4>Se rolar crítico ganha acesso a uma das seguintes perguntas se aplicável:</h4><ul><li>Que segredo oculto este lugar esconde?</li><li>Quem é responsável pelo que está acontecendo aqui?</li><li>Quem eu conheço, do meu grupo ou NPC, que eu sei que contribuiu significativamente para o que está acontecendo aqui?</li></ul>",
        "sucessoCritico": "<p>Sucesso Crítico => Você ganha 3 pontos de discernimento, e pode fazer uma pergunta crítica</p>",
        "sucesso": "<p>Sucesso => Você ganha 3 pontos de discernimento</p>",
        "parcial": "<p>Parcial => Você ganha 1 ponto de discernimento e paga um preço</p>",
        "falha": "<p>Falha => Você não consegue perceber nada além do que está vendo com seus olhos</p>",
        "falhaCritica": "<p>Falha Crítica => Você ganha 1 ponto de discernimento, mas a resposta deve obrigatóriamente prejudicar o grupo e você é obrigado a gastar.</p>"
    },
    {
        "tag": "Parley",
        "flavor": "Negociar (Carisma)",
        "trigger": "Você tenta convencer um NPC a fazer algo por você",
        "description": "Se você estiver oferecendo algo em troca, ou se o NPC estiver disposto a fazer o que você pede, você rola com vantagem. Se você estiver tentando convencer o NPC a fazer algo que ele não quer, você deve rolar com desvantagem. Se estiver pedindo algo obviamente muito prejudicial ao NPC ele simplesmente nega, a menos que esteja sob efeitos de manipulação sobrenaturais.",
        "sucessoCritico": "<p>Sucesso Crítico => O NPC faz o que você pede e oferece algo extra</p>",
        "sucesso": "<p>Sucesso => O NPC faz o que você pede</p>",
        "parcial": "<p>Parcial => O NPC faz o que você pede, mas pede algo em troca</p>",
        "falha": "<p>Falha => O NPC não faz o que você pede</p>",
        "falhaCritica": "<p>Falha Crítica => O NPC não faz o que você pede, e isto gera um vínculo negativo entre vocês dois</p>"
    },
    {
        "tag": "Undertake a Perilous Journey",
        "flavor": "Empreender uma jornada perigosa (Sabedoria)",
        "trigger": "Você parte em uma jornada perigosa",
        "description": "Você deve escolher três papeis no grupo, um membro deve ser o desbravador, outro o batedor e outro o contramestre. Cada um faz uma rolagem.",
        "sucessoCritico": "<p>Sucesso Crítico => O contramestre reduz o custo de rações para zero. O desbravador reduz o tempo de viagem para o mínimo possível. O batedor vai notar todos os perigos rápido o bastante para vocês entrem em combate surpreendendo os adversários.</p>",
        "sucesso": "<p>Sucesso => O contramestre reduz o custo de rações pela metade. O desbravador reduz o tempo normal de viagem pela metade. O batedor vai notar os perigos rápido o bastante para que vocês não sejam surpreendidos.</p>",
        "parcial": "<p>Parcial => O contramestre garante que o custo em raçãos seja o normal. O desbravador garante que o tempo de viagem seja o normal. Para cada perigo que surgir, o batedor deve fazer uma rolagem de 50% de chances de sucesso, se obtiver sucesso, vocês não são supreendidos, se falhar, são surpreendidos.</p>",
        "falha": "<p>Falha => O contramestre perde o controle e faz com que o custo de rações seja o dobro do normal. O desbravador se perde no caminho, e faz com que a jornada leve o dobro do tempo. O batedor não consegue notar os perigos e em todos os combates vocês são surpreendidos.</p>",
        "falhaCritica": "<p>Falha Crítica => O contramestre comete uma gafe e faz com que a equipe perda todas as suas rações. O desbravador se perde completamente, e faz com que o grupo caia em uma armadilha terrível ou se perdam completamente. O batedor não só não percebe os perigos, o que faz com que o grupo seja surpreendido em todos os combates desta jornada, como também coloca o grupo em perigos desnecessários.</p>"
    },
    {
        "tag": "Make Camp (Destreza)",
        "flavor": "Montar Acampamento",
        "trigger": "Você monta acampamento para descansar e se recuperar",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => O acampamento é bom o suficiente para que vocês façam descansos curtos ou longos, e vocês ganham um benefício extra</p>",
        "sucesso": "<p>Sucesso => O acampamento é bom o suficiente para que vocês façam descansos curtos ou longos</p>",
        "parcial": "<p>Parcial => O acampamento é bom o suficiente apenas para descansos curtos</p>",
        "falha": "<p>Falha => Vocês não conseguem montar o acampamento, e desperdiçam material</p>",
        "falhaCritica": "<p>Falha Crítica => Além de não conseguir montar o acampamento e desperdiçar material, vocês se colocam em perigo iminente.</p>"
    },
    {
        "tag": "Face the consequences",
        "flavor": "Enfrentar as Consequências (Carisma)",
        "trigger": "Quando você volta para um lugar onde tenha feito algo que possa ter consequências negativas",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => As pessoas não se lembram ou não ligam mais do que você fez, e você recebe um benefício extra</p>",
        "sucesso": "<p>Sucesso => As pessoas não se lembram ou não ligam mais para o que você fez.</p>",
        "parcial": "<p>Parcial => As pessoas ainda se lembram do que você fez, mas não farão mal imediato por causa disso.</p>",
        "falha": "<p>Falha => As pessoas se lembra e se importam com o que você fez, você pode estar sendo procurado pelas autoridades, ou sua cabeça pode estar a prêmio, se te reconhecerem vão tentar fazer você pagar.</p>",
        "falhaCritica": "<p>Falha Crítica => Aquilo que você fez se tornou um símbolo negativo neste lugar, você é tido como um ser despresível, e as pessoas serão hostís com você, até quem não te conhece mas foi manipulado pela midia local.</p>"
    },
    {
        "tag": "Recruit",
        "flavor": "Recrutar (Carisma)",
        "trigger": "Quando você espalha notícias de que está buscando aliados ou seguidores",
        "description": "Esta rolagem é afetada por bônus iniciais. Você ganha: <ul><li>+1 se você disser que o pagamento é generoso</li><li>+1 se disser exatamente o motivo pelo qual você os está recrutando</li><li>+1 se você disser que ficarão com uma parte dos lucros</li></ul>",
        "sucessoCritico": "<p>Sucesso Crítico => Você consegue encontrar vários interessados habilidosos que pedem preço justo, e você tem informações privilegiadas que podem te dar vantagem na negociação</p>",
        "sucesso": "<p>Sucesso => Você consegue encontrar vários interessados habilidosos que pedem preço justo</p>",
        "parcial": "<p>Parcial => Você consegue encontrar um interessado habilidoso que pede preço abusivo, e interssados por preços justos, porém bastante incapazes</p>",
        "falha": "<p>Falha => Você não consegue encontrar interessados</p>",
        "falhaCritica": "<p>Falha Crítica => Você não consegue encontrar interessados, e a sua busca incomoda a comunidade local, você fere algum costumo ou crensça local</p>"
    },
    {
        "tag": "Partying",
        "flavor": "Farrear (Carisma)",
        "trigger": "Quando você participa ativamente de uma festa ou celebração, você deve rolar 1d10 moedas de prata",
        "description": "Para fazer valer o farrear, antes você deve rolar 1d10 moedas de prata, se você gastar o resultado ou tudo o que tiver, se não tiver o bastante, rola com vantagem. Se for uma festa sem custos e você foi convidado, role com vantagem, se for um intruso, role com desvantagem. Se ficar na festa, mas não participar, não role. Se for uma festa particular e você foi convidado, role normal de quiser farrear. O resultado desta rolagem é baseado em pontos de farra, um ponto de farra pode ser usado para fazer uma dos seguintes benefícios: <br><ul><li>Torne-se amigo de um NPC útil</li><li>Você houve rumores a respeito de uma boa oportunidade</li><li>Você adquire informações úteis</li><li>Você não é prezo, infeitiçado ou enganado</li></ul><h4>Se rolar crítico ganha acesso a um dos seguintes benefícios:</h4><ul><li>Você se torna amigo de alguém importante na comunidade local</li><li>Alguém importante da comunidade local se apaixona por você</li></ul>",
        "sucessoCritico": "<p>Sucesso Crítico => Você ganha 3 pontos de farra e pode gastar um com os benefícios críticos</p>",
        "sucesso": "<p>Sucesso => Você ganha 3 pontos de farra</p>",
        "parcial": "<p>Parcial => Você ganha 1 ponto de farra, mas paga um preço</p>",
        "falha": "<p>Falha => Você não consegue se divertir, está preocupado(a), ansioco(a) ou tenso(a)</p>",
        "falhaCritica": "<p>Falha Crítica => Você perde o controle da farra e causa problemas! Gaste um ponto de farra para escolher um dos benefícios, incluindo os críticos, o benefício se volta contra você</p>"
    },
    {
        "tag": "Refil",
        "flavor": "Reabastecer (Carisma)",
        "trigger": "Você reabastece seus suprimentos e equipamentos",
        "description": "",
        "sucessoCritico": "<p>Sucesso Crítico => Você consegue encontrar o que procura (se coerente), e com descontos!</p>",
        "sucesso": "<p>Sucesso => Você consegue encontrar o que procura (se coerente) a preços justos</p>",
        "parcial": "<p>Parcial => Você consegue encontrar o que procura (se coerente), mas a preços abusivos</p>",
        "falha": "<p>Falha => Você não consegue se abastecer neste lugar</p>",
        "falhaCritica": "<p>Falha Crítica => Além de não conseguir se abastecer, sua busca incomoda a comunidade local</p>"
    },
    {
        "tag": "Last Breath",
        "flavor": "Último Suspiro (Carisma)",
        "trigger": "Quando você falha nos passos da morte, terá que encarar o terrível deus da morte",
        "description": "Seu coração para e você abre os olhos e está diante dos portões negros do reino da morte, você adentra e um ser encapuzado com uma foice está sentado em um gigante trono negro, você está em choque",
        "sucessoCritico": "<p>Sucesso Crítico => O deus da morte gostou muito de você, ele permitirá que você volte e reconstruirá seu corpo, caso o tenha perdido, e estará amaldiçoado</p>",
        "sucesso": "<p>Sucesso => O deus da morte gostou de você, ele permitirá que você volte se ainda tiver um corpo para voltar, e você estará amaldiçoado</p>",
        "parcial": "<p>Parcial => Você é só mais um para o deus da morte, ele permite que você retorne em espírito, se desejar</p>",
        "falha": "<p>Falha => O deus da morte não gostou de você, não haverá retorno, será julgado e sua alma lançada ao seus destino final</p>",
        "falhaCritica": "<p>Falha Crítica => O deus da morte te detesta, você morre e será confinado ao sofrimento eterno</p>"
    },
    {
        "tag": "End of Session",
        "flavor": "Fim da Sessão (Esta rolagem não importa)",
        "trigger": "Você encerra uma sessão de jogo",
        "description": "O resultado desta rolagem é baseado em pontos de avanço, você ganha um ponto de avanço para cada pergunta respondida com sim: <br><ul><li>Você descobriu algo novo e importante sobre o mundo?</li><li>Você superou um desafio significativo?</li><li>Você fez alguma ação significativa que demonstra claramente o seu alinhamento?</li><li>Você teve que sacrificar alguma coisa importante em detrimento a suas crenças?</li><li>Você resolveu algum vínculo com algúem ou com o mundo de jogo?</li><li>Você criou um novo vínculo com alguém ou com o mundo de jogo?</li></ul>",
        "sucessoCritico": "<p>Sucesso Crítico => Esta rolagem não importa</p>",
        "sucesso": "<p>Sucesso => Esta rolagem não importa</p>",
        "parcial": "<p>Parcial => Esta rolagem não importa</p>",
        "falha": "<p>Falha => Esta rolagem não importa</p>",
        "falhaCritica": "<p>Falha Crítica => Esta rolagem não importa</p>"
    }
];
