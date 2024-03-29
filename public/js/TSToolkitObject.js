const objectVal = {
   KTNET_PKI_AX_CAB_VERSION : "2,0,7,0",						// 툴킷 버전 : 버전 업그레이드 변경되는 부분 
   KTNET_PKI_AX_CAB_FILEPATH : "./download/", 					// 사이트별로 CAB 파일이 배포되는 위치 
   KTNET_PKI_AX_CAB_SHA2 : "TSToolkit_2,0,7,0_sha2.cab",		// XP 이외 사용자를 위한 SHA256 코드사인된 CAB 파일명   
   KTNET_PKI_AX_CODEBASE : KTNET_PKI_AX_CAB_FILEPATH + KTNET_PKI_AX_CAB_SHA2
}

export default objectVal;


