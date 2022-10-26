        var Drofo = ["Anel da invisibilidade", "Um par de botas mágicas", "Um par de botas mágicas", "Poção do sono", "Poção da inocência", "Poção da inocência"];
        var Torper = ["Capa da invisibilidade", "Pedra do despertar", "Varinha das varinhas", "Poção da inocência", "Poção da mentira", "Poção da mentira", "Poção anti-inteligência"];

        //removendo pocao e pedra
        Torper.splice(4,1);
        Torper.splice(1,1);

        //adicionando escudo, espada e um par de botas do Drofo
        Torper.push(Drofo[1], "Escudo mágico", "Espada mágica");

        //adicionando par de botas, ovo e coxinha
        Drofo.push("Um par de botas mágicas", "Ovo de dragão", "Coxinha");

        //removendo par de botas e pocao, consumindo pocao do Toper
        Drofo.splice(1,1);
        Drofo.splice(2,1);
        Torper.splice(4,1);

        document.write("Inventário de Drofo depois da jornada: " + Drofo + "<br>");
        document.write("Inventário de Torper depois da jornada: " + Torper);