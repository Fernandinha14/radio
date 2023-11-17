function tocasom(ideElementoaudio) {
    document.querySelector(idElementoaudio).play();
}
const listaDeTeclas= document.querySelectorAll(".tecla");
for (let contador= 0; contador<listadeteclas.lenght; contador++) {
    const tecla= listadeteclas [contador];
    const efeito= tecla.classlit[1];
    const idaudio= `#som_${efeito} `;
    tecla.onclick= function() {
        tocasom (idaudio);
    };

}