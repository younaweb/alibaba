<template>
  <div class="flex flex-col">
    <div class="flex w-full">
      <input
        type="text"
        name=""
        id=""
        placeholder="Iftah ya semsem"
        class="
          w-120
          focus:outline-none
          focus:ring-2 focus:ring-red-500
          focus:border-transparent
          rounded-l-md
          border-2 border-red-500 border-r-0
          p-1
        "
      />
      <select
        class="
          w-48
          focus:outline-none
          focus:ring-2 focus:ring-red-500
          focus:border-transparent
          border-2 border-red-500 border-r-0 border-l-0
          bg-white
          text-sm text-gray-500
        "
      >
        <option value="0">Toutes les catégories</option>
        <option value="205000017">Lampes et éclairages</option>
        <option value="205000021">Electronique</option>
        <option value="205000022">Beauté &amp; Santé</option>
        <option value="205000009">Maison &amp; Animalerie</option>
        <option value="205000011">Sports et Loisirs</option>
        <option value="205000012">Fournitures scolaires et de bureau</option>
        <option value="205000014">Jeux et loisirs</option>
        <option value="205000015">Sécurité et Protection</option>
        <option value="205000016">Automobiles et Motos</option>
        <option value="205000002">Alimentaire</option>
        <option value="205000006">Appareils ménagers</option>
        <option value="205000007">Ordinateur et bureautique</option>
        <option value="205000008">Bricolage</option>
        <option value="205000148">
          Composants électroniques et fournitures
        </option>
        <option value="205000143">
          Téléphones portables et télécommunications
        </option>
        <option value="205000125">Chaussures</option>
        <option value="205000220">Mode Femme et Accessoires</option>
        <option value="205000264">Mariages et événements</option>
        <option value="205000316">Vêtements homme</option>
        <option value="205000411">Meubles</option>
        <option value="205000412">Mère et enfant</option>
        <option value="205000414">Baggages et sacs</option>
        <option value="205000449">Outils</option>
        <option value="205000419">Bijoux et Accessoires</option>
        <option value="205000420">Montres</option>
        <option value="205004449">Nouveauté &amp; Usage Spécial</option>
        <option value="205003008">Extensions de cheveux et Perruques</option>
        <option value="205965801">Biens virtuels</option>
        <option value="205778410">Sous-vêtements et pyjamas</option>
        <option value="205776617">Accessoires de vêtements</option>
        <option value="0">Dans Toutes les Catégories</option>
      </select>
      <button class="bg-red-500 text-white rounded-r-sm p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <cart-component/>
    </div>
    <div class="text-xs text-gray-500 divide-x-2 divide-gray-100 mt-2"> 
      <a href="" class="hover:text-red-500 text-center pr-3">diamond painting</a>
      <a href="" class="hover:text-red-500 text-center px-3">disney</a>
      <a href="" class="hover:text-red-500 text-center px-3">isee hair wig</a>
      <a href="" class="hover:text-red-500 text-center px-3">air force</a>
      <a href="" class="hover:text-red-500 text-center px-3">rolex</a>
      <a href="" class="hover:text-red-500 text-center px-3">jordan 4</a>
    </div>
  </div>
</template>

<script>
import CartComponent from './CartComponent.vue'
export default {
  components:{
           
            CartComponent
        }
};
</script>

<style>
</style>