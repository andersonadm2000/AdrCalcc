# 🧮 CalccPro - Calculadora Científica & Hub Web

O **CalccPro** é uma aplicação web leve e responsiva de calculadora científica inspirada na interface da clássica Casio FX-991, com suporte a funções matemáticas, trigonometria em graus/radianos, cálculo de precisão e integração com conteúdos externos através de gatilhos numéricos.

🚀 **Acesse a versão ao vivo:** [CalccPro](https://andersonadm2000.github.io/Calccpro/)

---

## 🔒 Transparência e Segurança

Este repositório é **open-source**, permitindo que o código da aplicação seja consultado e verificado publicamente.

- 🛡️ **Processamento local:** Os cálculos são executados diretamente no navegador através de JavaScript.
- ⚡ **Execução Client-Side:** A lógica principal da calculadora e da interface funciona no próprio navegador do usuário.
- 🔓 **Código-fonte público:** O código da aplicação está disponível neste repositório para consulta.
- 🚫 **Sem sistema próprio de contas:** A aplicação não possui login ou cadastro de usuários.

> **Observação:** a aplicação utiliza recursos externos públicos, como Tailwind CSS via CDN, Font Awesome e Google Fonts, além dos endereços externos utilizados pelos gatilhos de navegação.

---

## 🧮 Funções da Calculadora

O CalccPro possui uma interface inspirada em calculadoras científicas tradicionais, incluindo:

- Operações básicas: `+`, `-`, `×`, `÷`
- Parênteses
- Números decimais
- Potenciação `xⁿ`
- Raiz quadrada `√`
- Fatorial `x!`
- Porcentagem `%`
- Constante π
- Constante de Euler `e`
- `sin`
- `cos`
- `tan`
- `log`
- `ln`
- `Ans` para reutilizar o último resultado
- Alternância entre **DEG** e **RAD**
- Teclado físico para utilização pelo computador
- Botão `AC` para limpar a expressão
- Botão `DEL` para apagar caracteres

---

## 🔒 Gatilhos Secretos

A calculadora possui comandos especiais que podem ser digitados diretamente no teclado numérico e confirmados com `=`.

| Comando | Conteúdo | Navegação |
| :--- | :--- | :--- |
| `+0001=` | Crazy Games | 🆕 Nova aba |
| `+0002=` | Poki | 🆕 Nova aba |
| `+0003=` | freegames.io | 🖥️ Mesma aba |
| `+0004=` | Drift Hunters | 🖥️ Mesma aba |
| `+0005=` | Tycoon Farm | 🖥️ Mesma aba |
| `+1917=` | Página de jogos casuais simples | 🖥️ Mesma aba |
| `++1917=` | Emulador online de consoles clássicos | 🖥️ Mesma aba |
| `+++1917=` | Jogos360.com | 🖥️ Mesma aba |

### Como funciona

Os gatilhos `+0001=` e `+0002=` abrem seus respectivos conteúdos em **uma nova aba do navegador**, utilizando `window.open()`.

A partir do gatilho `+0003=`, os conteúdos são carregados na **mesma aba**, através do overlay interno da aplicação e de um `iframe`.

Para fechar o conteúdo exibido no overlay, basta utilizar o botão **X** no canto superior direito ou pressionar a tecla `ESC`.

---

## 🖥️ Overlay de Navegação

Os conteúdos carregados pelos gatilhos internos são exibidos através de uma camada sobre a calculadora.

O overlay possui:

- Barra superior de navegação.
- Botão para fechar o conteúdo.
- Suporte à tecla `ESC`.
- `iframe` em tela cheia.
- Botões de acesso ao GitHub e Instagram.
- Os botões do criador são exibidos temporariamente por **10 segundos** após a abertura do overlay.

---

## 👨‍💻 Código-fonte

O projeto possui código-fonte aberto para consulta e verificação:

**GitHub:** https://github.com/andersonadm2000/Calccpro

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura da aplicação
- **CSS3** — Estilos e efeitos visuais
- **JavaScript ES6+** — Lógica da calculadora e manipulação do DOM
- **Tailwind CSS** — Estilização responsiva através de CDN
- **Font Awesome 6.4.0** — Ícones da interface
- **Google Fonts** — JetBrains Mono e Plus Jakarta Sans
- **Iframe** — Exibição dos conteúdos internos

---

## 👨‍💻 Autor

Desenvolvido por **Anderson da Rocha Pires**

- Instagram: [@p.rochaxy_](https://www.instagram.com/p.rochaxy_?stkn=MTg1dHRrY25zMHRqbQ==)
- GitHub: https://github.com/andersonadm2000

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

Consulte o arquivo [`LICENSE`](LICENSE) para obter os termos completos da licença.
