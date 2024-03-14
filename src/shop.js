const services = [
  {
    nombre: "Consultoría fiscal",
    descripcion:
      "Proporcionar asesoramiento sobre impuestos, incluyendo la planificación fiscal, la presentación de declaraciones de impuestos, la optimización de estructuras fiscales y la resolución de problemas relacionados con impuestos.",
    modelo_fiscal: "Impuesto sobre la Renta de Personas Físicas (IRPF)",
    precio_orientativo: 200,
  },
  {
    nombre: "Contabilidad y teneduría de libros",
    descripcion:
      "Ofrecer servicios de contabilidad que incluyan la preparación de estados financieros, el mantenimiento de registros contables, la reconciliación bancaria y la gestión de cuentas por cobrar y cuentas por pagar.",
    modelo_fiscal: "Normativa Contable Internacional (NIC/NIIF)",
    precio_orientativo: 500,
  },
  {
    nombre: "Asesoramiento en gestión de negocios",
    descripcion:
      "Ofrecer consultoría en áreas como gestión financiera, análisis de viabilidad de proyectos, evaluación de inversiones, estrategias de crecimiento empresarial y optimización de procesos financieros.",
    modelo_fiscal: "Gestión Financiera Empresarial",
    precio_orientativo: 300,
  },
  {
    nombre: "Asesoramiento financiero personalizado",
    descripcion:
      "Brindar asesoramiento financiero a clientes individuales sobre ahorro, inversión, planificación de la jubilación, gestión de deudas y creación de presupuestos personalizados.",
    modelo_fiscal: "Planificación Financiera Personalizada",
    precio_orientativo: 150,
  },
  {
    nombre: "Auditoría y revisión de estados financieros",
    descripcion:
      "Realizar auditorías internas y externas, revisar estados financieros para garantizar su precisión y cumplimiento con las normas contables y regulatorias.",
    modelo_fiscal: "Cumplimiento de las Normas de Auditoría (NIA)",
    precio_orientativo: 1000,
  },

  {
    nombre: "Servicios de nómina",
    descripcion:
      "Proporcionar servicios de procesamiento de nómina, incluyendo el cálculo de salarios, la retención de impuestos, la emisión de cheques o depósitos directos y el cumplimiento de las obligaciones laborales.",
    modelo_fiscal: "Cumplimiento de las Normas Laborales y Tributarias",
    precio_orientativo: 2000,
  },
  {
    nombre: "Cumplimiento normativo",
    descripcion:
      "Ayudar a las empresas a cumplir con las regulaciones financieras y fiscales locales e internacionales, proporcionando orientación sobre cumplimiento de normativas específicas y presentación de informes requeridos.",
    modelo_fiscal: "Cumplimiento Normativo Tributario",
    precio_orientativo: 3000,
  },
  {
    nombre: "Capacitación y educación financiera",
    descripcion:
      "Ofrecer seminarios, cursos en línea o materiales educativos sobre temas financieros, fiscales y contables para clientes que deseen mejorar su conocimiento en estas áreas.",
    modelo_fiscal: "Educación Financiera y Fiscal",
    precio_orientativo: 50,
  },
];

let carrito = [];

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
  const priceDetail = document.createElement("span");
  priceDetail.innerText = service.precio_orientativo.toLocaleString("de-De", {
    style: "currency",
    currency: "EUR",
  });
  priceDetail.setAttribute("value", service.precio_orientativo);
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "btn primary";
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

function showCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let totalCart = 0;
  if (carrito.length > 0) {
    for (item of carrito) {
      cartItems.innerHTML += `<div class="cart-item">
            <span class="cart-service-name">${item.nombreProducto}</span>
            <div style='display: flex; flex-direction: row;gap: 10px'>
            <span class="cart-service-price">${item.precioProducto}</span>
            <div class="cart-item-cancel-button"><button onclick="deleteItem(this)">✖</button></div>
            </div>
          </div>`;
      totalCart += Number(item.importe);
      document.getElementById("comprar").disabled = false;
    }
  } else {
    cartItems.innerHTML = `<div class="empty-cart">El Carrito está vacío.</div>`;
    document.getElementById("comprar").disabled = true;
  }
  console.log(totalCart);
  const cartTotalPriceTag = document.getElementById("cart-total-price-tag");
  cartTotalPriceTag.innerText = totalCart.toLocaleString("de-De", {
    style: "currency",
    currency: "EUR",
  });
}

function deleteItem(item) {
  const nombreProducto =
    item.parentNode.parentNode.parentNode.querySelector("span").innerText;
  carrito = carrito.filter(
    (cartItem) => cartItem.nombreProducto != nombreProducto
  );
  showCart();
}

function addToCart(e) {
  const price = e.currentTarget.parentElement.querySelector("span").innerText;
  const nombreProducto =
    e.currentTarget.parentNode.parentNode.querySelector("h2").innerText;
  const priceNumber = e.currentTarget.parentElement
    .querySelector("span")
    .getAttribute("value");
  const result = {
    nombreProducto: nombreProducto,
    precioProducto: price,
    importe: priceNumber,
  };
  if (
    carrito.filter((item) => item.nombreProducto === result.nombreProducto)
      .length === 0
  ) {
    carrito.push(result);
    showCart();
  }
}

function realizarCompra() {
  if (carrito.length > 0) {
    alert("Su compra ha sido realizada con éxito!!!");
    carrito = [];
    showCart();
  } else {
    alert("No hay productos en el carrito para comprar!!");
  }
}

window.onload = function () {
  for (service of services) {
    card(service);
  }
  const addServicesButtons = document.getElementsByClassName("btn");
  for (i = 0; i < addServicesButtons.length; i++) {
    addServicesButtons[i].onclick = addToCart;
  }
};
