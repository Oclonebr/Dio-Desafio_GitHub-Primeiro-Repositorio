# HTML
### Descrição
Html é uma linguagem de marcação que teve sua primeira versão em 1991, atualmente utilizamos a versão HTML5 apresentada em 2014.

### Elementos do HTML 
 - Tags
 - Atributos
 - Conteúdo

 ### Estrutura básica
<!DOCTYPE HMTL>
 < html >
 < head >
 < meta >
 < title >< /title >
 < /head >
 < body >
 < /body >
 < /html >
 
 ### Descrição da estrutura
 #### < html >

A tag html é a raiz do seu documento, todos os elementos HTML devem estar dentro dela. E nela nós informamos ao navegador qual é o idioma desse nosso documento, através do atributo lang, para o português brasileiro usamos pt-BR.

#### < head >

A tag head contém elementos que serão lidos pelo navegador, como os metadados - um exemplo é o charset, que é a codificação de caracteres e a mais comum é a UTF-8, o JavaScript com a tag script, o CSS através das tags style e link - veremos a diferença quando falarmos sobre CSS - e o título da página com a tag title.

##### < body >

E dentro da tag body colocamos todo o conteúdo visível ao usuário: textos, imagens, vídeos.

### Tag de link
A tag **< a hfer="LINK" >** é usada para aderir um link dentro da pagina, no entanto o link substitui a pagina aberta e  para mudar esse comportamento é necessario usar o atributo **(target="_Blank")** .
 Se o Link for direcionado a um email é necessario usar o prefixo **(mailto:)**, ficando assim:
 **< a href="mailto:Exemplo@email.com" >**

 ### Tag de imagens
Para adicionar uma imagem ao codigo html é necessario utilizar a tag: 
**< img scr=Caminho da foto >**
Caso queira adicionar descrição a imagem utiliza-se o atributo alt, ficando assim:
**< img alt="descrição" >**

### Tag de lista
A tag **< ul >** é uma lista onde a ordem dos intens não são tão importantes, diferente da tag **< ol >** pois nela a um representação com letras ou numeros e **< li >** seria um item dessa lista.


