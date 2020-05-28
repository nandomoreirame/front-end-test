# Teste de Front-end XP Inc

Este repositório contém o teste para a vaga desenvolvedor front-end com o node (v14.3.0) instalado.

### `npm install`

Instala as dependências do node

### `npm start`

Cria o servidor de testes locais

## Arquitetura de Arquivos

 - `./src` -- Arquivos `.js` de configuração de libs
 - `./src/assets` -- Arquivos que serão utilizados para simular sua API!
 - `./src/pages` -- Arquivos `.js` que descrevem componentes React que representam uma página acessável pelo Router, ou pastas contendo um componente React principal agregador e subcomponentes específicos
 - `./src/state` -- Arquivos `.js` de slices do Redux Toolkit que abrigam o estado global da aplicação

# Como funciona o teste

Primeiramente o objetivo do teste é avaliar sua capacidade de lidar com todas as etapas comuns de desenvolvimento React que utilizará no seu dia a dia na empresa. O teste foi feito para o nível Júnior, mas no front-end sempre há espaço para inovações, mesmo com os requisitos mais simples!

## Os requisitos Funcionais

 - **Página de Login**: Nesta página o usuário deverá acessar a plataforma, inserindo seu usuário e senha, sendo redirecionado para a página de propriedades se usuário e senha estiverem corretos, e exibindo um erro se houver algum dado incorreto;
 - **Página de Propriedades**: Esta página deverá exibir as propriedades associadas com seu usuário, ou exibir todas caso seja do perfil `admin`. A forma de exibir as informações e quais informações deve exbibir fica a gosto de você! E sinta-se livre para inovar nos tipos de informações que podem ser apresentados.

## Os requisitos Técnicos

 - O conteúdo de dados da aplicação deverá ser gerenciado pelo Redux, de preferência utilizando o *redux-toolkit*, mas com liberdade para utilizar *redux* puro;
 - Os componentes visuais precisam ser desenvolvidos utilizando a *Material-UI* que já está instalada no template;
 - Os dados da "API" que está na pasta assets podem ser acessadas diretamente como JSON, não há necessidade de simular um `fetch`.
 
## Sobre o template

Já existem algumas *libs* instaladas no template, e com elas você consegue cumprir muito bem o proposto. No entanto se sentir necessidade de mais alguma ferramenta, você pode inclui-la sem problema nenhum. Na verdade você pode modificar qualquer parte do template, exceto os dados da pasta `assets`!

No momento que instalar e rodar o servidor local, você perceberá que haverá um erro no `App.js`, isto está acontecendo pois ainda não há um componente para o Login nem para as Propriedades, e você que irá providênciá-los.

## Forma de avaliação

-- O mais importante do teste é o cumprimento dos Requisitos Funcionais e Técnicos!

-- A clareza do seu código também será avaliada.

-- Assim como a organização dos arquivos.

-- A natureza dos dados das fazendas é um tanto quanto permissiva, isto pode ser explorado mais a fundo para se obter *bonus points*!

-- A identidade visual e UX do teste também será avaliada como *bonus points*!

 

 