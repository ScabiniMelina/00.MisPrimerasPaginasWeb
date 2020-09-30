$(function () {
	/*creamos una funcion auto ejecutable -*/
	var SliderModule = (function () {
		var s = {}; //  creamos un  objeto 
		s.el = $('#slider'); //  tiene un atributo que es el contenedor de nuestro slider
		s.items = { //  atributo que contiene el contenedor que contiene las imagenes
			//  en un arreglo colocamos  cada contendor de las imagenes
			panels: s.el.find('.slider-contenedor > .img'),
		}

		// Interval del Slider variables necesarias 
		var SliderInterval, currentSlider = 0,
			nextSlider = 1,
			//  tamaño del slider  cuantos paneles son:
			lengthSlider = s.items.panels.length;
		// Constructor del Slider .
		//  en settings van a estar nuestras propiedades
		s.init = function (settings) {
			//  asignamos la duracion de la transicion
			this.settings = settings || {
				duration: 7000
			};
			var items = this.items,
				lengthPanels = items.panels.length,
				output = '';
			// Activamos nuestro Slider
			activateSlider();
		}
		// Funcion para activar el Slider
		var activateSlider = function () {
			//  en esta variable  le asignamos   una funcion que contiene una funcion como parametro que le va decir que diaposiiva es la que se va a mostrar y la duracion que la habiamos obtenido antes con el constructor
			SliderInterval = setInterval(s.startSlider, s.settings.duration);
		}
		// Funcion para la Animacion
		s.startSlider = function () {
			var items = s.items;
			// Comprobamos si es el ultimo panel para reiniciar el conteo
			if (nextSlider >= lengthSlider) {
				nextSlider = 0;
				currentSlider = lengthSlider - 1;
			}
			items.panels.eq(currentSlider).fadeOut('slow');
			items.panels.eq(nextSlider).fadeIn('slow');
			// Actualizamos los datos del slider
			currentSlider = nextSlider;
			nextSlider += 1;
		}

		return s;
	}());
	// asigna valores al constructor
	SliderModule.init({
		duration: 3000
	});
});
