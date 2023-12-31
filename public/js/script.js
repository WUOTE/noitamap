tileSources = ["maps/regular/betamap-2023-12-30-786433191.dzi",
	"maps/nightmare/2023-12-30-nightmare.dzi"
];

var index = 0;

tileSources = tileSources.map(function (tileSource, i) {
	return {
		tileSource: tileSource,
		opacity: i === 0 ? 1 : 0,
		preload: i === 1 ? true : false
	};
});

var os = OpenSeadragon({
	id: "os-container",
	prefixUrl: "vendor/openseadragon-bin-4.1.0/images/",
	//minZoomLevel: 0,
	//maxZoomLevel: 100,
	maxZoomPixelRatio: 20,
	defaultZoomLevel: 0,
	showNavigator: true,
	navigatorPosition: "TOP_RIGHT",
	navigatorDisplayRegionColor: "#FF0000",
	navigatorHeight: 285,
	navigatorWidth: 200,
	imageSmoothingEnabled: false,
	tileSources: tileSources,
	subPixelRoundingForTransparency: OpenSeadragon.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS,
	smoothTileEdgesMinZoom: 1,
	minScrollDeltaTime: 10,
	springStiffness: 50,

	/*overlays: [{
		className: "overlay-highlight",
		x: 0.33,
		y: 0.75,
		width: 0.2,
		height: 0.25
	}]*/
});

function nextMap() {
	var oldTiledImage = viewer.world.getItemAt(index);

	index = (index + 1) % tileSources.length;
	var nextIndex = (index + 1) % tileSources.length;

	var newTiledImage = viewer.world.getItemAt(index);
	var nextTiledImage = viewer.world.getItemAt(nextIndex);

	oldTiledImage.setOpacity(0);
	newTiledImage.setOpacity(1);
	nextTiledImage.setPreload(true);
}; 
