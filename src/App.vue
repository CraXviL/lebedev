<template>

	<b-container class="p-0 gray-dark">

		<header class="d-flex justify-content-between">

			<img src="./img/main/lebedev-studio.svg" alt="lebedev-studio.svg">
			<div>
				<span>2</span>
				<img id="avatar" src="./img/main/avatar.png" alt="avatar.png">
				<p>Alice Hopkins</p>
				<img id="main-menu" src="./img/main/more.svg" alt="more.svg" @click="mainMenuClick">
				<div id="menu" class="gray-dark hidden">
					<ul>
						<li id="account">Account</li>
						<li id="settings">Settings</li>
						<li id="messages">Messages<span>+2</span></li>
						<li id="help">Help & FAQ</li>
						<li id="logout">Logout</li>
					</ul>
				</div>
			</div>

		</header>

		<main>

			<hgroup>
				<h2>I’m ready to dev. test</h2>
				<small class="gray">Ready. Steady. Go.</small>
			</hgroup>

 			<b-row id="conditions">

 				<b-col cols="4">
		      <div id="checkboxes" name="checkboxes" v-model="selectedConditions" @click="checkboxesClick">
		        <div class="check"><input type="checkbox" id="checkbox1" value="condition1">I will not xerox my butt</input></div>
		        <div class="check"><input type="checkbox" id="checkbox2" value="condition2">Funny noises are not funny</input></div>
		        <div class="check"><input type="checkbox" id="checkbox3" value="condition3">A burp is not an answer</input></div>
		        <div class="check"><input type="checkbox" id="checkbox4" value="condition4">I will not skateboard in the halls</input></div>
		        <div class="check"><input type="checkbox" id="checkbox5" value="condition5">I will not show off</input></div>
		        <div class="check"><input type="checkbox" id="checkbox6" value="condition6">I am not a robot</input></div>
		      </div>
				</b-col>

				<b-col cols="2" class="photo">
					<div class="line"></div>
					<img src="./img/photo/photo1.png" alt="photo1.png">
				</b-col>
				<b-col cols="2" class="photo">
					<img src="./img/photo/photo2.png" alt="photo2.png">
					<div class="line"></div>
				</b-col>
				<b-col cols="2" class="photo pl-1">
					<div class="line"></div>
					<img src="./img/photo/photo3.png" alt="photo3.png">
				</b-col>
				<b-col cols="2" class="photo pl-1">
					<img src="./img/photo/photo4.png" alt="photo4.png">
					<div class="line"></div>
				</b-col>

 			</b-row>

			<h6>Go further</h6>
			<div class="line"></div>

			<app-carousel></app-carousel>

			<hgroup id="cartHeader">
				<h2>I’d like trrrr & tddd</h2>
				<small><img src="./img/main/arrows.svg" alt="arrows.svg"></small>
			</hgroup>

			<app-cart></app-cart>

			<b-row id="cards" class="no-gutters">
				<b-col class="mr-3 ml-0"><img src="./img/main/diagramma1.png" alt="diagramma1.png">
					<h4>$ 17,675</h4>
					<p class="green"><span class="gray">Total profit</span>+$489</p>
				</b-col>
				<b-col class="mr-3"><img src="./img/main/diagramma2.png" alt="diagramma2.png">
					<h4>$ 7,831</h4>
					<p class="green"><span class="gray">Total revenue</span>+$189</p>
				</b-col>
				<b-col class="mr-1"><img src="./img/main/diagramma3.png" alt="diagramma3.png">
					<h4>$ 298,45</h4>
					<p class="green"><span class="gray">Average profit</span>-$39</p>
				</b-col>
			</b-row>

 		</main>

 		<article class="gray-dark">

			<hgroup>
				<h3>Capable, Reliable & Experienced</h3>
				<small class="gray">As Agent and Lead Arranger</small>
			</hgroup>
			<p>Varabart serves leading middle market companies and private equity firms. We build lasting relationships as a reliable financing partner that supports growing businesses. We offer competitive products across the debt capital structure, primarily serving borrowers with $10 million <br>to $75 million of EBITDA.Our team is deeply experienced and we lend to businesses in a diverse range of industries. Our hold sizes and capital markets capabilities allow us to provide total debt solutions with certainty of close.</p>
			<p>We are a value-added partner to private equity with a track record of delivering flexible financing and reliable execution across multiple transactions. We are committed to supporting a firm's objectives over the complete lifecycle of an investment, including facilitating organic growth, financing acquisitions, and completing recapitalizations.</p>
			<img src="./img/main/image1.jpg" alt="image1.jpg">
			<p class="gray small">Each member of our coverage team has spent their entire careers in the middle market. We have deep experience structuring, underwriting, and managing investments in a range of industries, as well as the resources to deliver efficient commitments and timely execution.</p>

			<hgroup class="pt-1">
				<h2>Experienced team of middle market professionals </h2>
				<small class="gray">Senior Direct Lending Program </small>
			</hgroup>

			<p>Varabart serves leading middle market companies and private equity firms. We build lasting relationships as a reliable financing partner that supports growing businesses. We offer competitive products across the debt capital structure, primarily serving borrowers with $10 million to $75 million of EBITDA.Our team is deeply experienced and we lend to businesses in a diverse range of industries. Our hold sizes and capital markets capabilities allow us to provide total debt solutions with certainty of close.</p>
			<div id="introduction">
				<img class="float-left" src="./img/main/image2.jpg" alt="image2.jpg">
				<div class="position-absolute">
					<h5>Introduction</h5>
					<p class="small">Nextgen advertising <br>  right now</p>
				</div>
				<p>Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects called giant larvaceans. These zooplankton are not particularly giant themselves <br> (they resemble tadpoles and are about the size of a pinkie finger), but every day, they construct one <span class="huge float-left">in<br>tro<br>duct<br>ion</span> or more spacious houses” that can exceed three feet in length. The houses are transparent mucus structures that encase the creatures inside. Giant larvaceans beat their tails to pump seawater through these structures, which filter tiny bits of dead or drifting organic matter for the animals to eat. When their filters get clogged, the larvaceans abandon ship and construct a new house. Laden with debris from the water column, old houses rapidly sink to the seafloor. In a study published in Science Advances on Wednesday, scientists near California’s Monterey Bay have found that, through this process, giant larvaceans can filter all of the bay’s water. <br> That has been removed from the atmosphere by photosynthesizing organisms to the deep sea, where it can be buried and stored long term. And given their abundance in other parts of the world, these organisms likely play a crucial role in the global carbon cycle. When it comes to the flow of carbon in the ocean, we don’t know nearly as much as we should,” said Kakani Katija, a principal engineer at the Monterey Bay Aquarium Research Institute and the study’s lead author.</p>
				<p class="small">If we really want to understand how the system works, we have to look at all the players involved. Giant larvaceans are one important group we need to learn more about.” In the past, other scientists have tried studying giant larvaceans in the laboratory. But these efforts always failed because <br> the animals’ houses were too fragile to be harvested and collected specimens were never able <br> to build houses outside the ocean.</p>
				<p>To study the zooplankton in their natural habitat, Dr. Katija and her collaborators developed a new deep-sea imaging instrument, called DeepPIV, which they paired with a remotely operated vehicle. DeepPIV projects a sheet of laser light that cuts straight through a larvacean’s mucus house. <br> A high-definition camera on the remotely operated vehicle can then capture the inner pumping mechanisms illuminated by the laser.</p>
			</div>

		</article>

		<hgroup>
			<h2>Sign up</h2>
			<small class="gray">Register and share</small>
		</hgroup>

		<div class="d-flex">
			<app-form></app-form>
			<div id="mirror">
				<img src="./img/main/image3.png" alt="image3.png">
				<p class="small">If we really want to understand how the system works, <br> we have to look at all the players involved. Giant larvaceans are one important group we need to learn more about.</p>
			</div>
		</div>

		<footer class="d-flex justify-content-between">
			<img src="./img/main/lebedev-studio.svg" alt="lebedev-studio.svg">
			<p class="gray">I’m done :)</p>
		</footer>

	</b-container>

</template>

<script>

	import appCarousel from './components/TheCarousel';
	import appCart from './components/TheCart';
	import appForm from './components/TheForm';

	export default {
		components: {appCarousel, appCart, appForm},
		data() {
			return {
				selectedConditions: []
			};
		},
		methods: {
			checkboxesClick(e) {
				console.log(e.target);
				if( $(e.target).find('input').is(':checked') ) {
					$(e.target).removeClass('active');
					$(e.target).find('input').removeAttr('checked');
				} else {
					$(e.target).addClass('active');
					$(e.target).find('input').attr('checked', true);
				}
			},
			mainMenuClick() {
				$('header #menu').toggleClass('hidden');
			}
		}
	};

</script>

<style lang="sass">

	@import './style/vars'
	@import './style/fonts'
	@import './style/main'

</style>