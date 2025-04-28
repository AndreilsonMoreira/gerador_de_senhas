const tiposServicos = [
    'Redes Sociais',
    'Mensageria',
    'Serviços de Nuvem',
    'Bancos e Financeiros',
    'Ferramentas de Desenvolvimento',
    'Infraestrutura (Hospedagem, VPS, VPN)',
    'Serviços de Registro de Domínios',
    'Segurança',
    'Outros'
];

const servicos = {
    // Redes Sociais
    "Redes Sociais": [
        "Google",
        "Github",
        "Linkedin",
        "Instagram",
        "Facebook",
        "Twitter",
        "Discord",
        "Telegram",
        "WhatsApp"
    ],

    // Mensageria
    "Mensageria": [
        "E-mail",
        "Outlook",
        "Yahoo Mail",
        "ProtonMail"
    ],

    // Serviços de Nuvem
    "Serviços de Nuvem": [
        "Heroku",
        "AWS",
        "Azure",
        "Google Cloud",
        "Digital Ocean",
        "Dropbox"
    ],

    // Bancos e Financeiros
    "Bancos e Financeiros": [
        "Nubank",
        "Inter",
        "PayPal",
        "PicPay",
        "PagSeguro",
        "Banco do Brasil",
        "Bradesco",
        "Itaú",

    ],

    // Ferramentas de Desenvolvimento
    "Ferramentas de Desenvolvimento": [
        "Postman",
        "GitLab",
        "Bitbucket",
        "Trello",
        "Notion",
        "Jira"
    ],

    // Infraestrutura (Hospedagem, VPS, VPN)
    "Infraestrutura (Hospedagem, VPS, VPN)": [
        "Hostinger",
        "Vps",
        "Vpn",
        "Cloudflare",
        "Namecheap",
        "GoDaddy"
    ],

    // Serviços de Registro de Domínios
    "Serviços de Registro de Domínios": [
        "registroBR",
    ],

    // Segurança
    "Segurança": [
        "Kaspersky",
        "NordVPN",
        "Avast",
        "Bitdefender"
    ],

    // Streaming
    "Streaming": [
        "Netflix",
        "Spotify",
        "Amazon Prime Video",
        "Disney+",
        "Apple Music",
        "YouTube Premium",
        "'HBO Max"

    ],

    // E-commerce
    "E-commerce": [
        "Mercado Livre",
        "AliExpress",
        "Shopee",
        "Amazon",
        "Magazine Luiza",
        "Americanas"
    ],

    // Outros
    "Outros": [
        "Outro",
        "Steam",        
        "Zoom",
        "Coursera",
        "Udemy",
        "Apple",
        "Microsoft"
    ]
};

