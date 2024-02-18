<template>
<div class="pagination1 text-center">
	<a href="#" @click.prevent="goPage(0)" title="첫페이지로 이동"><i class="fa-light fa-chevrons-left"></i></a>
	<a href="#" @click.prevent="goPage(curr==0?0:curr*5-1)" title="이전 페이지로 이동"><i class="fa-light fa-chevron-left"></i></a>
	<a href="#" @click.prevent="goPage(0)" title="1페이지로 이동" class="number active" v-if="page.empty">1</a>
	<a href="#" @click.prevent="goPage(curr*5+idx-1)" title="1페이지로 이동" :class="page.number+1 == curr*5+idx ? 'number active':'number'" v-for="idx in 5" v-if="page.empty == false && page.totalPages >= curr*5+idx">{{ curr*5+idx }}</a>
	<a href="#" @click.prevent="goPage(page.number==page.totalPages-1?page.number:(curr+1)*5)" title="다음 페이지로 이동"><i class="fa-light fa-chevron-right"></i></a>
	<a href="#" @click.prevent="goPage(page.totalPages-1)" title="끝페이지 다음 페이지로 이동"><i class="fa-light fa-chevrons-right"></i></a>
</div>
</template>

<script>
export default {
  name: 'Pagination',
  props: [ 'searchFunc', 'page' ],
  watch: {
	page: {
		handler: function () {
			this.curr = Math.floor((this.page.number) / 5);
		}
	}
  },
  data() {
    return {
		curr: 0
    }
  },
  methods: {
	goPage(page) {
		this.$emit('searchFunc', page);
	}
  }
};
</script>

