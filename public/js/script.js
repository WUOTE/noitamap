var os = OpenSeadragon({
	id: "os-container",
	prefixUrl: "vendor/openseadragon-bin-4.1.0/images/",
	//minZoomLevel: 0,
	//maxZoomLevel: 100,
	maxZoomPixelRatio: 20,
	defaultZoomLevel: 0,
	showNavigator: true,
	navigatorPosition: "BOTTOM_RIGHT",
	navigatorDisplayRegionColor: "#777777",
	navigatorHeight: 285,
	navigatorWidth: 200,
	imageSmoothingEnabled: false,
	subPixelRoundingForTransparency: OpenSeadragon.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS,
	smoothTileEdgesMinZoom: 1,
	minScrollDeltaTime: 10,
	springStiffness: 50,
	tileSources: ["maps/regular/betamap-2023-12-19-786433191.dzi"]
	/*overlays: [{
		className: "overlay-highlight",
		x: 0.33,
		y: 0.75,
		width: 0.2,
		height: 0.25
	}]*/
});
