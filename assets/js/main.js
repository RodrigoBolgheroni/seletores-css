document.addEventListener('DOMContentLoaded', () => {
    const tagP = document.getElementById('tag-p');
    const combinador = document.getElementById('combinador');
    const tagS = document.getElementById('tag-s');
    const color = document.getElementById('color');
    const codigoCSS = document.getElementById('codigo-css-gerado');
  
    const dynamicStyle = document.createElement('style');
    document.head.appendChild(dynamicStyle);
  
    function getSelector() {
      if (tagP.value !== 'null' && tagS.value !== 'null') return `${tagP.value}${combinador.value}${tagS.value}`;
      if (tagP.value !== 'null') return tagP.value;
      if (tagS.value !== 'null') return tagS.value;
      return '*';
    }
  
    function atualizarPreview() {
      codigoCSS.innerText = `${getSelector()} {\n  background-color: ${color.value};\n}`;
      dynamicStyle.textContent = `#container-main ${getSelector()} { background-color: ${color.value}; }`;
    }
  
    [tagP, combinador, tagS, color].forEach(el => {
      el.addEventListener('input', atualizarPreview);
      el.addEventListener('change', atualizarPreview);
    });
  
    atualizarPreview();
  });
  