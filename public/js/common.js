
export default {
	applyPub(){ 
		//프로필 드롭다운 (헤더)
        $('.profileDrop').click(function() {
            $('.profileDropWrap').addClass('active');
        });
        $(document).mouseup(function (e){
            var LayerPopup1 = $(".profileDropWrap");
            if(LayerPopup1.has(e.target).length === 0){
                LayerPopup1.removeClass("active");
            }
        });
        //프로필 드롭다운 (LNB)
        $('.profileDrop2').click(function() {
            $('.profileDropWrap2').addClass('active');
        });
        $(document).mouseup(function (e){
            var LayerPopup1 = $(".profileDropWrap2");
            if(LayerPopup1.has(e.target).length === 0){
                LayerPopup1.removeClass("active");
            }
        });

        //LNB
        $('.conLeft > li > a').click(function() {
            $('.depth2Lnb').hide();
            $(this).next('.depth2Lnb').fadeToggle();
            $('.conLeft > li').removeClass('active');
            $(this).parent('li').addClass('active');
        });

        //select
        const label = document.querySelectorAll('.selLabel');
        label.forEach(function(lb){
            lb.addEventListener('click', e => {
                let optionList = lb.nextElementSibling;
                let optionItems = optionList.querySelectorAll('.optionItem');
                clickLabel(lb, optionItems);
            })
        });
        const clickLabel = (lb, optionItems) => {
            if(lb.parentNode.classList.contains('active')) {
                lb.parentNode.classList.remove('active');
                optionItems.forEach((opt) => {
                    opt.removeEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
            } else {
                lb.parentNode.classList.add('active');
                optionItems.forEach((opt) => {
                    opt.addEventListener('click', () => {
                        handleSelect(lb, opt)
                    })
                })
                
            }
        }
        const handleSelect = (label, item) => {
            label.innerHTML = item.textContent;
            label.parentNode.classList.remove('active');		
            $('.selLabel').addClass('selAct');
        }

        //modal
        $(document).on('show.bs.modal', '.modal', function () {
            // 현재 열린 모달의 개수
            var visibleModals = $('.modal:visible');
            
            // 모달이 열릴 때마다 현재 열린 모달의 z-index를 가장 높게 조정
            var zIndex = 1040 + (10 * visibleModals.length);
            $(this).css('z-index', zIndex);
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1);
            $('.modal-dialog').css('z-index', zIndex + 1);

            // 이전에 열린 모달에는 modal-stack 클래스 추가
            visibleModals.not(this).addClass('modal-stack');
        });

        $(document).on('hidden.bs.modal', '.modal', function () {
            // 모달이 닫힐 때 modal-stack 클래스를 제거
            $('.modal:visible').removeClass('modal-stack');
            
            // 현재 열린 모달의 개수를 기준으로 z-index 값을 설정
            var zIndex = 1040 + (10 * $('.modal:visible').length);
            
            // 최상위에 있는 모달의 z-index 값을 다시 설정
            $('.modal:visible').last().css('z-index', zIndex);
            
            // 최상위에 있는 모달의 modal-backdrop과 modal-dialog의 z-index도 다시 설정
            $('.modal-backdrop:visible').last().css('z-index', zIndex - 1);
            $('.modal-dialog:visible').last().css('z-index', zIndex + 1);
        });


        //이미지맵 반응형
        $('img[usemap]').rwdImageMaps();

        //견적 상세보기
        $('.detailBtn').on('click', function(){
            $(this).closest('tr').next('.detailView').toggle();
        });

	},

    //달력
    applyCal(){
        //datepicker
        $( function() {
            $( ".datepicker" ).datepicker();
        } );

        $(".datepicker").datepicker({
            changeMonth: true, 
            changeYear: true,
            minDate: '-50y',
            nextText: '다음 달',
            prevText: '이전 달',
            yearRange: 'c-50:c+20',
            currentText: '오늘 날짜',
            closeText: '닫기',
            dateFormat: "yyyy-mm-dd",
            showAnim: "slide",
            showMonthAfterYear: true, 
            dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        });
    },

    //faq화면
    applyFaq(){
        //faq
        $('.faq1').show();
        $(".faqList > a").off("click").on("click", function (e) {
            $('.faq1').hide();
            e.preventDefault();
            var filterValue = $(this).data("filter");
            $(".faq_item_wrap div").removeClass("show");
            $(filterValue).addClass("show");
        });
        
        //faq
        $('.faq_item_wrap > div').click(function() {
            $('.faq_item_wrap > div').removeClass('active');
            $(this).addClass('active');
        });

        //tabStyle
        $('.tabStyle > a').click(function() {
            $('.tabStyle > a').removeClass("active");
            $(this).addClass("active");
        });
    }
}


