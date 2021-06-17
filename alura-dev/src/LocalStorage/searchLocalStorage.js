
const CODES = [
    {
        id:0,
        title: "Um código Javascript",
        description: "Um exemplo de código utilizando a linguagem Javascript",
        language: "javascript",
        bgColorClass: "bg-color-blue",
        totalOfComments: 31,
        totalOfLikes: 9,
        codeText: "    class MyClass {\n          public static myValue: string;\n          constructor(init: string) {\n          this.myValue = init;\n          }\n      }\n      import fs = require(\"fs\");\n      module MyModule {\n          export interface MyInterface extends Other {\n          myProperty: any;\n          }\n      }\n      declare magicNumber number;\n      myArray.forEach(() => { }); \n                  "
    },
    {
        id: 1,
        title: "Um código Json",
        description: "Um exemplo de código utilizando o JSON",
        language: "json",
        bgColorClass: "bg-color-green",
        totalOfComments: 18,
        totalOfLikes: 40,
        codeText: "     [\n          {\n              \"title\": \"apples\",\n              \"count\": [12000, 20000],\n              \"description\": {\"text\": \"...\", \"sensitive\": false}\n          },\n          {\n              \"title\": \"oranges\",\n              \"count\": [17500, null],\n              \"description\": {\"text\": \"...\", \"sensitive\": false}\n          }\n      ]"
    },
    {
        id: 2,
        title: "CSS",
        description: "Estilo aleatório para teste",
        language: "css",
        bgColorClass: "bg-color-pink",
        totalOfComments: 5,
        totalOfLikes: 3,
        codeText: "      @font-face {\n          font-family: Chunkfive; src: url('Chunkfive.otf');\n      }\n  \n      body, .usertext {\n          color: #F0F0F0; background: #600;\n          font-family: Chunkfive, sans;\n          --heading-1: 30px/32px Helvetica, sans-serif;\n      }\n  \n      @import url(print.css);\n      @media print {\n          a[href^=http]::after {\n              content: attr(href)\n      }"
    },
    {
        id: 3,
        title: "HTML5",
        description: "Estruturando uma código de forma semantica",
        language: "html",
        bgColorClass: "bg-color-orange",
        totalOfComments: 20,
        totalOfLikes: 10,
        codeText: "     \n      <!DOCTYPE html>\n      <title>Title</title>\n      \n      <style>body {width: 500px;}</style>\n      \n      <script type=\"application/javascript\">\n        function $init() {return true;}\n      </script>\n      \n      <body>\n        <p checked class=\"title\" id='title'>Title</p>\n        <!-- here goes the rest of the page -->\n      </body>"
    },
  
  ];

const LocalStorage = (idLocalStorage, setData) => {
    const storedCodesOnLocalStorage = localStorage.getItem(idLocalStorage);

    if (storedCodesOnLocalStorage){
        console.log("Dados presentes no LocalStorage. Recuperando dados...")
        setData(JSON.parse(storedCodesOnLocalStorage))
    }
    else{
        console.log("Sem dados no LocalStorage. Populando com CODES...");
        localStorage.setItem(idLocalStorage, JSON.stringify(CODES))
        setData(CODES)
    }
}

export default LocalStorage