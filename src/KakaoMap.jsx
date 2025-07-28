import React, { useEffect } from "react";

const KakaoMap = () => {
	useEffect(() => {
		// 이미 스크립트가 삽입된 경우 중복 방지
		const scriptId = "kakao-map-script";
		if (document.getElementById(scriptId)) {
			console.log("카카오 스크립트 이미 존재");
			return;
		}

		const script = document.createElement("script");
		script.id = scriptId;
		script.src =
			"https://dapi.kakao.com/v2/maps/sdk.js?appkey=6d83f6ef8a8ab5257126fafa1fe781ed&autoload=true";
		script.async = true;

		script.onload = () => {
			console.log("카카오맵 스크립트 로드됨");
			if (window.kakao && window.kakao.maps) {
				const container = document.getElementById("map");
				const options = {
					center: new window.kakao.maps.LatLng(33.450701, 126.570667),
					level: 3,
				};
				new window.kakao.maps.Map(container, options);
			} else {
				console.error("카카오맵이 정의되지 않음");
			}
		};

		document.head.appendChild(script);
	}, []);

	return (
		<div
			id="map"
			style={{
				width: "500px",
				height: "400px",
				border: "1px solid black",
			}}
		/>
	);
};

export default KakaoMap;
