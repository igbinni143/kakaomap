import React, { useEffect } from "react";

const KakaoMap = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src =
			"//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은_APP_KEY_여기에&autoload=false";
		script.async = true;

		script.onload = () => {
			window.kakao.maps.load(() => {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(33.450701, 126.570667),
					level: 3,
				};

				new window.kakao.maps.Map(container, options);
			});
		};

		document.head.appendChild(script);
	}, []);

	return <div id="map" style={{ width: "500px", height: "400px" }} />;
};

export default KakaoMap;
