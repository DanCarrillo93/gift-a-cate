module.exports = {
  // add helper functions for handlebars here
  // Example:
  // json: object => JSON.stringify(object, null, 4),
  get_icon: input => {
    let icon;
    let color;
    switch (input) {
      case "Electronics":
        icon = "mobile-alt";
        color = "black"
        break
      case "Beauty":
        icon = "air-freshener";
        color = "yellow";
        break
      case "Games":
        icon = "gamepad";
        color = "white";
        break
      case "Toys":
        icon = "chess";
        color = "blue";
        break
      case "Cars":
        icon = "car";
        color = "gray";
        break
      case "Appliances":
        icon = "blender";
        color = "#565656";
        break
      case "Furniture":
        icon = "couch";
        color = "brown";
        break
      case "Other":
        icon = "gifts";
        color = "purple";
        break
    
      default:
        break;
    };
    return `<span style="color:${color}" class="icon"><i
    class="fa fa-${icon} fa-4x"></i></span>`;
  }
};