const chaveMapeada = {
    // Redes Sociais
    'Google': { prefixo: '$BY', sufixo: '*%' },
    'Github': { prefixo: '&*K', sufixo: '^#' },
    'Linkedin': { prefixo: 'KI', sufixo: '$**' },
    'Instagram': { prefixo: '%MH*', sufixo: '#' },
    'Facebook': { prefixo: '@FB', sufixo: '^&' },
    'Twitter': { prefixo: '@TW', sufixo: '##' },
    'Discord': { prefixo: 'P*%', sufixo: '&^W' },
    'Telegram': { prefixo: '#TG', sufixo: '*%' },
    'WhatsApp': { prefixo: 'WA&', sufixo: '^@' },

    // E-mail
    'E-mail': { prefixo: 'Z@', sufixo: '' },
    'Outlook': { prefixo: 'OUT$', sufixo: '#1' },
    'Yahoo Mail': { prefixo: 'YH-', sufixo: '@@' },
    'ProtonMail': { prefixo: 'PM%', sufixo: '*!' },

    // Serviços de Nuvem
    'Heroku': { prefixo: 'U&%t', sufixo: '$K' },
    'AWS': { prefixo: 'AW$', sufixo: '%!' },
    'Azure': { prefixo: 'AZ#', sufixo: '@2' },
    'Google Cloud': { prefixo: 'GC*', sufixo: '99' },
    'Digital Ocean': { prefixo: '!%^', sufixo: 'D-o' },
    'Dropbox': { prefixo: 'DB%', sufixo: '&3' },

    // Bancos e Financeiros
    'Nubank': { prefixo: '7%^', sufixo: '$AT!' },
    'Inter': { prefixo: '**&', sufixo: '@$%' },
    'PayPal': { prefixo: 'PP$', sufixo: '*&2' },
    'PicPay': { prefixo: 'PC^', sufixo: '%4' },
    'PagSeguro': { prefixo: 'PS#', sufixo: '88' },
    'Banco do Brasil': { prefixo: 'BB$', sufixo: '99@' },
    'Bradesco': { prefixo: 'BRD&', sufixo: '00' },
    'Itaú': { prefixo: 'IT@', sufixo: '#&' },

    // Ferramentas de Desenvolvimento
    'Postman': { prefixo: '&O%', sufixo: '$Q' },
    'GitLab': { prefixo: 'GL*', sufixo: '^9' },
    'Bitbucket': { prefixo: 'BBK%', sufixo: '@#' },
    'Trello': { prefixo: 'TR#', sufixo: '2@' },
    'Notion': { prefixo: 'NT$', sufixo: '*&' },
    'Jira': { prefixo: 'JR%', sufixo: '^8' },

    // Infraestrutura (Hospedagem, VPS, VPN)
    'Hostinger': { prefixo: '+$*', sufixo: 'H@R' },
    'Vps': { prefixo: '@&*', sufixo: 'HPP' },
    'Vpn': { prefixo: '@&*', sufixo: 'HnP' },
    'Cloudflare': { prefixo: 'CF$', sufixo: '@&%' },
    'Namecheap': { prefixo: 'NC@', sufixo: '*5' },
    'GoDaddy': { prefixo: 'GD#', sufixo: 'GO!' },

    // Serviços de Registro de Domínios
    'registroBR': { prefixo: '#%*', sufixo: 'RbR' },

    // Segurança
    'Kaspersky': { prefixo: '[&%', sufixo: '$K@' },
    'NordVPN': { prefixo: 'NV#', sufixo: '9&' },
    'Avast': { prefixo: 'AV$', sufixo: '^1' },
    'Bitdefender': { prefixo: 'BD%', sufixo: '*#' },

    // Streaming
    'Netflix': { prefixo: 'NF#', sufixo: '$@' },
    'Spotify': { prefixo: 'SP$', sufixo: '&*' },
    'Amazon Prime Video': { prefixo: 'APV%', sufixo: '#9' },
    'Disney+': { prefixo: 'DSN#', sufixo: '%+' },
    'Apple Music': { prefixo: 'AM$', sufixo: '^@' },
    'YouTube Premium': { prefixo: 'YT#', sufixo: '@#' },
    'HBO Max': { prefixo: 'HB$', sufixo: '%*' },

    // E-commerce
    'Mercado Livre': { prefixo: 'ML$', sufixo: '^#' },
    'AliExpress': { prefixo: 'AE#', sufixo: '5@' },
    'Shopee': { prefixo: 'SH$', sufixo: '*9' },
    'Amazon': { prefixo: 'AMZ#', sufixo: '33' },
    'Magazine Luiza': { prefixo: 'MGL$', sufixo: '6%' },
    'Americanas': { prefixo: 'AMC$', sufixo: '@8' },

    // Outros
    'Outro': { prefixo: '&%', sufixo: '$*@' },
    'Steam': { prefixo: 'STM#', sufixo: 'X9' },
    'Zoom': { prefixo: 'ZM$', sufixo: '2*' },
    'Coursera': { prefixo: 'CS#', sufixo: '^%' },
    'Udemy': { prefixo: 'UDM$', sufixo: '&@' },
    'Duolingo': { prefixo: 'DUO#', sufixo: '3&' },

    // Outros de sistema
    'Apple': { prefixo: '@PP', sufixo: '^L' },
    'Microsoft': { prefixo: 'TF@', sufixo: '9*' }
};


window.onload = () => {
    tipoServico();
}

function mostrarSenha() {
    const palavraPasse = document.getElementById('palavraPasse');
    if (palavraPasse.type === "password") {
        palavraPasse.type = "text";
    } else {
        palavraPasse.type = "password";
    }
}

function gerarSenha() {
    const palavraPasse = document.getElementById('palavraPasse').value;
    const servico = document.getElementById('selectServico').value;
    const feedback = document.getElementById('feedback');
    const divSenhaGerada = document.getElementById('divSenhaGerada');

    if (!palavraPasse) {
        feedback.textContent = 'Por favor, insira uma palavra passe!';
        feedback.className = 'error';
        return;
    }

    feedback.textContent = '';  // Limpar feedback anterior

    // Gerar uma senha mais forte (aleatória, com caracteres especiais e números)
    const senhaGerada = gerarSenhaAleatoria(palavraPasse, servico);   
    document.getElementById('senhaGerada').value = senhaGerada;
    
    //Exibe o campo da senha gerada
    if(senhaGerada.length>0)
        divSenhaGerada.style.display = "block";



    // Feedback de sucesso
    feedback.textContent = 'Senha gerada com sucesso!';
    feedback.className = 'feedback';
}

function gerarSenhaAleatoria(palavraPasse, servico) {

    const mapeamento = chaveMapeada[servico];
    const hashHex = md5(palavraPasse+servico);

    let chave = `${mapeamento.prefixo}${hashHex}${mapeamento.sufixo}`;
  
    // Copiar para área de transferência
    navigator.clipboard.writeText(chave).then(() => {
        console.log('Senha copiada com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar senha:', err);
    });

    return chave;
}

function copiarSenha() {
    const senhaGerada = document.getElementById('senhaGerada');
    navigator.clipboard.writeText(senhaGerada).then(() => {
        console.log('Senha copiada com sucesso!');
    }).catch(err => {
        console.error('Erro ao copiar senha:', err);
    });
    alert('Senha copiada para a área de transferência!');
}

function tipoServico() {
    const servico = document.getElementById('tiposServico');
    tiposServicos.forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t;
        servico.appendChild(opt);
    })
    selectServico();
}
function selectServico() {
    const tipoServico = document.getElementById('tiposServico').value;
    const servico = document.getElementById('selectServico');
    servico.innerHTML = "";
    servicos[tipoServico].forEach((t) => {
        const opt = document.createElement("option");
        opt.value = t;
        opt.textContent = t;
        servico.appendChild(opt);
    })

}

