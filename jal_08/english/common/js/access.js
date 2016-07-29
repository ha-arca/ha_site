function map_style(){
		
		var directionsService = new google.maps.DirectionsService();
		var directionsDisplay = new google.maps.DirectionsRenderer({draggable: true,suppressMarkers: true});
		
		var infoWindow = new google.maps.InfoWindow();
		
		/*----- 仮の位置を定義 -----*/
		var latlng = new google.maps.LatLng(34.669660,135.500607);
		var latlng_center = new google.maps.LatLng(34.669900,135.499007);
		
		
		var myOptions = {
		zoom: 17,
		center: latlng_center,
		disableDefaultUI: true,//全コントローラを非表示
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		
		/*----- スタイルを定義 -----*/
		var styles = [
			{
				"featureType": "all",
				"elementType": "all",
				"stylers": [
					{ "saturation": -100 }
				]
			}
		];

		/*----- スタイル名の指定 -----*/
		var styleName = 'MyStyle';
			
		/*----- マップの描画 -----*/
		var map = new google.maps.Map(document.getElementById('map_basic'), myOptions);
		
		/*----- スタイルの適用 -----*/
		map.mapTypes.set(styleName, new google.maps.StyledMapType(styles, { name: styleName }));
		map.setMapTypeId(styleName);
		
		/*----- アイコンの定義 -----*/
		var icon = new google.maps.MarkerImage(
			'/osaka/img/access/icon_map.png',
			new google.maps.Size(126,68),
			new google.maps.Point(0,0)
		);

		/*----- アイコンのオプション定義 -----*/
		var markerOptions = {
			icon: icon,
			position: latlng,
			map: map,
			title: ''
		};

		/*----- マーカー描画 -----*/
		var marker = new google.maps.Marker(markerOptions);
		marker_sts = 'on';//0表示状態
		
		
		var ucd = "大阪府大阪市中央区心斎橋筋２丁目５−１５";
		var request = {
			origin : $('#walks li').filter('.selected').attr('title'),
			destination : ucd,
			travelMode : google.maps.DirectionsTravelMode.WALKING
		};
		
		
		$('#walks li').click(function() {
			
			var _target = $(this)
			var _request = $.extend(request, { origin : _target.attr('title') });
			
			$('#walks li').removeClass('selected');
			$(this).addClass('selected');
			
			setRoute(_request);
			
			return false;
		});
		
		
		
	$('#map_icon_btn').click(function(){
		if(marker_sts == 'on'){
			marker.setMap(null);
			marker_sts = 'off';
		}else{
			marker = new google.maps.Marker(markerOptions);
			marker_sts = 'on';
		}
	});
	
	function setRoute(aRequest) {
		directionsService.route(aRequest, function(result, status) {
			if(status == google.maps.DirectionsStatus.OK) {	

				directionsDisplay.setDirections(result);
				directionsDisplay.setMap(map);
				
			}
		});	
	}
	
	google.maps.event.addListenerOnce(map, 'idle', function(){
		setRoute(request);
	});
};

$(document).ready(function(){
	$(".LightboxImg").colorbox({
		rel:'LightboxImg'
	});
});

$(window).load(function(){
	map_style();
});

/*
$(window).load(function(){
	map_style();
});*/