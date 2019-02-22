<template>
  <div>

    <b-carousel id="carousel"
                indicators
                img-width="1040"
                img-height="500"
                :interval="0"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide img-blank>
        <b-row class="no-gutters">
          <b-col class="product mr-3" :id="'product_' + product.id" v-for="(product, i) in products">
            <img :src='"../img/photo/product" + product.id + ".png"' :alt='"product" + product.id + ".png"'>
            <span class="plus">+</span>
            <div>
              <h4 class="gray-dark">{{ product.name }}</h4>
              <div class="rating" :id="'rating_' + product.id"><p class="small gray">{{ product.rating | toFixed(1) }}</p></div>
              <p>{{ product.text }}</p>
            </div>

          </b-col>
        </b-row>
      </b-carousel-slide>

      <b-carousel-slide img-blank>
        <b-row class="no-gutters">
          <b-col class="product mr-3" :id="'product_' + product.id" v-for="(product, i) in products">
            <img :src='"../img/photo/product" + product.id + ".png"' :alt='"product" + product.id + ".png"'>
            <span class="plus">+</span>
            <div>
              <h4>{{ product.name }}</h4>
              <div class="rating" :id="'rating_' + product.id"><p class="small gray">{{ product.rating | toFixed(1) }}</p></div>
              <p>{{ product.text }}</p>
            </div>

          </b-col>
        </b-row>
      </b-carousel-slide>

    </b-carousel>
    
    <div class="controls d-flex justify-content-between position-absolute">
      <img class="carousel-left" src="../img/main/arrow-left.svg" alt="arrow-left.svg" @click="slide--">
      <img class="carousel-right" src="../img/main/arrow-right.svg" alt="arrow-right.svg" @click="slide++">
    </div>

  </div>
</template>


<script>

  export default {
    data() {
      return {
        slide: 0,
        products: [
          { id:1, name:'Origin bridge', rating:4.3, text:'Our team is deeply experienced and we lend to businesses in a diverse range of industries.', price:100 },
          { id:2, name:'Chronogate exp.', rating:5, text:'We offer competitive products across the debt capital structure, primarily serving borrowers.', price:50 },
          { id:3, name:'Fashion week', rating:5, text:'Swimming hundreds of feet beneath the ocean’s surface in many parts', price:10 },
          ]
      };
    },
    mounted() {
      rating: {
        for (let i=0; i<this.products.length; i++) {
          let rating = Math.floor(this.products[i].rating);
          for (let j=0; j < (5-rating); j++) {
            $('#rating_' + (i+1) + ' p').after('<div class="empty"></div>');
          }
          for (let j=0; j < rating; j++) {
            $('#rating_' + (i+1) + ' p').after('<div></div>');
          }
        }
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true;
      },
      onSlideEnd (slide) {
        this.sliding = false;
      }
    }
  };

</script>

<style lang="sass">

  @import '../style/vars'

  .carousel-caption
    left: 0
    right: 0
    .row
      margin-right: -15px

  .product
    height: 460px
    color: #39414A
    background: #FFFFFF
    box-shadow: 0px 10px 5px rgba(57, 65, 74, 0.1)
    border-radius: 8px
    img
      width: 100%
      border-radius: 8px 8px 0 0
    .plus
      width: 48px
      height: 48px
      float: right
      margin: -24px 0 0 262px
      padding: 0 15px
      display: block
      position: absolute
      color: #FFFFFF
      font-size: 32px
      font-family: sans-sherif
      border-radius: 50%
      background: $color-primary-blue
      cursor: pointer
    &>div
      padding: 25px 50px 0 30px
      text-align: left
    p
      margin-top: -5px
    p.small
      margin: -15px 15px 8px 0
    .rating
      display: flex
      & > div
        height: 16px
        width: 4px
        margin: 0 2px
        background: $color-primary-blue
        border-radius: 2px
      & > div.empty
        background: $color-primary-gray-light
    p
      padding-top: 11px

  .carousel-indicators 
    top: 387px
    li
      width: 8px
      height: 8px
      margin-top: 100px
      border: 1px solid $color-primary-gray-light
      border-radius: 50%
    li.active
      background: $color-primary-blue

  .controls
    width: 1155px
    margin-left: -55px
    top: 855px

  .carousel-left, .carousel-right
    height: 40px
    cursor: pointer

</style>