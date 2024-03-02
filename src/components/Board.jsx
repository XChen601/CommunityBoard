import React from "react";
import Card from "./Card";
import avocados from "../images/avocados.jpg";
import chequito from "../images/chequito.jpg";
import ellgallo from "../images/ellgallo.jpg";
import golden from "../images/golden.jpg";
import grand from "../images/grand.jpg";
import gyro from "../images/gyro.jpg";
import mera from "../images/mera.jpg";

const Board = () => {
  return (
    <div className="Board">
      <h1>Best Restaurants</h1>
      <div className="card-list">
        <Card image={avocados} name="Avocados Mexican Grill" type="Mexican" site="https://avocadosmexicangrill.com/"/>
        <Card image={mera} name="Europa Bar and Grill Restaurantl" type="Cafe" site="https://www.instagram.com/europacafe424/"/>
        <Card image={ellgallo} name="El Gallo Taqueria" type="Mexican" site="https://www.elgallobk.com/"/>
        <Card image={mera} name="Mera Restaurant" type="Mediterranean" site="https://www.mera.nyc/menu/"/>
        <Card image={chequito} name="Chequito’s Mexican Food And Pizzeria" type="Mexican" site="https://slicelife.com/restaurants/ny/brooklyn/11223/chequito-s-mexican-food-pizzeria/menu?utm_source=gmb_menu"/>
        <Card image={grand} name="Joe's of Avenue U" type="Sicilian" site="https://food.google.com/chooseprovider?restaurantId=/g/1tlnfbwb&g2lbs=AIQllVxcIUTN__40Kl-lYE2SPfdII5lwwDbBV7K085am_8acSLi4QxNvkaB85ku7dJ3OKwRVRvyHZJjurI3FQYBFzlHV72ogPs4xQxKgYbzDAy5JAnyHVoOnvz3TY4rljnnCxS_J0UZ_&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=xL_iZfGQLqSk5NoP1ZSG4Aw&ei=xL_iZfGQLqSk5NoP1ZSG4Aw&fo_s=OA&opi=79508299&sei=CZEfceQN93ezEYsdemaAQavM&utm_campaign&utm_source=tactile"/>
        <Card image={golden} name="Golden Palace Kitchen" type="Chinese" site="https://smorefood.com/order-online/golden-palace-kitchen-brooklyn-11223-9oaa0j4y?utm_source=gmb&utm_medium=website"/>
        <Card image={golden} name="Orange Grill" type="French" site="http://www.orangegrill.com/"/>
        <Card image={grand} name="Grand Fortune" type="Mexican" site="https://avocadosmexicangrill.com/"/>
        <Card image={gyro} name="Gyro Mania" type="Gyro" site="https://gyro-mania-gyro-restaurant.business.site/"/>
      </div>

    </div>
  )
}

export default Board