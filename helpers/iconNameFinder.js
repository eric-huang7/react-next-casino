
export const findIconName = (currencyData) => {
  let iconName = '';

  if (!currencyData.icon_name) {
    iconName = currencyData?.abbreviation?.toLowerCase();
  } else if (currencyData.icon_name === 'missing') {
    iconName = '';
  } else {
    iconName = currencyData.icon_name.toLowerCase();
  }

  return iconName;
}


export const svgSetter = (currencyData, returnAbbr = false) => {
  if (!currencyData) return;
  let svg = document.getElementById("currencyIframe");
  let container = document.getElementById(`currencyImageContainer${currencyData.id}`);
  if (svg) {
    let iconName = findIconName(currencyData);
    let currencyIcon = svg.contentWindow.window.document.getElementById(iconName)

    if (currencyIcon) {
      container.innerHTML = currencyIcon.outerHTML;
    } else {
      container.innerHTML = returnAbbr ? currencyData.abbreviation : "";
    }
  } else {
    container.innerHTML = returnAbbr ? currencyData.abbreviation : "";
  }
}

export const svgSetterById = (currencyData, id, returnAbbr = false) => {
  let svg = document.getElementById("currencyIframe");
  let container = document.getElementById(id);
  if (svg) {
    let iconName = findIconName(currencyData);
    let currencyIcon = svg.contentWindow.window.document.getElementById(iconName)

    if (currencyIcon) {
      container.innerHTML = currencyIcon.outerHTML;
    } else {
      container.innerHTML = returnAbbr ? currencyData.abbreviation : "";
    }
  } else {
    container.innerHTML = returnAbbr ? currencyData.abbreviation : "";
  }
}
