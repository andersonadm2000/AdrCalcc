🧮 CalccPro - Calculadora Científica & Hub Web

O CalccPro é uma aplicação web leve e responsiva de calculadora científica inspirada na interface da clássica Casio FX-991, com suporte a funções matemáticas, trigonometria em graus/radianos, cálculo de precisão e integração com conteúdos externos através de gatilhos numéricos.

🚀 Acesse a versão ao vivo:[CalccPro](https://calccpro.pages.dev/)

---

🔒 Transparência e Segurança

Este repositório é open-source, permitindo que o código da aplicação seja consultado e verificado publicamente.

- 🛡️ Processamento local: Os cálculos são executados diretamente no navegador através de JavaScript.
- ⚡ Execução Client-Side: A lógica principal da calculadora e da interface funciona no próprio navegador do usuário.
- 🔓 Código-fonte público: O código da aplicação está disponível neste repositório para consulta.
- 🚫 Sem sistema próprio de contas: A aplicação não possui login ou cadastro de usuários.

«Observação: a aplicação utiliza recursos externos públicos, como Tailwind CSS via CDN, Font Awesome e Google Fonts, além dos endereços externos utilizados pelos gatilhos de navegação.»

---

🧮 Funções da Calculadora

O CalccPro possui uma interface inspirada em calculadoras científicas tradicionais, incluindo:

- Operações básicas: "+", "-", "×", "÷"
- Parênteses
- Números decimais
- Potenciação "xⁿ"
- Raiz quadrada "√"
- Fatorial "x!"
- Porcentagem "%"
- Constante π
- Constante de Euler "e"
- "sin"
- "cos"
- "tan"
- "log"
- "ln"
- "Ans" para reutilizar o último resultado
- Alternância entre DEG e RAD
- Teclado físico para utilização pelo computador
- Botão "AC" para limpar a expressão
- Botão "DEL" para apagar caracteres

---

🔒 Gatilhos Secretos

A calculadora possui comandos especiais que podem ser digitados diretamente no teclado numérico e confirmados com "=".

| Comando | Conteúdo | Navegação |
|---|---|---|
| "0000=" | Acesso à proxy | 🆕 Nova aba após 5 segundos |
| "+0001=" | Crazy Games | 🆕 Nova aba após 5 segundos |
| "+0002=" | Poki | 🆕 Nova aba após 5 segundos |
| "+0003=" | freegames.io | 🆕 Nova aba após 5 segundos |
| "+0004=" | Drift Hunters | 🆕 Nova aba após 5 segundos |
| "+0005=" | Tycoon Farm | 🆕 Nova aba após 5 segundos |
| "+1917=" | Página de jogos casuais simples | 🆕 Nova aba após 5 segundos |
| "++1917=" | Emulador online de consoles clássicos | 🆕 Nova aba após 5 segundos |
| "+++1917=" | Jogos360.com | 🆕 Nova aba após 5 segundos |

Como funciona

Todos os gatilhos de navegação utilizam uma tela temporária de carregamento antes de abrir o conteúdo.

Ao confirmar um gatilho com "=", a aplicação exibe uma tela de carregamento durante aproximadamente 5 segundos, mostrando uma contagem regressiva:

5 → 4 → 3 → 2 → 1

Durante esse período, também ficam disponíveis os botões de acesso ao GitHub e Instagram.

Após a contagem, o conteúdo correspondente é aberto em uma nova aba do navegador.

O gatilho "0000=" possui uma tela específica, exibindo a mensagem "Carregando proxy" antes da abertura da proxy.

Os demais gatilhos utilizam a tela "Carregando URL", acompanhada da identificação do conteúdo que será aberto.

⚠️ Por que os conteúdos não são mais carregados dentro da calculadora?

Anteriormente, alguns conteúdos eram carregados diretamente dentro da aplicação através de "iframe" e determinados gatilhos utilizavam navegação na mesma aba.

Porém, esse método apresentou problemas em redes com bloqueios mais rígidos, especialmente em computadores de escolas.

Além disso, proxies e determinados serviços externos podem não permitir que seus conteúdos sejam incorporados em "iframe". Isso pode acontecer devido a políticas de segurança do próprio serviço, como restrições de incorporação ou cabeçalhos que impedem a exibição dentro de outra página.

Por esse motivo, o CalccPro utiliza atualmente a abertura em nova aba do navegador para os conteúdos externos.

Essa abordagem evita a dependência do carregamento desses serviços dentro de um "iframe".

---

🌐 Passo a passo: Proxy

A proxy deve ser considerada uma alternativa para situações em que os bloqueios de rede sejam muito fortes e determinados conteúdos não consigam ser acessados normalmente.

«⚠️ Importante: o uso da proxy é recomendado apenas em últimas instâncias. Como o conteúdo passa por uma camada intermediária, o carregamento pode ficar mais lento e o desempenho pode ser um pouco menor do que o acesso direto.»

1. Copie o link da calculadora

Primeiro, copie o endereço do CalccPro:

"https://calccpro.pages.dev/"

2. Abra a calculadora

Acesse o CalccPro normalmente pelo navegador.

3. Digite "0000="

Na calculadora, digite:

"0000="

Ao confirmar com "=", será iniciada a tela de carregamento da proxy.

A aplicação exibirá:

Carregando proxy

e iniciará uma contagem regressiva de:

5 → 4 → 3 → 2 → 1

Durante a contagem, os botões de acesso ao GitHub e Instagram também ficam disponíveis.

4. Acesse a proxy

Depois dos 5 segundos, a proxy será aberta em uma nova aba do navegador.

5. Cole o link da calculadora

Na página da proxy, localize o campo de pesquisa/endereço, normalmente identificado pelo ícone de lupa.

Cole nele o endereço:

"https://calccpro.pages.dev/"

Depois, confirme o acesso.

6. Utilize os gatilhos normalmente

Quando o CalccPro estiver sendo acessado através da proxy, você poderá utilizar os gatilhos normalmente.

Por exemplo:

"+0001="

"+0002="

"+0003="

"+0004="

"+0005="

"+1917="

"++1917="

"+++1917="

Os conteúdos serão abertos em novas abas do navegador, em vez de serem carregados dentro da página da calculadora.

A ideia é que a calculadora continue funcionando normalmente enquanto os conteúdos externos são acessados separadamente.

---

⚠️ Quando utilizar a proxy?

Prefira sempre o acesso direto ao CalccPro quando ele estiver funcionando normalmente.

Utilize a proxy somente quando houver bloqueios de rede muito fortes impedindo o acesso ou funcionamento adequado dos conteúdos.

Como existe uma camada intermediária entre o navegador e o conteúdo acessado, podem ocorrer:

- ⏳ Maior tempo de carregamento;
- 🐌 Desempenho um pouco menor;
- 🌐 Maior latência;
- ⚠️ Alguns conteúdos podem apresentar limitações dependendo da própria rede ou do serviço acessado.

Por isso, a proxy deve ser considerada uma alternativa de último recurso, e não o método padrão de utilização do CalccPro.

---

🖥️ Tela de Carregamento

Os conteúdos externos possuem uma tela temporária exibida antes da abertura da nova aba.

A tela possui:

- ⏳ Contagem regressiva de 5 segundos;
- 🔢 Contagem "5 → 4 → 3 → 2 → 1";
- 🌐 Identificação do tipo de carregamento;
- 🔗 Botão de acesso ao GitHub;
- 📸 Botão de acesso ao Instagram.

Carregamento de conteúdos

Para os gatilhos de conteúdo, a tela apresenta:

Carregando URL

seguido da identificação do conteúdo correspondente.

Carregamento da proxy

Para o gatilho "0000=", a tela apresenta:

Carregando proxy

seguido da contagem regressiva de 5 segundos.

Após o término da contagem, o endereço correspondente é aberto em uma nova aba.

🔒 Por que utilizar nova aba?

A abertura em nova aba foi adotada porque determinados serviços, incluindo proxies, não aceitam ou não permitem que seus conteúdos sejam exibidos dentro de "iframe".

Dessa forma, o CalccPro não depende da possibilidade de incorporação desses serviços na própria página.

---

👨‍💻 Código-fonte

O projeto possui código-fonte aberto para consulta e verificação:

GitHub:
https://github.com/andersonadm2000/Calccpro

---

🛠️ Tecnologias Utilizadas

- HTML5 — Estrutura da aplicação
- CSS3 — Estilos e efeitos visuais
- JavaScript ES6+ — Lógica da calculadora e manipulação do DOM
- Tailwind CSS — Estilização responsiva através de CDN
- Font Awesome 6.4.0 — Ícones da interface
- Google Fonts — JetBrains Mono e Plus Jakarta Sans
- "window.open()" — Abertura dos conteúdos externos em novas abas
- Proxy — Acesso alternativo em situações de bloqueio de rede

---

👨‍💻 Autor

Desenvolvido por Anderson da Rocha Pires

- Instagram: [@p.rochaxy_](https://www.instagram.com/p.rochaxy_?stkn=MTg1dHRrY25zMHRqbQ==)

- GitHub: [andersonadm2000](https://github.com/andersonadm2000)

---

📄 Licença

Este projeto está sob a licença MIT.

Consulte o arquivo "LICENSE" para obter os termos completos da licença.
