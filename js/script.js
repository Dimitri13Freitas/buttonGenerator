const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');
controles.addEventListener('change', handleChange);



const handleStyle = {
  element:btn,
  texto(value) {
    this.element.innerHTML = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value){
    this.element.style.height = value + 'px';
  },
  width(value){
    this.element.style.width = value + 'px';
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
  borderType(value) {
    this.element.style.borderStyle = value;
  },
  borderColor(value) {
    this.element.style.borderColor = value;
  },
  borderWidth(value) {
    this.element.style.borderWidth = value + 'px';
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontWeight(value) {
    this.element.style.fontWeight = value;
  },
 }

function handleChange(event) {
  const nome = event.target.name;
  const valor = event.target.value;
  handleStyle[nome](valor);
}