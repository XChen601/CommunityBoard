import React from "react";
import Card from "./Card";

const Board = () => {
  return (
    <div className="Board">
      <h1>Best Restaurants</h1>
      <Card image="" name="Avocados Mexican Grill" type="Mexican" site="https://avocadosmexicangrill.com/"/>
      <Card image="" name="Europa Bar and Grill Restaurantl" type="Cafe" site="https://www.instagram.com/europacafe424/"/>
      <Card image="" name="El Gallo Taqueria" type="Mexican" site="https://www.elgallobk.com/"/>
      <Card image="" name="Mera Restaurant" type="Mediterranean" site="https://www.mera.nyc/menu/"/>
      <Card image="" name="Chequito’s Mexican Food And Pizzeria" type="Mexican" site="https://slicelife.com/restaurants/ny/brooklyn/11223/chequito-s-mexican-food-pizzeria/menu?utm_source=gmb_menu"/>
      <Card image="" name="Joe's of Avenue U" type="Sicilian" site="https://food.google.com/chooseprovider?restaurantId=/g/1tlnfbwb&g2lbs=AIQllVxcIUTN__40Kl-lYE2SPfdII5lwwDbBV7K085am_8acSLi4QxNvkaB85ku7dJ3OKwRVRvyHZJjurI3FQYBFzlHV72ogPs4xQxKgYbzDAy5JAnyHVoOnvz3TY4rljnnCxS_J0UZ_&hl=en-US&gl=us&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=xL_iZfGQLqSk5NoP1ZSG4Aw&ei=xL_iZfGQLqSk5NoP1ZSG4Aw&fo_s=OA&opi=79508299&sei=CZEfceQN93ezEYsdemaAQavM&utm_campaign&utm_source=tactile"/>
      <Card image="" name="Golden Palace Kitchen" type="Chinese" site="https://smorefood.com/order-online/golden-palace-kitchen-brooklyn-11223-9oaa0j4y?utm_source=gmb&utm_medium=website"/>
      <Card image="" name="Orange Grill" type="French" site="http://www.orangegrill.com/"/>
      <Card image="" name="Grand Fortune" type="Mexican" site="https://avocadosmexicangrill.com/"/>
      <Card image="" name="Gyro Mania" type="Gyro" site="https://gyro-mania-gyro-restaurant.business.site/"/>
    </div>
  )
}

export default Board