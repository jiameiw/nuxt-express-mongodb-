<template>
  <div class="calendar">
    <!-- 年份 月份 -->
    <div class="calendar__months clr">
      <ul class="calendar__months__list">
        <li class="arrow prev" @click="pickPre(currentYear, currentMonth)">❮</li>
        <li class="calendar__year__month">
          <span class="calendar__choose__year">
            <span>{{ currentYear }}</span>
            <span>年</span>
            <span>{{ currentMonth }}</span>
            <span>月</span>
            <span>{{ currentDay }}</span>
            <span>日</span>
          </span>
        </li>
        <li class="arrow next" @click="pickNext(currentYear, currentMonth)">❯</li>
      </ul>
    </div>
    <!-- 星期 -->
    <ul class="calendar__weekdays">
      <li>一</li>
      <li>二</li>
      <li>三</li>
      <li>四</li>
      <li>五</li>
      <li>六</li>
      <li>日</li>
    </ul>
    <!-- 日期 -->
    <ul class="calendar__days">
      <!-- <loading-box v-if="!days.length" class="loading-box"></loading-box> -->
      <li v-for="day in days">
        <!--本月-->
        <span v-if="day.getMonth() + 1 != currentMonth" 
              class="other-month">{{ day.getDate() }}</span>
        <span v-else class="item" 
              :class="{ 'active': day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate() }">
          <!--today-->
          <router-link :to="`/date/${ formatDate(day.getFullYear(), day.getMonth() + 1, day.getDate())}`">{{ day.getDate() }}</router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'aside-calendar',
    data() {
      return {
        currentDay: 1,
        currentMonth: 1,
        currentYear: 1970,
        currentWeek: 1,
        days: []
      }
    },
    mounted() {
      this.initData(null)
    },
    methods: {
      initData(cur) {
        const date = cur ? new Date(cur) : new Date()
        this.currentDay = date.getDate()
        this.currentYear = date.getFullYear()
        this.currentMonth = date.getMonth() + 1
        this.currentWeek = date.getDay()
        if (this.currentWeek == 0) this.currentWeek = 7
        const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)
        // console.log("today:" + str + "," + this.currentWeek)
        this.days.length = 0
        // 今天是周日，放在第一行第7个位置，前面6个
        for (let i = this.currentWeek - 1; i >= 0; i--) {
          const d = new Date(str)
          d.setDate(d.getDate() - i)
          // console.log("y:" + d.getDate())
          this.days.push(d)
        }
        for (let i = 1; i <= 35 - this.currentWeek; i++) {
          const d = new Date(str)
          d.setDate(d.getDate() + i)
          this.days.push(d)
        }
      },
      pick(date) {
        alert(this.formatDate(date.getFullYear(), date.getMonth() + 1, date.getDate()))
      },
      pickPre(year, month) {
        //  setDate(0); 上月最后一天
        //  setDate(-1); 上月倒数第二天
        //  setDate(dx) 参数dx为 上月最后一天的前后dx天
        const d = new Date(this.formatDate(year, month, 1))
        d.setDate(0)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickNext(year, month) {
        const d = new Date(this.formatDate(year, month, 1))
        d.setDate(35)
        this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1))
      },
      pickYear(year, month) {
        alert(year + "," + month)
      },
      // 返回 类似 2016-01-02 格式的字符串
      formatDate(year, month, day) {
        const y = year
        let m = month
        if (m < 10) m = '0' + m
        let d = day
        if (d < 10) d = '0' + d
        return y + '-' + m + '-' + d
      }
    }
  }
</script>

<style scoped>
	.calendar{
		width: 235px;
	    height: 235px;
	    background-color: white;
	    position: relative;
	    left: 970px;
	    margin-bottom: 20px;
	    font-size: 14px;
	}
	.calendar__months__list li{
		float:left;
	}
	.calendar__months{
		padding: 13px;
	}
	.calendar__months__list{
		width: 100%;

	}
	.calendar__year__month{
		width: 75%;
    	text-align: center;
	}
	.calendar__months__list .arrow{
		width: 23px;
	    text-align: center;
	    background-color: #ddd;
	    cursor:pointer;
	}
	.calendar__weekdays,.calendar__days{
		display: flex;
		justify-content: space-between;
		width: 85%;
		margin:0 auto;
		flex-wrap: wrap;
	}
	.calendar__days li{
		width: 13%;
		text-align: center;
		padding: 7px 0;
	}
	.calendar__days span{
		width: 30px;
		height: 30px;
		display: inline-block;
		text-align: center;
		line-height: 30px;
	}
	.calendar__days .other-month{
		color: #ccc;
	}
	.calendar__days .active{
		background-color: #ddd;
		border-radius: 50%;
	}
</style>