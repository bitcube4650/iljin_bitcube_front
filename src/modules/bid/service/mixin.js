
import cmmn from "../../../../public/js/common.js";

let mixin = {
	mounted() {
	},
	filters:{
		ftBiMode(val){
			if(val == 'A'){ return '지명경쟁입찰'}
			else if(val == 'B'){ return '일반경쟁입찰'}
		},
		ftInsMode(val){
			if(val == '1'){ return '파일등록'}
			else if(val == '2'){ return '직접입력'}
		},
		numberWithCommas(val) {
			if(!val) return '';
			else {
				val = Math.round(val);
				return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
		ftFileFlag(val){
			if(val == '0'){ return '대내용'}
			else if(val == '1'){ return '대외용'}
		},
		ftSuccYn(val){
			if(val == 'Y'){ return '낙찰'}
			else if(val == 'N'){ return ''}
		},
		ftEsmtYn(val){
			if(val == '0'){ return ''}
			else if(val == '1'){ return '공고확인'}
			else if(val == '2'){ return '상세'}
		}
	},
	data() {
		return {   
		}
	},
	methods: {
		//입찰 상세 조회
		async bidStatusRetrieve() {
			let searchParams = {
				biNo : this.biNo
			}

			this.$store.commit('loading');
			await this.$http.post('/api/v1/bidstatus/statusDetail', searchParams).then((response) => {
				if(response.data.status != '999'){
					this.data = response.data.data;
				}else{
					this.$swal({
						type: "warning",
						text: response.data.msg,
					});
				}
			}).finally(() => {
				this.$store.commit("finish");
			});
		},
		//파일 다운로드
		async downloadFile(fileInfo) {
			try {
				this.$store.commit('loading');
				const response = await this.$http.post(
					"/api/v1/bidComplete/fileDown",
					{ fileId: fileInfo.filePath }, // 서버에서 파일을 식별할 수 있는 고유한 ID 또는 다른 필요한 데이터
					{ responseType: "blob" } // 응답 데이터를 Blob 형식으로 받기
				);

				// 파일 다운로드를 위한 처리
				const url = window.URL.createObjectURL(new Blob([response.data]));
				const link = document.createElement("a");
				link.href = url;
				link.setAttribute("download", fileInfo.fileNm); // 다운로드될 파일명 설정
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
				this.$store.commit('finish');
			} catch (error) {
				console.error("Error downloading file:", error);
				this.$store.commit('finish');
			}
		},
		//파일 다운로드 파라미터 셋팅
		fnCustSpecFileDown(fileNm, filePath){
			if(!cmmn.isEmpty(fileNm) && !cmmn.isEmpty(filePath)){
				let fileInfo = {
					filePath : filePath
				,   fileNm : fileNm
				}

				this.downloadFile(fileInfo);
			}
		},
		//콤마 표기함수
		ftEsmtAmt(cust){
			if(cmmn.isEmpty(cust.esmtAmt)) return ''
			else {
				let esmtCurr = cmmn.defaultIfEmpty(cust.esmtCurr, '');
				let esmtAmt = cust.esmtAmt;
				return esmtCurr + (esmtCurr != '' ? ' ' : '') + esmtAmt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
		//소숫점처리 및 콤마
		fnRoundComma(number){
			if(cmmn.isEmpty(number)) return ''
			else {
				number = Math.round(number);
				return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		},
		//뒤로
		fnBack() {
			this.$router.go(-1);
		},
		//페이지 이동
		fnMovePage(name){
			this.$router.push({name:name});
		}
	}
}

export default mixin