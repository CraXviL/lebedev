import Vue from 'vue';
import App from './App.vue';

import jquery from 'jquery';
import AnimatedVue from 'animated-vue';
import 'animate.css/animate.css';
Vue.use(AnimatedVue);
import 'html5shiv';
import 'babel-polyfill';

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.filter('toFixed', function (value, n) {
    if (!value) return '';
    return value.toFixed(n);
});

new Vue({
	el: '#app',
	render: h => h(App)
});

$('document').ready(function() {
	$('.select').click(function(){
		var dropBlock = $(this).parent().find('.drop');
		if (dropBlock.is(':hidden')) {
			dropBlock.slideDown();
			$(this).addClass('active');
			$('.drop').find('li').click(function(){
				var selectResult = $(this).html();
				$(this).parent().parent().find('input').val(selectResult);
				$(this).parent().parent().find('.select').removeClass('active').html(selectResult);
				dropBlock.slideUp();
			});
		} else {
			$(this).removeClass('active');
			dropBlock.slideUp();
		}
		return false;
	});
});
