<template>

<div>
	<table id="cart" class="table table-borderless table-hover">
	  <thead class="gray">
	    <tr>
	      <th scope="col">Product</th>
	      <th scope="col">Color</th>
	      <th scope="col">Size</th>
	      <th scope="col">Quantity</th>
	      <th scope="col">Total Price</th>
	      <th scope="col"></th>
	    </tr>
	  </thead>
	  <tbody class="gray-dark">
	    <tr v-for="(product, i) in cart" :id="'product_' + product.id">
	      <th scope="row">
	      	<img :src='"../img/photo/product" + product.id + ".png"' :alt="'product' + product.id + '.png'">{{ product.name }}</th>
	      <td>
					<div id="selectColor">
						<a href="#" class="select"></a>
						<ul class="drop">
							<li id="gray"><img src="../img/main/gray.png" alt=""></li>
							<li id="gray-dark"><img src="../img/main/gray-dark.png" alt=".png"></li>
							<li id="green"><img src="../img/main/green.png" alt=""></li>
							<li id="red"><img src="../img/main/red.png" alt=""></li>
							<li id="orange"><img src="../img/main/orange.png" alt=""></li>
						</ul>
						<input type="hidden" v-model="cart[i].selectedColor">
					</div>
			  </td>
	      <td>
		    	<div id="selectSize">
						<a href="#" class="select"></a>
						<ul class="drop">
				      <li value="XS"> XS </li>
				      <li value="S"> S </li>
				      <li value="M"> M </li>
				      <li value="L"> L </li>
				      <li value="XL"> XL </li>
						</ul>
						<input type="hidden" v-model="cart[i].selectedSize">
					</div>
			  </td>
	      <td>
	      	<div id="minus" class="position-absolute" @click="minus(i, $event)">-</div>
	      	<div id="plus" class="position-absolute" @click="plus(i, $event)">+</div>
	      	<input type="text" class="text-center" v-model="product.num" @input="setNum(i, $event)">
	      </td>
	      <td id="totalPrice">
	      	{{ product.price * product.num | toFixed(2) }}
	      </td>
	      <td class="text-right">
	      	<img :id="'delete_' + product.id" class="delete" src="../img/main/close.svg" alt="close.svg" @click="deleteProduct(i)">
	      </td>
	    </tr>
	  </tbody>
	</table>

	<div class="total text-right">
		<p><span class="gray">Shipping: </span>${{ shipping }}</p>
		<p><span class="gray">Total: </span>${{ total | toFixed(2) }}</p>
		<img class="arrow-left" src="../img/main/arrow-left.svg" alt="arrow-left.svg">
		<a href="#" class="">Continue shopping</a>
		<b-button variant="primary">Proceed checkout</b-button>
	</div>

</div>
</template>

<script>
	
	export default {
		data() {
			return {
				cart: [
					{ id:4, name: 'Sweater Hooded', selectedColor: 'gray', selectedSize: 'XS', num: 1, price: 79.98 },
					{ id:5, name: 'Printed T-Shirt', selectedColor: 'gray', selectedSize: 'XS', num: 1, price: 79.98 }
				],
				shipping: 9.99,
			};
		},
		computed: {
			total() {
				let sum = 0;
				for (let i = 0; i < this.cart.length; i++) {
					sum += (this.cart[i].price * this.cart[i].num);
				}
				return sum + this.shipping;
			}
		},
		methods: {
			minus(i, e) {
				if (this.cart[i].num > 1) {
					this.cart[i].num--;
				}
			},
			plus(i, e) {
				this.cart[i].num++;
			},
			deleteProduct(i) {
				this.cart.splice(i, 1);
				console.log(this.cart);
			},
			setNum(i, e){
				let num = parseInt(e.target.value);
				isNaN(num) ? num = 1 : false;
				num < 1 ? num = 1 : false;
				this.cart[i].num = num;
			},
		}
	};

</script>

<style lang="sass">

	@import '../style/vars'

	#cart
		margin-top: -8px

		thead tr
			height: 40px
			font-size: 14px
			font-family: 'SF UI Display-Thin'
			th
				padding: 20px 0 10px 0

		thead, tr
			border-bottom: 1px solid $color-primary-gray-light

		tbody tr
			height: 108px

		tbody th
			width: 350px
			padding-top: 15px
			font-size: 20px
			img
				padding: 0 16px

		tbody td:last-child
			width: 40px

		th, td
			padding: 7px 0 0 0
			vertical-align: middle

		input
			width: 88px
			height: 40px
			font-size: 20px
			cursor: pointer
			border: 1px solid $color-primary-gray-light
			border-radius: 2px
		  font-size: 14px


		a.select
			width: 88px
			font-size: 20px
			border: 1px solid $color-primary-gray-light
			border-radius: 2px

		.drop
			width: 88px

		#totalPrice
		  width: 120px
		  padding-top: 0
				&:before
					content: '$'

		#minus, #plus
			width: 25px
			height: 40px
			padding: 3px
			font-size: 22px
			text-align: center
			cursor: pointer

		#minus
			padding: 5px 15px

		#plus
			margin: 0 60px

		.delete
			cursor: pointer

	.total
		margin-top: 22px
		font-size: 20px
		img
			height: 18px
			margin-top: 3px
		p
			font-size: 20px
			margin-bottom: .5em
		span
			margin-right: 10px
		a
			font-size: 12px
			line-height: 75px
		button
			height: 36px
			width: 160px
			margin-left: 50px
			font-size: 14px
			line-height: 16px
		
</style>