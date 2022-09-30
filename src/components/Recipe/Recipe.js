import React from "react";
import "./Recipe.css";
import Popup from "./Popup";
import { useState } from "react";
import { BsFillClockFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";
import {Recipes} from "./Data";

function Recipe() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
      <div className="main_container">
        <div className="sub_container">
          <h1 className="cuisine_heading">South Indian Food</h1>
          <div className="reciepe_container">
            <div className="recipe">
              <p className="recipe_name">Dosa</p>
              <img
                src="https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Masala dosa is popular south Indian food across India. It is a
                thin and crispy pancake prepared with fermented dosa batter
                which is stuffed with potatoes masala and served with chutney
                and sambar.
              </p>
              <button
                className="recipe_button drop-shadow-xl items-center justify-center"
                onClick={() => setButtonPopup(true)}
              >
                Full Recipe
              </button>
              <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                ptime="20m"
                ctime="10m"
                ttime="30m"
                serve="4"
                ing="2 cup parboiled rice
              1/2 cup urad dal
              1 teaspoon salt
              1/4 cup refined oil
              1/2 teaspoon fenugreek seeds
              1/2 kilograms boiled potato
              2 medium chopped green chilli
              1 tablespoon mustard seeds
              1/4 teaspoon turmeric
              salt as required
              1 1/2 cup sliced onion
              2 tablespoon refined oil
              10 leaves curry leaves
              1/4 cup water"
                htm="How to make Masala Dosa:"
                make1="1. Prepare the batter and ferment overnight.
              To prepare the batter for Masala Dosa, wash and soak the rice (with fenugreek added into it) and urad dal in separate containers for approximately 6-8 hours. 
              Once the rice and urad dal are soaked well, grind them separately in a mixer using the water in which they were soaked, till the mixture reaches a smooth consistency. 
              Mix the batter of both the ingredients in a bigger container and add salt to it. Combine well and allow it to ferment overnight."
                make2="2. Prepare the potato filling for Masala Dosa.
              To prepare the filling of the dosa, heat 2 tbsp oil in a thick-bottomed pan and let the mustard seeds splutter. 
              Then, add sliced onions, curry leaves, green chillies and saute them till the onions turn pink. 
              Then, add a pinch of salt, turmeric powder and mix them well. Now, take the cubed potatoes and add them to the sauteed onions and mix them together. 
              Pour water gradually into the mixture and allow the potatoes to simmer for around 4 minutes. 
              When the mixture is in semi-thick state, turn off the gas and let it rest for a few seconds."
                make3="3. Pan fry your dosa on a dosa tawa.
              Now, take a dosa tawa and heat it on low-medium flame. 
              Smear 1 tsp oil on it to prepare the dosa. When the tawa is hot, pour and spread the batter evenly in a circular motion."
                make4="4. Add filling and fold the dosa.
              When the colour of dosa's edges turns into brown, reduce the flame and sprinkle few drops of oil on the dosa sides and put 2 tablespoons of filling. 
              Fold the dosa. 
              Repeat the process until all the batter and filling is used up. Serve hot Masala Dosa with coconut chutney and sambhar."
              />
            </div>
            <div className="recipe">
              <p className="recipe_name">Utpam</p>
              <img
                src="https://www.idfreshfood.com/wp-content/uploads/2020/12/gbuoh.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Uttapam is a very popular South Indian breakfast dish. It is
                similar to dosa but slightly thicker than the regular dosas. It
                can be made with leftover idli dosa batter. Vegetable Uttapam
                can be served for breakfast or as a snack. Uttapam can be made
                with a variety of toppings like onion, tomato, coconut, and many
                others. Vegetable Uttapams are topped with finely chopped
                vegetables.
              </p>
              <button
                className="recipe_button drop-shadow-xl items-center justify-center"
                onClick={() => setButtonPopup(true)}
              >
                Full Recipe
              </button>
              <Popup
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
                ptime="10m"
                ctime="10m"
                ttime="20m"
                serve="2"
                ing="1 cup Idli Dosa Batter , 1 cup idli dosa batter 
              1/4 cup Onion , finely chopped
              1/4 cup Green Bell Pepper (Capsicum) , finely chopped
              1/4 cup Carrot (Gajjar) , finely chopped
              1 Tomato , 1 tomato finely chopped and deseeded 
              2 Green Chillies , finely chopped , 2 tablespoons Coriander (Dhania) Leaves , finely chopped
              Oil , for greasing"
                htm="How to make Masala Dosa:"
                make1="1. To begin the preparation of Vegetable Uttapam, take the dosa batter in a bowl.  
              Add water if required to get the desired consistency. 
              Finely chop all the vegetables and keep aside. "
                make2="2. Heat a non-stick tawa.  Grease it with oil.  
              When the tawa becomes hot, pour one ladleful of batter and spread it in circular motion.  Don't make it too thin.  
              You will find small holes appearing on the surface, add the chopped vegetables.  
              Drizzle oil around the edges and at the center.  
              Reduce the flame to medium.  Cover and cook on medium flame for a few seconds. "
                make3="3. By this time the veggies would have cooked.  Gently press it with the back of a spatula.  
              Flip the utpam to the other side and cook on medium flame for 2 - 3 minutes.  
              Transfer the utpam to a serving plate.  
              Serve the Vegetable Uttapam with coconut chutney and sambar "
              />
            </div>
            <div className="recipe">
              <p className="recipe_name">Medu Vada</p>
              <img
                src="https://www.secondrecipe.com/wp-content/uploads/2019/12/medu-wada.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                The Medu Vada Recipe is a very traditional South Indian Tiffin/
                Breakfast dish that is made from whole urad dal. Each home has a
                special recipe of how they spice up the Medu Vada batter.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
          </div>
        </div>

        <div className="sub_container">
          <h1 className="cuisine_heading">Punjabi</h1>
          <div className="reciepe_container">
            <div className="recipe">
              <p className="recipe_name">Veg Kohlapuri</p>
              <img
                src="https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/rekha-unni20180717103804653.jpeg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Kolhapur is a city in the Indian state of Maharashtra. Here the
                dry kolhapuri masala is added into the gravy/sauce hence the
                name kolhapuri. This curry tastes just like the one you get from
                North Indian restaurants. It has really great layers of flavor.
                It has a combination of nutty, aromatic, spicy flavors.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
            <div className="recipe">
              <p className="recipe_name">Paneer Butter Masala</p>
              <img
                src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                This restaurant style paneer butter masala is also known as
                butter paneer. It has delicious, creamy, rich, buttery, medium
                spicy and vibrant looking onion-tomato gravy with soft,
                succulent paneer (Indian cottage cheese) cubes in it. It pairs
                well with garlic naan or jeera rice.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
          </div>
        </div>

        <div className="sub_container">
          <h1 className="cuisine_heading">Italian</h1>
          <div className="reciepe_container">
            <div className="recipe">
              <p className="recipe_name">White Sauce Pasta</p>
              <img
                src="https://www.whiskaffair.com/wp-content/uploads/2021/05/White-Sauce-Paste-2-3.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Penne Pasta In White Sauce Recipe is creamy, delicious and has
                healthy goodness of vegetables that is loaded into the pasta.
                Flavored with mixed dried Italian herbs, black pepper and dry
                red chilli flakes, this pasta dish is a treat to the taste buds
                and is ready within 30 minutes.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
            <div className="recipe">
              <p className="recipe_name">Tandoori Paneer Pizza</p>
              <img
                src="https://tempovalemount.com/wp-content/uploads/2021/07/paneer-pizza-1.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Tandoori Paneer (Cottage Cheese) Tikka Skillet Pizza Recipe is a
                fusion recipe which is combination of Indian tandoori paneer
                tikka with Italian pizza base. It is a new twist to the pizza
                which can be enjoyed for dinner or for lunch. The paneer in the
                pizza makes it healthy and tasty. It pairs well with Indian
                Style Masala Macaroni for weekend night.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
          </div>
        </div>

        <div className="sub_container">
          <h1 className="cuisine_heading">Dessert</h1>
          <div className="reciepe_container">
            <div className="recipe">
              <p className="recipe_name">Belgian Chocolate Cranberry Cake</p>
              <img
                src="http://cdn.shopify.com/s/files/1/0065/0045/0351/products/dark-chocolate-truffle_8442ada7-e682-493a-8226-4e1cfefc2925_1200x1200.jpg?v=1613118672"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                This chocolate layer cake filled with cranberry and port compote
                is absolutely irresistible. Rich chocolate cake layers gently
                wrapped in whipped chocolate ganache, then decorated with
                sparkling cranberries.
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
            <div className="recipe">
              <p className="recipe_name">Classic Chocolate Mouse</p>
              <img
                src="https://realfood.tesco.com/media/images/RFO-1400x919-classic-chocolate-mousse-69ef9c9c-5bfb-4750-80e1-31aafbd80821-0-1400x919.jpg"
                className="recipe_image drop-shadow-xl"
              />
              <p className="recipe_recipe">
                Creamy chocolate mousse is an absolute classic, and this
                indulgent gluten-free dessert recipe is so easy to follow. Whip
                up the mousse with rich dark chocolate and allow to set
                overnight, before serving with whipped cream and chocolate
                shards, if you like. Stunning dinner party desserts don't get
                better than this!
              </p>
              <button className="recipe_button drop-shadow-xl items-center justify-center">
                Full Recipe
              </button>
              {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>My Popup</h3>
            </Popup> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Recipe;
