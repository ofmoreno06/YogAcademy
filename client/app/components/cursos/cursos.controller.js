(function(){
	'use strict';
	angular.module('yogaAcademy')
	.controller('cursosController', CursosController);

	CursosController.$inject = ['courseId'];
	function CursosController(courseId){
		const ctrl = this;
		
		ctrl.$onInit = function(){
			ctrl.course = getFakeCoursesData(courseId);
		}

		function getFakeCoursesData(id){
			const courses = [
				{
					id: 1,
					name: 'Curso 1',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 2,
					name: 'Curso 2',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 3,
					name: 'Curso 3',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				},
				{
					id: 4,
					name: 'Curso 4',
					description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
					duration: '4 semanas'
				}
			];
			return courses[id - 1];
		}

	}
})();
