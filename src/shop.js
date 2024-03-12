const services = [
  {
    nombre: "Consultoría fiscal",
    descripcion:
      "Proporcionar asesoramiento sobre impuestos, incluyendo la planificación fiscal, la presentación de declaraciones de impuestos, la optimización de estructuras fiscales y la resolución de problemas relacionados con impuestos.",
    modelo_fiscal: "Impuesto sobre la Renta de Personas Físicas (IRPF)",
    precio_orientativo: "200,00 €",
  },
  {
    nombre: "Contabilidad y teneduría de libros",
    descripcion:
      "Ofrecer servicios de contabilidad que incluyan la preparación de estados financieros, el mantenimiento de registros contables, la reconciliación bancaria y la gestión de cuentas por cobrar y cuentas por pagar.",
    modelo_fiscal: "Normativa Contable Internacional (NIC/NIIF)",
    precio_orientativo: "500,00 €",
  },
  {
    nombre: "Asesoramiento financiero personalizado",
    descripcion:
      "Brindar asesoramiento financiero a clientes individuales sobre ahorro, inversión, planificación de la jubilación, gestión de deudas y creación de presupuestos personalizados.",
    modelo_fiscal: "Planificación Financiera Personalizada",
    precio_orientativo: "300,00 €",
  },
  {
    nombre: "Asesoramiento financiero personalizado",
    descripcion:
      "Brindar asesoramiento financiero a clientes individuales sobre ahorro, inversión, planificación de la jubilación, gestión de deudas y creación de presupuestos personalizados.",
    modelo_fiscal: "Planificación Financiera Personalizada",
    precio_orientativo: "150,00 €",
  },
  {
    nombre: "Auditoría y revisión de estados financieros",
    descripcion:
      "Realizar auditorías internas y externas, revisar estados financieros para garantizar su precisión y cumplimiento con las normas contables y regulatorias.",
    modelo_fiscal: "Cumplimiento de las Normas de Auditoría (NIA)",
    precio_orientativo: "1.000,00 €",
  },
  {
    nombre: "Asesoramiento en gestión de negocios",
    descripcion:
      "Ofrecer consultoría en áreas como gestión financiera, análisis de viabilidad de proyectos, evaluación de inversiones, estrategias de crecimiento empresarial y optimización de procesos financieros.",
    modelo_fiscal: "Gestión Financiera Empresarial",
    precio_orientativo: "Depende del alcance y la duración del proyecto",
  },
  {
    nombre: "Servicios de nómina",
    descripcion:
      "Proporcionar servicios de procesamiento de nómina, incluyendo el cálculo de salarios, la retención de impuestos, la emisión de cheques o depósitos directos y el cumplimiento de las obligaciones laborales.",
    modelo_fiscal: "Cumplimiento de las Normas Laborales y Tributarias",
    precio_orientativo: "2.000,00 €",
  },
  {
    nombre: "Cumplimiento normativo",
    descripcion:
      "Ayudar a las empresas a cumplir con las regulaciones financieras y fiscales locales e internacionales, proporcionando orientación sobre cumplimiento de normativas específicas y presentación de informes requeridos.",
    modelo_fiscal: "Cumplimiento Normativo Tributario",
    precio_orientativo: "3.000,00 €",
  },
  {
    nombre: "Capacitación y educación financiera",
    descripcion:
      "Ofrecer seminarios, cursos en línea o materiales educativos sobre temas financieros, fiscales y contables para clientes que deseen mejorar su conocimiento en estas áreas.",
    modelo_fiscal: "Educación Financiera y Fiscal",
    precio_orientativo: "50,00 €",
  },
];

function card(service) {
  const content = document.getElementById("main");
  const card = document.createElement("div");
  card.className = "service-card";
  const title = document.createElement("h2");
  title.innerText = service.nombre;
  const description = document.createElement("section");
  description.className = "description";
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.innerText = "Descripción";
  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.innerText = service.descripcion;
  const fiscalModel = document.createElement("section");
  fiscalModel.className = "fiscal-model";
  const fiscalModelTitle = document.createElement("h3");
  fiscalModelTitle.innerText = "Modelo Fiscal";
  const fiscalModelDescription = document.createElement("p");
  fiscalModelDescription.innerText = service.modelo_fiscal;
  const price = document.createElement("section");
  price.className = "price";
  const priceDetail = document.createElement("p");
  priceDetail.innerText = service.precio_orientativo;
  const addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Añadir al carrito";
  fiscalModel.appendChild(fiscalModelTitle);
  fiscalModel.appendChild(fiscalModelDescription);
  description.appendChild(descriptionTitle);
  description.appendChild(descriptionParagraph);
  price.appendChild(priceDetail);
  price.appendChild(addToCartButton);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(fiscalModel);
  card.appendChild(price);
  content.appendChild(card);
}

window.onload = function () {
  console.log("onload");
  for (service of services) {
    card(service);
  }
};
