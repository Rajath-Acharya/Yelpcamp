Campground.create(
	{
		name: 'Konaje',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
		description: "This is a huge mountain"
	},
	function (err, campground) {
		if (err) {
			console.log(err);
		} else {
			console.log('Newly Created Campround');
			console.log(campground);
		}
	}
);

//

var campgrounds = [
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Konaje',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Kodangallu',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
	{
		name: 'Bogurgudde',
		image:
			'https://q-xx.bstatic.com/xdata/images/hotel/840x460/178853008.jpg?k=6fccff594145ccab4e720f696d58e05e4a43b5fc3c8006db7521f185d652aae3&o=',
	},
];